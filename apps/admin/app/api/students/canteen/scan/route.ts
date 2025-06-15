import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

/**
 * POST /api/students/canteen/scan
 * Scanner le QR code d’un élève (Admin, Agent).
 */
export async function POST(req: NextRequest) {
  const roleCheckResult = await requireRole(["ADMIN", "AGENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

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

    const result = await prisma.$transaction(async (tx) => {
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
        throw { status: 400, message: "Élève introuvable ou inactif." };
      }

      const abonnement = student.abonnements[0];
      if (!abonnement) {
        throw { status: 400, message: "L'élève n'a pas d'abonnement actif." };
      }

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

        throw { status: 400, message: "L'abonnement de cet élève a expiré." };
      }

      if (student.repas.length > 0) {
        throw { status: 400, message: "L'élève a déjà été servi aujourd'hui." };
      }

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

      return { repas, notification };
    });

    return NextResponse.json(
      {
        message: "L'élève a été servi avec succès.",
        ...result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur lors du scan du QR Code :", error);

    const status = error.status || 500;
    return NextResponse.json(
      {
        message: error.message || "Erreur serveur lors du scan du QR Code.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status }
    );
  }
}
