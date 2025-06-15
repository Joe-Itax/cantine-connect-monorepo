// apps/admin/app/api/students/enrolled/route.ts

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { paginationQuery } from "@/utils/pagination";

/**
 * GET /api/students/enrolled
 * Lister tous les élèves inscrits à l'école (Admin seulement).
 */
export async function GET(req: NextRequest) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const result = await paginationQuery(prisma.enrolledStudent, page, limit, {
      select: {
        id: true,
        name: true,
        class: true,
        gender: true,
        matricule: true,
        isRegisteredToCanteen: true,
        createdAt: true,
        updatedAt: true,
        canteenStudent: true,
      },
    });

    if (result.error) {
      return NextResponse.json(
        { message: result.error, ...result },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Liste des élèves",
      ...result,
    });
  } catch (error: any) {
    console.error("Erreur lors de la récupération des élèves :", error);
    return NextResponse.json(
      {
        message: "Une erreur est survenue lors de la récupération des élèves.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
