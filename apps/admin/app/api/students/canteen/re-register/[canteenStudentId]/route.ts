import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database"; // Assure-toi du chemin correct
import { requireRole } from "@/lib/middlewares/require-role";

export const dynamic = "force-dynamic";

interface CanteenStudentContext {
  params: Promise<{
    canteenStudentId: string;
  }>;
}

/**
 * POST /api/students/canteen/re-register/:canteenStudentId
 * Réinscrire un élève à la cantine (Admin seulement).
 */
export async function POST(req: NextRequest, context: CanteenStudentContext) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentId } = await context.params;

  // Validation de l'ID
  if (!canteenStudentId || typeof canteenStudentId !== "string") {
    return NextResponse.json(
      {
        message: "ID d'élève cantine invalide",
        example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Vérifier l'existence et le statut
      const student = await tx.canteenStudent.findUnique({
        where: { id: canteenStudentId },
        include: {
          enrolledStudent: {
            select: {
              name: true,
              matricule: true,
              class: true, // Ajouté pour le message de succès
            },
          },
          parent: {
            select: {
              user: {
                select: {
                  isActive: true,
                },
              },
            },
          },
        },
      });

      if (!student) {
        // Utilise une throw "objet" pour capturer le statut et le message
        throw { status: 404, message: "Élève cantine non trouvé" };
      }

      if (student.isActive) {
        throw { status: 400, message: "Cet élève est déjà actif" };
      }

      // 2. Vérifier que le parent est actif
      if (!student.parent?.user?.isActive) {
        throw {
          status: 400,
          message: "Le parent associé n'est pas actif",
        };
      }

      // 3. Mise à jour
      const updatedStudent = await tx.canteenStudent.update({
        where: { id: canteenStudentId },
        data: { isActive: true },
        include: {
          enrolledStudent: {
            select: {
              name: true,
              class: true,
            },
          },
        },
      });

      await tx.enrolledStudent.update({
        where: { id: updatedStudent.enrolledStudentId },
        data: { isRegisteredToCanteen: true },
      });

      // 4. Créer un nouvel abonnement vide
      await tx.abonnement.create({
        data: {
          canteenStudentId,
          status: "EXPIRE",
          price: 0,
          duration: 0,
        },
      });

      return {
        studentId: updatedStudent.id,
        studentName: updatedStudent.enrolledStudent.name,
        className: updatedStudent.enrolledStudent.class,
        parentId: updatedStudent.parentId,
      };
    });

    return NextResponse.json(
      {
        message: `${result.studentName} a été réinscrit avec succès`,
        student: result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur réinscription:", error);
    const status = error.status || 500; // Récupère le statut de l'erreur personnalisée ou 500 par défaut
    return NextResponse.json(
      {
        message: error.message || "Erreur serveur",
        details:
          status === 500 && process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      },
      { status } // Utilise le statut récupéré
    );
  }
}
