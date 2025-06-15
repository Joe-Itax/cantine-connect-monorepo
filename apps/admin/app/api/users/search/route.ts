import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { paginationQuery } from "@workspace/ui/lib/pagination";
import { removeAccents } from "@workspace/ui/lib/remove-accents";

/**
 * GET /api/users/search
 * Rechercher un utilisateur par email ou nom (Admin seulement).
 */
export async function GET(req: NextRequest) {
  // Vérification du rôle avec ton middleware
  const roleCheckResult = await requireRole(["ADMIN"]);
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

    const result = await paginationQuery(prisma.user, page, limit, {
      where: {
        OR: [
          {
            searchableName: {
              contains: removeAccents(cleanedQuery),
              mode: "insensitive",
            },
          },
          { email: { contains: cleanedQuery, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    // Delete password and searchableName from result data
    // Ici, le `select` de la requête Prisma devrait déjà empêcher le `password` d'être renvoyé.
    // searchableName n'est pas sélectionné non plus.
    // Si tu veux t'assurer que d'autres champs sensibles sont enlevés:
    result.data = result.data.map((user: any) => {
      // Assure-toi que les propriétés `password` et `searchableName` n'existent pas
      // si elles ont été sélectionnées par erreur ou d'une autre manière.
      const { password, searchableName, ...rest } = user;
      return rest;
    });

    return NextResponse.json(
      { message: "Résultats de la recherche", ...result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur lors de la recherche des utilisateurs :", error);
    return NextResponse.json(
      {
        message: "Erreur lors de la recherche.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
