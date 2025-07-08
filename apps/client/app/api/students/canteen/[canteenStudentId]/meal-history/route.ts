import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

export const dynamic = "force-dynamic";

interface MealHistoryContext {
  params: Promise<{
    canteenStudentId: string;
  }>;
}

/**
 * GET /api/students/canteen/:canteenStudentId/meal-history
 * Obtenir l’historique des repas (Admin, Parent).
 */
export async function GET(req: NextRequest, context: MealHistoryContext) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentId } = await context.params;

  if (!canteenStudentId) {
    return NextResponse.json(
      {
        message: "Veuillez fournir l'ID de l'élève.",
      },
      { status: 400 }
    );
  }

  try {
    const student = await prisma.canteenStudent.findUnique({
      where: { id: canteenStudentId },
    });

    if (!student) {
      return NextResponse.json(
        {
          message: "Élève introuvable.",
        },
        { status: 404 }
      );
    }

    // Récupérer tous les repas de l'élève
    const repas = await prisma.repas.findMany({
      where: { canteenStudentId },
      orderBy: { date: "asc" },
    });

    // Formater les données pour le calendrier
    const calendar = repas.map((repasItem) => ({
      date: repasItem.date.toISOString().split("T")[0], // Format YYYY-MM-DD
      status: repasItem.status, // true = servi, false = non servi, null = week-end ou absence
    }));

    return NextResponse.json(
      {
        message: "Historique des repas récupéré avec succès.",
        calendar,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération de l'historique des repas :",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la récupération de l'historique des repas.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
