import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { auth } from "database";
import { requireRole } from "@/lib/middlewares/require-role";
import {
  emailValid,
  passwordValid,
  validRoles,
} from "@workspace/ui/lib/constants";
import { removeAccents } from "@workspace/ui/lib/remove-accents";
import { paginationQuery } from "@workspace/ui/lib/pagination";

import { generateUniqueSlug } from "@workspace/ui/lib/generate-unique-slug";

/**
 * GET /api/users
 * Récupère tous les utilisateurs (Admin seulement).
 */
export async function GET(req: NextRequest) {
  // Vérification du rôle avec ton middleware
  const roleCheck = await requireRole(["ADMIN"]);
  if (roleCheck) {
    return roleCheck;
  }

  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const result = await paginationQuery(prisma.user, page, limit, {
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ message: "Liste des utilisateurs", ...result });
  } catch (error: any) {
    console.error("Erreur récupération utilisateurs:", error);
    return NextResponse.json(
      {
        message: "Erreur serveur.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/users
 * Crée un nouvel utilisateur (Admin seulement).
 */
export async function POST(req: NextRequest) {
  // Vérification du rôle avec ton middleware
  const roleCheckResult = await requireRole(["ADMIN"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const {
    email,
    password = process.env.DEFAULT_PASSWORD_USER,
    role,
    name,
    ...extraFields
  } = await req.json();

  // Validation des champs
  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      { message: "Seuls 'email', 'password', 'role', 'name' sont autorisés." },
      { status: 400 }
    );
  }

  // Validation des valeurs
  if (!email || !role || !name) {
    return NextResponse.json(
      {
        message:
          "Tous les champs obligatoires (email, role & name) doivent être fournis.",
      },
      { status: 400 }
    );
  }

  // Validation des types
  const validationErrors = [];
  if (typeof name !== "string") validationErrors.push("Nom invalide");
  if (typeof email !== "string") validationErrors.push("Email invalide");
  if (typeof password !== "string")
    validationErrors.push("Mot de passe invalide");
  if (typeof role !== "string") validationErrors.push("Rôle invalide");

  if (validationErrors.length > 0) {
    return NextResponse.json(
      { message: "Erreurs de validation", errors: validationErrors },
      { status: 400 }
    );
  }

  if (!validRoles.includes(role)) {
    return NextResponse.json({ message: "Rôle invalide." }, { status: 400 });
  }

  if (!emailValid.test(email)) {
    return NextResponse.json({ message: "Email invalide." }, { status: 400 });
  }

  if (!passwordValid.test(password)) {
    return NextResponse.json(
      {
        message:
          "Mot de passe invalide. 8+ caractères, majuscule, minuscule, chiffre, symbole.",
      },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.$transaction(async (tx) => {
      // Vérification de l'unicité de l'email
      const existingUser = await tx.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        throw new Error("Un utilisateur actif avec cet email existe déjà.");
      }

      // Création de l'utilisateur
      const newUser = await auth.api.signUpEmail({
        body: {
          name: name.trim(),
          email,
          password,
          role,
          slug: await generateUniqueSlug(name.trim(), "user"),
          searchableName: removeAccents(name.trim()),
        },
      });

      // Création du parent si nécessaire
      if ((newUser.user as any)?.role === "PARENT") {
        await tx.parent.create({
          data: {
            id: newUser.user.id,
          },
        });
      }

      return newUser;
    });

    // Préparation de la réponse
    const userResponse = {
      id: user.user.id,
      email: user.user.email,
      role: (user.user as any).role,
      name: user.user.name,
      isActive: (user.user as any).isActive,
      createdAt: user.user.createdAt,
      updatedAt: user.user.updatedAt,
    };

    return NextResponse.json(
      { message: "Utilisateur créé avec succès.", user: userResponse },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur création utilisateur:", error);
    return NextResponse.json(
      {
        message: error.message || "Erreur serveur lors de la création.",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/users
 * Supprime des utilisateurs (Soft Delete) (Admin seulement).
 */
export async function DELETE(req: NextRequest) {
  // Vérification du rôle avec ton middleware
  const roleCheckResult = await requireRole(["ADMIN"]);
  if (roleCheckResult) {
    return roleCheckResult;
  }

  const { userIds, ...extraFields } = await req.json();

  // Validation des données
  if (Object.keys(extraFields).length > 0) {
    return NextResponse.json(
      { message: "Seul 'userIds' est autorisé." },
      { status: 400 }
    );
  }

  if (!Array.isArray(userIds)) {
    return NextResponse.json(
      { message: "Le corps de la requête doit contenir un tableau 'userIds'." },
      { status: 400 }
    );
  }

  if (userIds.length === 0) {
    return NextResponse.json(
      { message: "Aucun identifiant d'utilisateur fourni." },
      { status: 400 }
    );
  }

  // Validation des IDs
  const invalidIds = userIds.filter(
    (id: any) => typeof id !== "string" || !id.trim()
  );
  if (invalidIds.length > 0) {
    return NextResponse.json(
      { message: `IDs invalides: ${invalidIds.join(", ")}` },
      { status: 400 }
    );
  }

  try {
    const deactivatedUsers: any[] = [];
    const deactivatedStudents: string[] = []; // ID des élèves désactivés

    await prisma.$transaction(async (tx) => {
      for (const id of userIds) {
        const user = await tx.user.findFirst({
          where: {
            id,
            isActive: true, // S'assurer que l'utilisateur est actif
          },
          include: {
            parent: {
              include: {
                canteenStudents: {
                  where: { isActive: true }, // Seuls les élèves actifs
                  select: { id: true },
                },
              },
            },
          },
        });

        if (!user) continue; // Si l'utilisateur n'existe pas ou est déjà inactif, passer au suivant

        // 1. Désactiver les élèves de cantine pour les parents
        if (
          user.role === "PARENT" &&
          user.parent?.canteenStudents &&
          user.parent.canteenStudents.length > 0
        ) {
          await tx.canteenStudent.updateMany({
            where: {
              id: {
                in: user.parent.canteenStudents.map((s) => s.id),
              },
            },
            data: { isActive: false },
          });

          deactivatedStudents.push(
            ...user.parent.canteenStudents.map((s) => s.id)
          );
        }

        // 2. Désactiver l'utilisateur (soft delete)
        await tx.user.update({
          where: { id },
          data: { isActive: false },
        });

        deactivatedUsers.push({
          id: user.id,
          name: user.name,
          role: user.role,
        });
      }
    });

    if (deactivatedUsers.length === 0) {
      return NextResponse.json(
        {
          message:
            "Aucun utilisateur actif trouvé avec les identifiants fournis.",
        },
        { status: 404 }
      );
    }

    const userCount = deactivatedUsers.length;
    const studentCount = deactivatedStudents.length;

    const userNames = deactivatedUsers
      .map((u) => `${u.name} (${u.role})`)
      .join(", ");

    let message = `${userCount} utilisateur${
      userCount > 1 ? "s" : ""
    } désactivé${userCount > 1 ? "s" : ""}: ${userNames}`;

    if (studentCount > 0) {
      message += ` et ${studentCount} élève${
        studentCount > 1 ? "s" : ""
      } de cantine désactivé${studentCount > 1 ? "s" : ""}`;
    }

    console.log("Soft delete effectué:", message);

    return NextResponse.json(
      {
        message,
        deactivatedUsers,
        deactivatedStudents: studentCount > 0 ? deactivatedStudents : undefined,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur lors de la désactivation des utilisateurs:", error);
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
