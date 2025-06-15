import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { paginationQuery } from "@workspace/ui/lib/pagination";
import { removeAccents } from "@workspace/ui/lib/remove-accents";

/**
 * GET /api/students/enrolled/search
 * Chercher un élève par recherche (name, matricule, etc.) (Admin seulement).
 * Note: La logique de recherche exacte de ton contrôleur n'était pas fournie pour `searchEnrolledStudent`,
 * j'ai donc ajouté une implémentation générique basée sur `name` et `matricule`. Adapte si nécessaire.
 */
export async function GET(req: NextRequest) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { message: "Veuillez fournir une requête de recherche." },
        { status: 400 }
      );
    }

    const cleanedQuery = query.trim();
    if (cleanedQuery.length < 1) {
      return NextResponse.json(
        { message: "La requête doit contenir au moins 1 caractère." },
        { status: 400 }
      );
    }

    const result = await paginationQuery(prisma.enrolledStudent, page, limit, {
      where: {
        OR: [
          {
            name: {
              contains: cleanedQuery,
              mode: "insensitive",
            },
          },
          {
            searchableName: {
              // Assurez-vous que ce champ existe dans votre schéma Prisma
              contains: removeAccents(cleanedQuery),
              mode: "insensitive",
            },
          },
          {
            matricule: {
              contains: cleanedQuery,
              mode: "insensitive",
            },
          },
        ],
      },
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
      orderBy: {
        name: "asc",
      },
    });

    if (result.error) {
      return NextResponse.json(
        { message: result.error, ...result },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Résultats de la recherche d'élèves",
      ...result,
    });
  } catch (error: any) {
    console.error("Erreur lors de la recherche des élèves :", error);
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la recherche des élèves inscrits.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
