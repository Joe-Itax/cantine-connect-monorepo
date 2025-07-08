import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { paginationQuery } from "@workspace/ui/lib/pagination";
import { removeAccents } from "@workspace/ui/lib/remove-accents";

/**
 * GET /api/students/canteen/search
 * Chercher un élève par recherche (name, matricule & class) (Admin seulement).
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
        {
          message: "Veuillez fournir une requête de recherche valide.",
        },
        { status: 400 }
      );
    }

    const result = await paginationQuery(prisma.canteenStudent, page, limit, {
      where: {
        OR: [
          {
            enrolledStudent: {
              searchableName: {
                contains: removeAccents(query),
                mode: "insensitive",
              },
            },
          },
          {
            enrolledStudent: {
              matricule: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            enrolledStudent: {
              class: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
        isActive: true,
      },
      include: {
        enrolledStudent: true,
        parent: {
          include: {
            user: {
              select: { email: true }, // Exclure le mot de passe
            },
          },
        },
        abonnements: {
          select: {
            status: true,
            startDate: true,
            endDate: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (result.error) {
      return NextResponse.json(
        { message: result.error, ...result },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Liste des élèves trouvés",
        ...result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la recherche des élèves à la cantine :",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la recherche des élèves à la cantine.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
