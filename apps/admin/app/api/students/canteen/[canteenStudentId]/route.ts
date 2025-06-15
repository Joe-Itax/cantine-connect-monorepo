import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

export const dynamic = "force-dynamic";

interface CanteenStudentContext {
  params: Promise<{
    canteenStudentId: string;
  }>;
}

/**
 * GET /api/students/canteen/:canteenStudentId
 * Récupérer les détails d'un élève enregistré à la cantine (Admin seulement).
 */
export async function GET(req: NextRequest, context: CanteenStudentContext) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentId } = await context.params;

  if (!canteenStudentId) {
    return NextResponse.json(
      { message: "Le canteenStudentId de l'élève est requis." },
      { status: 400 }
    );
  }

  try {
    const canteenStudent = await prisma.canteenStudent.findUnique({
      where: {
        id: canteenStudentId,
      },
      select: {
        id: true,
        matriculeHashe: true, // Keep this if you need it, otherwise remove it from selection
        isActive: true,
        createdAt: true,
        updatedAt: true,
        enrolledStudent: {
          select: {
            id: true,
            name: true,
            class: true,
            gender: true,
            matricule: true,
            createdAt: true,
            updatedAt: true,
            isRegisteredToCanteen: true,
          },
        },
        parent: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
        },
        abonnements: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1, // Récupérer seulement le dernier abonnement
        },
      },
    });

    if (!canteenStudent) {
      return NextResponse.json(
        {
          message: "Élève non trouvé ou désactivé.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Détails de l'élève récupérés avec succès",
      data: canteenStudent,
    });
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des détails de l'élève :",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la récupération des détails de l'élève.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
