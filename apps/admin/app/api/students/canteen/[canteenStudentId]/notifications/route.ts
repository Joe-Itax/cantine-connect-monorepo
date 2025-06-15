import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { paginationQuery } from "@/utils/pagination";

export const dynamic = "force-dynamic";

interface CanteenStudentNotificationsContext {
  params: Promise<{
    canteenStudentId: string;
  }>;
}

/**
 * GET /api/students/canteen/:canteenStudentId/notifications
 * Récupérer les notifs d’un élève (Admin, Parent).
 */
export async function GET(
  req: NextRequest,
  context: CanteenStudentNotificationsContext
) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentId } = await context.params;
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  try {
    const result = await paginationQuery(prisma.notification, page, limit, {
      where: { canteenStudentId },
      orderBy: { createdAt: "desc" },
      include: {
        canteenStudent: {
          select: {
            id: true,
            enrolledStudent: {
              select: {
                name: true,
              },
            },
          },
        },
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
        message: "Liste des notifications",
        ...result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur lors de la récupération des notifications :", error);
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la récupération des notifications.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/students/canteen/:canteenStudentId/notifications
 * Marquer toutes les notifs comme lues (Admin, Parent).
 */
export async function PATCH(
  req: NextRequest,
  context: CanteenStudentNotificationsContext
) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentId } = await context.params;

  try {
    const notifications = await prisma.notification.updateMany({
      where: { canteenStudentId },
      data: { read: true },
    });

    return NextResponse.json(
      {
        message: "Toutes les notifications marquées comme lues.",
        notifications,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la marque comme lues de toutes les notifications :",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la marque comme lues de toutes les notifications.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
