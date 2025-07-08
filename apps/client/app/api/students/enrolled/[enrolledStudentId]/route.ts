import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { removeAccents } from "@workspace/ui/lib/remove-accents";

export const dynamic = "force-dynamic";

interface EnrolledStudentContext {
  params: Promise<{
    enrolledStudentId: string;
  }>;
}

/**
 * GET /api/students/enrolled/:enrolledStudentId
 * Obtenir les détails d'un élève inscrit (Admin, Parent).
 */
export async function GET(req: NextRequest, context: EnrolledStudentContext) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { enrolledStudentId } = await context.params;

  if (!enrolledStudentId) {
    return NextResponse.json(
      { message: "Le enrolledStudentId de l'élève est requis." },
      { status: 400 }
    );
  }

  try {
    const enrolledStudent = await prisma.enrolledStudent.findUnique({
      where: {
        id: enrolledStudentId,
      },
      select: {
        id: true,
        name: true,
        class: true,
        gender: true,
        matricule: true,
        createdAt: true,
        updatedAt: true,
        isRegisteredToCanteen: true,
        canteenStudent: true, // Inclure le lien vers CanteenStudent
      },
    });

    if (!enrolledStudent) {
      return NextResponse.json(
        { message: "Aucun élève trouvé avec cet identifiant." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Détails de l'élève",
      enrolledStudent,
    });
  } catch (error: any) {
    console.error("Erreur getEnrolledStudentById:", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de la récupération de l'élève.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/students/enrolled/:enrolledStudentId
 * Modifier les détails d'un élève inscrit (Admin).
 */
export async function PUT(req: NextRequest, context: EnrolledStudentContext) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { enrolledStudentId } = await context.params;
  const { ...rest } = await req.json();

  const allowedFields = ["name", "class", "gender", "matricule"];
  const unknownFields = Object.keys(rest).filter(
    (key) => !allowedFields.includes(key)
  );

  if (unknownFields.length > 0) {
    return NextResponse.json(
      { message: `Champs non autorisés : ${unknownFields.join(", ")}` },
      { status: 400 }
    );
  }

  const dataToUpdate: Record<string, any> = {};

  for (const key of allowedFields) {
    if (rest[key] !== undefined) {
      if (key === "name") {
        dataToUpdate.name = rest[key];
        dataToUpdate.searchableName = removeAccents(rest[key]);
      } else {
        dataToUpdate[key] = rest[key];
      }
    }
  }

  if (Object.keys(dataToUpdate).length === 0) {
    return NextResponse.json(
      { message: "Aucun champ valide fourni pour la mise à jour." },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.enrolledStudent.update({
      where: { id: enrolledStudentId },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        class: true,
        gender: true,
        matricule: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      { message: "EnrolledStudent mis à jour avec succès.", student: updated },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur updateEnrolledStudent:", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de la mise à jour.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
