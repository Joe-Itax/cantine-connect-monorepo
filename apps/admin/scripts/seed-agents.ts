import { auth } from "database";
import { prisma } from "database";
import { faker } from "@faker-js/faker";
import { generateUniqueSlug } from "@workspace/ui/lib/generate-unique-slug";
import { removeAccents } from "@workspace/ui/lib/remove-accents";

async function createParents(count = 20) {
  const password = process.env.DEFAULT_PASSWORD_USER || "Cc@1234";
  const role = "AGENT";

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
    });
    const slug = await generateUniqueSlug(name, "user");
    const searchableName = removeAccents(name);

    try {
      await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
          role,
          slug,
          searchableName,
        },
      });
      console.log(`✅ Created agent: ${name} (${email}) - (${role})`);
    } catch (err) {
      console.error(`❌ Failed to create ${email}`, err);
    }
  }

  const usersAdmin = await prisma.user.findMany({ where: { role: "AGENT" } });
  console.log(`✅ Found ${usersAdmin.length} agents`);
}

createParents();
