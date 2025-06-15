import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

export const dynamic = "force-dynamic";

interface SingleNotificationContext {
  params: Promise<{
    canteenStudentId: string; // Not strictly used for the update but good for context
    notificationId: string;
  }>;
}

/**
 * PATCH /api/students/canteen/:canteenStudentId/notifications/:notificationId
 * Marquer une notif spécifique comme lue (Admin, Parent).
 */
export async function PATCH(
  req: NextRequest,
  context: SingleNotificationContext
) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { notificationId } = await context.params;
  const notificationIdInt = parseInt(notificationId);

  if (isNaN(notificationIdInt)) {
    return NextResponse.json(
      {
        message: "L'ID de la notification doit être un nombre valide.",
      },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const notification = await tx.notification.findUnique({
        where: { id: notificationIdInt },
      });

      if (!notification) {
        throw { status: 404, message: "Notification introuvable." };
      }

      const updatedNotification = await tx.notification.update({
        where: { id: notificationIdInt },
        data: { read: true },
      });

      return updatedNotification;
    });

    return NextResponse.json(
      {
        message: "Notification marquée comme lue.",
        notification: result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la marque comme lue de la notification :",
      error
    );
    const status = error.status || 500;
    return NextResponse.json(
      {
        message:
          error.message ||
          "Une erreur est survenue lors de la marque comme lue de la notification.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status }
    );
  }
}
