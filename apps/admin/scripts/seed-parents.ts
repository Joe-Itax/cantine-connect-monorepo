import { auth } from "database";
import { prisma } from "database";
import { faker } from "@faker-js/faker";
import { generateUniqueSlug } from "@/utils/generate-unique-slug";
import { removeAccents } from "@/utils/remove-accents";

async function createParents(count = 50) {
  const password = process.env.DEFAULT_PASSWORD_USER || "Cc@1234";
  const role = "PARENT";

  // for (let i = 0; i < count; i++) {
  //   const name = faker.person.fullName();
  //   const email = faker.internet.email({
  //     firstName: name.split(" ")[0],
  //     lastName: name.split(" ")[1],
  //   });
  //   const slug = await generateUniqueSlug(name, "user");
  //   const searchableName = removeAccents(name);

  //   try {
  //     await auth.api.signUpEmail({
  //       body: {
  //         name,
  //         email,
  //         password,
  //         role,
  //         slug,
  //         searchableName,
  //       },
  //     });
  //     console.log(`✅ Created parent: ${name} (${email})`);
  //   } catch (err) {
  //     console.error(`❌ Failed to create ${email}`, err);
  //   }
  // }

  const usersParent = await prisma.user.findMany({ where: { role: "PARENT" } });
  console.log(`✅ Found ${usersParent.length} parents`);

  for (const parent of usersParent) {
    await prisma.parent.create({
      data: {
        id: parent.id,
      },
    });
    console.log(parent);
  }
}

createParents();
