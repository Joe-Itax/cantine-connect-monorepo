import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth, prisma } from "database";

export const dynamic = "force-dynamic";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";
  const take = 3;

  try {
    let users = [];
    let canteenStudents = [];

    if (query) {
      // Search for users
      users = await prisma.user.findMany({
        where: {
          OR: [
            { searchableName: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          slug: true,
          name: true,
          email: true,
        },
        take: 10,
      });

      // Search for canteenStudents
      canteenStudents = await prisma.canteenStudent.findMany({
        where: {
          OR: [
            {
              enrolledStudent: {
                searchableName: { contains: query, mode: "insensitive" },
              },
            },
            {
              enrolledStudent: {
                matricule: { contains: query, mode: "insensitive" },
              },
            },
            {
              enrolledStudent: {
                class: { contains: query, mode: "insensitive" },
              },
            },
          ],
        },
        select: {
          id: true,
          slug: true,
          enrolledStudent: {
            select: {
              name: true,
              matricule: true,
              class: true,
            },
          },
          createdAt: true,
        },
        take: 10,
      });
    } else {
      // No query: return default recent items
      users = await prisma.user.findMany({
        select: {
          id: true,
          slug: true,
          name: true,
          email: true,
        },
        orderBy: { createdAt: "desc" },
        take: take,
      });

      canteenStudents = await prisma.canteenStudent.findMany({
        select: {
          id: true,
          slug: true,
          enrolledStudent: {
            select: {
              name: true,
              matricule: true,
              class: true,
            },
          },
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
        take: take,
      });
    }

    return NextResponse.json({ users, canteenStudents }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la recherche globale:", error);
    return NextResponse.json(
      {
        message: "Erreur lors de la recherche globale.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
