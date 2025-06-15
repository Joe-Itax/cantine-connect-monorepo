import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import { hashValue } from "@workspace/ui/lib/hash";
import { paginationQuery } from "@workspace/ui/lib/pagination";
import { generateUniqueSlug } from "@workspace/ui/lib/generate-unique-slug";

/**
 * GET /api/students/canteen
 * Lister tous les élèves enregistrés à la cantine (Admin seulement).
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

    const result = await paginationQuery(prisma.canteenStudent, page, limit, {
      // where: { isActive: true }, // Commenté comme dans ton code Express.js
      select: {
        id: true,
        isActive: true,
        enrolledStudent: {
          select: {
            id: true,
            name: true,
            class: true,
            gender: true,
            matricule: true,
            createdAt: true,
            updatedAt: true,
            isRegisteredToCanteen: true,
          },
        },
        parent: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
        },
        abonnements: true,
      },
    });

    if (result.error) {
      return NextResponse.json(
        { message: result.error, ...result },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Liste des élèves enregistré à la Cantine",
      ...result,
    });
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des élèves enregistré à la Cantine :",
      error
    );
    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de la récupération des élèves enregistré à la Cantine.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/students/canteen
 * Enregistrer un élève à la cantine (Admin seulement).
 */
export async function POST(req: NextRequest) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { enrolledStudentIds, parentId, ...extraFields } = await req.json();

  // Validation
  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      { message: "Seuls 'enrolledStudentIds' et 'parentId' sont autorisés." },
      { status: 400 }
    );
  }

  if (!Array.isArray(enrolledStudentIds)) {
    return NextResponse.json(
      { message: "'enrolledStudentIds' doit être un tableau." },
      { status: 400 }
    );
  }

  if (!parentId || typeof parentId !== "string") {
    return NextResponse.json(
      { message: "'parentId' doit être une chaîne de caractères valide." },
      { status: 400 }
    );
  }

  try {
    // Vérification initiale du parent
    const parentExists = await prisma.parent.findUnique({
      where: { id: parentId },
      select: { id: true },
    });

    if (!parentExists) {
      return NextResponse.json(
        { message: "Parent non trouvé." },
        { status: 404 }
      );
    }

    const results = await prisma.$transaction(async (tx) => {
      const addedStudents = [];
      const errors = [];

      for (const studentId of enrolledStudentIds) {
        try {
          // Validation de l'ID
          if (typeof studentId !== "string" || !studentId.trim()) {
            errors.push(`ID invalide: ${studentId}`);
            continue;
          }

          const enrolledStudent = await tx.enrolledStudent.findUnique({
            where: { id: studentId },
          });

          if (!enrolledStudent) {
            errors.push(`Élève ${studentId} non trouvé`);
            continue;
          }

          // Vérification existence active
          const existingActive = await tx.canteenStudent.findFirst({
            where: {
              enrolledStudentId: studentId,
              isActive: true,
            },
          });

          if (existingActive) {
            errors.push(`${enrolledStudent.name} est déjà inscrit`);
            continue;
          }

          const matriculeHashe = await hashValue(enrolledStudent.matricule);

          // Création ou réactivation
          await tx.canteenStudent.upsert({
            where: { enrolledStudentId: studentId },
            update: {
              isActive: true,
              parentId,
              matriculeHashe,
              abonnements: {
                create: {
                  duration: 0,
                  price: 0,
                  status: "EXPIRE",
                },
              },
            },
            create: {
              slug: await generateUniqueSlug(
                enrolledStudent.name,
                "canteenStudent"
              ),
              enrolledStudentId: studentId,
              parentId,
              matriculeHashe,
              abonnements: {
                create: {
                  duration: 0,
                  price: 0,
                  status: "EXPIRE",
                },
              },
            },
          });

          await tx.enrolledStudent.update({
            where: { id: studentId },
            data: { isRegisteredToCanteen: true },
          });

          addedStudents.push({
            id: studentId,
            name: enrolledStudent.name,
            matricule: enrolledStudent.matricule,
          });
        } catch (error: any) {
          errors.push(`Erreur avec l'élève ${studentId}: ${error.message}`);
        }
      }

      return { addedStudents, errors };
    });

    if (results.addedStudents.length === 0) {
      return NextResponse.json(
        {
          message: "Aucun élève ajouté",
          errors: results.errors,
        },
        { status: 400 }
      );
    }

    const successCount = results.addedStudents.length;
    const studentNames = results.addedStudents.map(
      (s) => `${s.name} (${s.matricule})`
    );

    return NextResponse.json(
      {
        message: `${successCount} élève(s) ajouté(s) à la cantine`,
        addedStudents: results.addedStudents,
        errors: results.errors.length > 0 ? results.errors : undefined,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur lors de l'ajout des élèves:", error);
    return NextResponse.json(
      {
        message: "Erreur serveur",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/students/canteen
 * Supprimer un élève de la cantine (soft delete) (Admin seulement).
 */
export async function DELETE(req: NextRequest) {
  const roleCheckResult = await requireRole("ADMIN");
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { canteenStudentIds, ...extraFields } = await req.json();

  // Validation approfondie
  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      {
        message: "Seul 'canteenStudentIds' est autorisé.",
        receivedFields: Object.keys(await req.json()), // A corriger pour ne pas relire req.json()
      },
      { status: 400 }
    );
  }

  if (!Array.isArray(canteenStudentIds)) {
    return NextResponse.json(
      {
        message: "'canteenStudentIds' doit être un tableau.",
        typeReceived: typeof canteenStudentIds,
      },
      { status: 400 }
    );
  }

  if (canteenStudentIds.length === 0) {
    return NextResponse.json(
      {
        message: "Aucun identifiant fourni.",
        expected: "Tableau non vide d'IDs d'élèves cantine",
      },
      { status: 400 }
    );
  }

  // Validation des IDs
  const invalidIds = canteenStudentIds.filter(
    (id: any) => typeof id !== "string" || !id.trim()
  );
  if (invalidIds.length > 0) {
    return NextResponse.json(
      {
        message: "Certains IDs sont invalides",
        invalidIds,
        exampleValidId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
      { status: 400 }
    );
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const operations = [];
      const notFoundIds = [];
      const alreadyInactiveIds = [];

      // Première passe: vérification
      for (const id of canteenStudentIds) {
        const student = await tx.canteenStudent.findUnique({
          where: { id },
          select: { isActive: true, enrolledStudentId: true },
        });

        if (!student) {
          notFoundIds.push(id);
          continue;
        }

        if (!student.isActive) {
          alreadyInactiveIds.push(id);
          continue;
        }

        operations.push({
          updateStudent: tx.enrolledStudent.update({
            where: { id: student.enrolledStudentId },
            data: { isRegisteredToCanteen: false },
          }),
          deactivateCanteenStudent: tx.canteenStudent.update({
            where: { id },
            data: { isActive: false },
          }),
          id,
        });
      }

      // Exécution des opérations valides
      await Promise.all(
        operations.map((op) =>
          Promise.all([op.updateStudent, op.deactivateCanteenStudent])
        )
      );

      return {
        deactivatedCount: operations.length,
        notFoundIds,
        alreadyInactiveIds,
        deactivatedIds: operations.map((op) => op.id),
      };
    });

    // Construction de la réponse
    const response: {
      message: string;
      details: {
        deactivatedCount: number;
        notFound?: string[];
        alreadyInactive?: string[];
      };
    } = {
      message: `${result.deactivatedCount} élève(s) désinscrit(s) avec succès.`,
      details: {
        deactivatedCount: result.deactivatedCount,
      },
    };

    if (result.notFoundIds.length > 0) {
      response.details.notFound = result.notFoundIds;
    }

    if (result.alreadyInactiveIds.length > 0) {
      response.details.alreadyInactive = result.alreadyInactiveIds;
    }

    if (result.deactivatedCount === 0) {
      return NextResponse.json(
        {
          message: "Aucun élève actif trouvé",
          details: response.details,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("Erreur désinscription multiple:", error);
    return NextResponse.json(
      {
        message: "Erreur lors de la désinscription",
        errorCode: error.code,
        details:
          process.env.NODE_ENV === "development"
            ? {
                message: error.message,
                stack: error.stack,
              }
            : undefined,
      },
      { status: 500 }
    );
  }
}
