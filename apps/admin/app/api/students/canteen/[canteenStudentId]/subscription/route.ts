import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { pricing } from "@workspace/ui/lib/pricing";

export const dynamic = "force-dynamic";

interface CanteenStudentSubscriptionContext {
  params: Promise<{
    canteenStudentId: string;
  }>;
}

/**
 * POST /api/students/canteen/:canteenStudentId/subscription
 * Acheter un abonnement pour un élève (Parent, Admin).
 */
export async function POST(
  req: NextRequest,
  context: CanteenStudentSubscriptionContext
) {
  const roleCheckResult = await requireRole(["PARENT", "ADMIN"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { duration, ...extraFields } = await req.json();
  const { canteenStudentId } = await context.params;

  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      {
        message: "Seul 'duration' est autorisé dans la requête.",
      },
      { status: 400 }
    );
  }

  const validDurations = Object.keys(pricing).map(Number);
  if (!duration || !validDurations.includes(duration)) {
    return NextResponse.json(
      {
        message: `Durée invalide. Durées acceptées : '${validDurations.join(
          ", "
        )}' en Number`,
      },
      { status: 400 }
    );
  }

  const { price, type } = (pricing as any)[duration];

  try {
    const result = await prisma.$transaction(async (tx) => {
      // --- Début de la logique du checkSubscriptionExpirationMiddleware ---
      const now = new Date();

      const activeAbonnement = await tx.abonnement.findFirst({
        where: {
          canteenStudentId,
          status: "ACTIF", // Assure-toi que c'est "ACTIF" si c'est une ENUM
        },
      });

      if (
        activeAbonnement &&
        activeAbonnement.endDate &&
        activeAbonnement.endDate < now
      ) {
        // Si l'abonnement a expiré => le passer à "EXPIRE"
        await tx.abonnement.update({
          where: { id: activeAbonnement.id },
          data: { status: "EXPIRE" }, // Assure-toi que c'est "EXPIRE" si c'est une ENUM
        });

        // Pas besoin de refaire un findUnique pour l'élève ici,
        // car le student est trouvé juste après pour l'achat.
        // Si cette logique devait bloquer l'achat, tu la mettrais avant.
        // Ici, il semble que le but est de "nettoyer" l'état de l'abonnement expiré
        // et de notifier, même si l'utilisateur est sur le point d'en acheter un nouveau.
        const studentForNotification = await tx.canteenStudent.findUnique({
          where: { id: canteenStudentId },
          include: {
            enrolledStudent: true,
          },
        });

        if (studentForNotification) {
          // Créer une notification pour prévenir
          await tx.notification.create({
            data: {
              canteenStudent: { connect: { id: canteenStudentId } },
              message: `L'abonnement de ${studentForNotification.enrolledStudent.name} a expiré.`,
              type: "abonnement_expiré",
              details: {
                expiredAt: now,
              },
            },
          });
          console.log(
            `🚨 Abonnement expiré traité pour ${studentForNotification.enrolledStudent.name}`
          );
        }
      }
      // --- Fin de la logique du checkSubscriptionExpirationMiddleware ---

      const student = await tx.canteenStudent.findUnique({
        where: { id: canteenStudentId, isActive: true },
        include: {
          parent: { include: { user: true } },
          enrolledStudent: true,
        },
      });

      if (!student) {
        throw {
          status: 404,
          message: "Aucun élève actif trouvé avec cet identifiant.",
        };
      }

      const newEndDate = new Date(
        now.getTime() + duration * 24 * 60 * 60 * 1000
      );

      // On recherche à nouveau un abonnement actif pour cet élève
      // après l'exécution potentielle de la logique d'expiration.
      const currentActiveAbonnement = await tx.abonnement.findFirst({
        where: { canteenStudentId, status: "ACTIF" },
      });

      let abonnement;
      if (currentActiveAbonnement) {
        // Si un abonnement actif existe toujours (n'a pas été marqué comme expiré),
        // on le met à jour avec la nouvelle durée.
        // Cela signifie que l'abonnement est "prolongé" à partir de sa date de fin actuelle,
        // ou à partir de "now" si la date de fin actuelle est passée (ce qui ne devrait
        // pas arriver si le middleware d'expiration a fait son travail ou si un nouvel
        // abonnement est acheté alors que l'ancien est encore valide).
        // Il est crucial ici de déterminer si la prolongation doit être à partir de `now`
        // ou à partir de `existingActiveAbonnement.endDate`.
        // Si tu veux une prolongation additive à partir de la date de fin actuelle
        // (par exemple, si un abonnement se termine le 15 juin et que tu achètes 30 jours,
        // il se terminera le 15 juillet), tu devras ajuster la `startDate` et `endDate`.
        // Pour l'instant, je maintiens la logique de "redémarrer" l'abonnement à partir de `now`.
        // Si tu veux une prolongation à partir de la date de fin existante, c'est :
        // const baseDate = currentActiveAbonnement.endDate > now ? currentActiveAbonnement.endDate : now;
        // const newEndDateExtended = new Date(baseDate.getTime() + duration * 24 * 60 * 60 * 1000);

        abonnement = await tx.abonnement.update({
          where: { id: currentActiveAbonnement.id },
          data: {
            duration,
            price,
            type,
            startDate: now, // Redémarre l'abonnement à partir de maintenant
            endDate: newEndDate,
            status: "ACTIF",
          },
        });
      } else {
        // S'il n'y a pas d'abonnement actif (soit jamais eu, soit expiré et traité),
        // on en crée un nouveau.
        abonnement = await tx.abonnement.create({
          data: {
            canteenStudentId,
            duration,
            price,
            type,
            startDate: now,
            endDate: newEndDate,
            status: "ACTIF",
          },
        });
      }

      const notification = await tx.notification.create({
        data: {
          canteenStudent: { connect: { id: canteenStudentId } },
          message: `Un abonnement de ${duration} jours a été acheté pour ${student.enrolledStudent.name}.`,
          type: "abonnement",
          details: { duration, price, endDate: newEndDate, type },
        },
      });

      return { abonnement, notification };
    });

    return NextResponse.json(
      {
        message: "Abonnement acheté avec succès.",
        data: result,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur lors de l'achat de l'abonnement :", error);
    const status = error.status || 500;
    return NextResponse.json(
      {
        message: error.message || "Erreur serveur lors de l'achat.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status }
    );
  }
}
