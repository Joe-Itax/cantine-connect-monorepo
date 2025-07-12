import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

/**
 * POST /api/students/canteen/scan
 * Scanner le QR code d’un élève (Admin, Agent).
 */
export async function POST(req: NextRequest) {
  // const roleCheckResult = await requireRole(["ADMIN", "AGENT"]);
  // if (roleCheckResult) {
  //   return roleCheckResult;
  // }

  const { matriculeHashe, ...extraFields } = await req.json();

  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      {
        message: "Seul 'matriculeHashe' est autorisé dans la requête.",
      },
      { status: 400 }
    );
  }

  if (!matriculeHashe) {
    return NextResponse.json(
      {
        message: "Veuillez fournir le matricule hashé pour le scan.",
      },
      { status: 400 }
    );
  }

  try {
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);

    // Démarrage de la transaction Prisma
    const transactionResult = await prisma.$transaction(async (tx) => {
      // 1 seule requête pour récupérer TOUT ce qu'il faut !
      const student = await tx.canteenStudent.findUnique({
        where: { matriculeHashe },
        select: {
          id: true,
          isActive: true,
          enrolledStudent: {
            select: { name: true },
          },
          abonnements: {
            where: {
              status: "ACTIF",
            },
            select: {
              id: true,
              endDate: true,
            },
          },
          repas: {
            where: {
              date: { gte: todayStart, lte: todayEnd },
            },
            select: {
              id: true,
            },
          },
        },
      });

      if (!student || !student.isActive) {
        // Retourne directement une réponse d'erreur
        return {
          response: NextResponse.json(
            { message: "Élève introuvable ou inactif." },
            { status: 404 } // 404 Not Found est plus approprié ici
          ),
        };
      }

      const abonnement = student.abonnements[0];
      if (!abonnement) {
        // Retourne directement une réponse d'erreur
        return {
          response: NextResponse.json(
            {
              message: "L'élève n'a pas d'abonnement actif.",
              studentName: student.enrolledStudent.name, // Inclure le nom pour le front
            },
            { status: 400 }
          ),
        };
      }

      // Vérifie si l'abonnement est expiré
      if (abonnement.endDate && abonnement.endDate < now) {
        await Promise.all([
          tx.abonnement.update({
            where: { id: abonnement.id },
            data: { status: "EXPIRE" },
          }),
          tx.notification.create({
            data: {
              canteenStudentId: student.id,
              message: `L'abonnement de ${student.enrolledStudent.name} a expiré.`,
              type: "abonnement_expiré",
              details: {
                expiredAt: now,
              },
            },
          }),
        ]);

        // Retourne directement une réponse d'erreur
        return {
          response: NextResponse.json(
            {
              message: "L'abonnement de cet élève a expiré.",
              studentName: student.enrolledStudent.name, // Inclure le nom pour le front
            },
            { status: 400 }
          ),
        };
      }

      // Vérifie si l'élève a déjà été servi aujourd'hui
      if (student.repas.length > 0) {
        // Retourne directement une réponse d'erreur
        return {
          response: NextResponse.json(
            {
              message: "L'élève a déjà été servi aujourd'hui.",
              studentName: student.enrolledStudent.name, // Inclure le nom pour le front
            },
            { status: 400 }
          ),
        };
      }

      // Si toutes les vérifications sont passées, enregistre le repas
      const [repas, notification] = await Promise.all([
        tx.repas.create({
          data: {
            canteenStudentId: student.id,
            date: now,
            status: true,
          },
        }),
        tx.notification.create({
          data: {
            canteenStudentId: student.id,
            message: `Votre enfant ${student.enrolledStudent.name} a été servi à la cantine aujourd'hui.`,
            type: "repas",
            details: {
              date: now,
              status: "servi",
            },
          },
        }),
      ]);

      // Retourne les données de succès pour le frontend
      return {
        data: {
          message: "L'élève a été servi avec succès.",
          repas,
          notification,
          student: {
            id: student.id,
            name: student.enrolledStudent.name,
            matriculeHashe: matriculeHashe, // Inclure le matricule pour la cohérence
          },
        },
        status: 200,
      };
    });

    // Si le résultat de la transaction contient une réponse (en cas d'erreur métier gérée)
    if ("response" in transactionResult) {
      return transactionResult.response;
    }

    // Si la transaction a réussi et a retourné des données (status 200)
    return NextResponse.json(transactionResult.data, {
      status: transactionResult.status,
    });
  } catch (error: any) {
    // Ce bloc catch gérera uniquement les erreurs inattendues de Prisma ou autres erreurs système
    console.error("Erreur serveur inattendue lors du scan du QR Code :", error);

    // Ne pas exposer les détails de l'erreur en production
    const errorMessage =
      process.env.NODE_ENV === "development"
        ? error.message || "Erreur serveur inattendue."
        : "Une erreur interne est survenue.";

    return NextResponse.json(
      {
        message: "Erreur serveur lors du scan du QR Code.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
