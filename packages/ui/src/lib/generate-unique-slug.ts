import { Prisma, prisma } from "database";

export function slugify(text: string): string {
  if (!text) return "";

  return text
    .toString() // Ensure it's a string
    .normalize("NFD") // Normalize characters for consistent accent removal
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

/**
 * Génère un slug unique pour une entité donnée en vérifiant sa non-existence dans la base de données.
 *
 * @param {string} name Le nom de base à partir duquel générer le slug.
 * @param {'user' | 'canteenStudent'} modelType Le type de modèle Prisma à interroger.
 * @returns {Promise<string>} Le slug unique généré.
 */
export async function generateUniqueSlug(
  name: string,
  modelType: "user" | "canteenStudent" | "enrolledStudent"
): Promise<string> {
  const baseSlug = slugify(name);
  let uniqueSlug = baseSlug;
  let counter = 0;

  type Delegate =
    | Prisma.UserDelegate
    | Prisma.CanteenStudentDelegate
    | Prisma.EnrolledStudentDelegate;

  let model: Delegate;

  switch (modelType) {
    case "user":
      model = prisma.user;
      break;
    case "canteenStudent":
      model = prisma.canteenStudent;
      break;
    case "enrolledStudent":
      model = prisma.enrolledStudent;
      break;
    default:
      throw new Error(`Unsupported modelType: ${modelType}`);
  }

  while (true) {
    const existingEntry = await (
      model as unknown as {
        findUnique: (args: {
          where: { slug: string };
          select: { id: boolean };
        }) => Promise<{ id: string } | null>;
      }
    ).findUnique({
      where: {
        slug: uniqueSlug,
      },
      select: {
        id: true,
      },
    });

    if (!existingEntry) {
      break;
    }

    counter++;
    uniqueSlug = `${baseSlug}-${counter}`;
  }

  return uniqueSlug;
}
