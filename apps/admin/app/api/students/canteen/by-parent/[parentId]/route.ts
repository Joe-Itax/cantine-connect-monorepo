import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";

export const dynamic = "force-dynamic";

interface ParentStudentsContext {
  params: Promise<{
    parentId: string;
  }>;
}

/**
 * GET /api/students/canteen/by-parent/:parentId
 * Lire les élèves enregistrés à la Cantine par l'ID de leur parent (Admin, Parent).
 */
export async function GET(req: NextRequest, context: ParentStudentsContext) {
  const roleCheckResult = await requireRole(["ADMIN", "PARENT"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { parentId } = await context.params;

  // Vérification stricte des entrées
  if (!parentId) {
    return NextResponse.json(
      {
        message: "L'ID du parent est requis.",
      },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Vérifier si le parent existe
      const parent = await tx.parent.findUnique({
        where: { id: parentId },
        include: {
          user: true,
        },
      });

      if (!parent) {
        throw {
          status: 404,
          message: "Aucun parent trouvé avec cet identifiant.",
        };
      }

      // Récupérer les élèves liés au parent
      const canteenStudents = await tx.canteenStudent.findMany({
        where: { parentId, isActive: true },
        include: {
          enrolledStudent: true,
          abonnements: true,
        },
      });

      // Suppression des informations sensibles avant de renvoyer la réponse
      // Note: Dans Next.js API Routes, le concept de "res.json" ne supprime pas explicitement
      // les champs. On doit les exclure explicitement si on ne veut pas les envoyer.
      // Pour `parent.user.password`, assure-toi que le champ n'est pas sélectionné du tout
      // ou gère-le au niveau du modèle Prisma. Pour `searchableName`, on peut le mapper.

      const cleanedCanteenStudents = canteenStudents.map((student) => {
        const { searchableName, ...enrolledStudentWithoutSearchableName } =
          student.enrolledStudent;
        return {
          ...student,
          enrolledStudent: enrolledStudentWithoutSearchableName,
        };
      });

      return cleanedCanteenStudents;
    });

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "Aucun élève trouvé pour ce parent.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Liste des élèves rattachés au parent",
        nombre: result.length,
        data: result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des élèves d'un parent :",
      error
    );
    const status = error.status || 500;
    return NextResponse.json(
      {
        message:
          error.message ||
          "Une erreur est survenue lors de la récupération des élèves d'un parent.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status }
    );
  }
}
