import { prisma } from "database";
import { auth } from "database";
import { faker } from "@faker-js/faker";
import { generateUniqueSlug } from "@/utils/generate-unique-slug";
import { removeAccents } from "@/utils/remove-accents";

async function createParents(count = 3) {
  const password = process.env.DEFAULT_PASSWORD_USER || "Cc@12345";
  const role = "ADMIN";

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
    });
    const slug = await generateUniqueSlug(name, "user");
    const searchableName = removeAccents(name);

    try {
      const userRes = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
          role,
          slug,
          searchableName,
        },
      });
      console.log(
        `✅ Created admin: ${userRes.user.name} (${userRes.user.email}) - ${(userRes.user as any).password} - ${password} - (${(userRes.user as any).role})`
      );
    } catch (err) {
      console.error(`❌ Failed to create ${email}`, err);
    }
  }

  const admin = await auth.api.signUpEmail({
    body: {
      name: "Joe Itax",
      email: "itax@gmail.com",
      password,
      role,
      slug: await generateUniqueSlug("Joe Itax", "user"),
      searchableName: removeAccents("Joe Itax"),
    },
  });
  console.log(
    `✅ Created ADMIN: ${admin.user.name} (${admin.user.email}) - (${(admin.user as any).role} - ${(admin.user as any).password})`
  );

  const usersAdmin = await prisma.user.findMany({ where: { role: "ADMIN" } });
  console.log(`✅ Found ${usersAdmin.length} admins`);
  // -----------------------
  //   for (const user of usersAdmin) {
  // const userToUpdateUserPassword = await prisma.user.update({
  //   where: { id: user.id },
  //   data: { password: "CC@12345" },
  // });
  // const userToUpdateAccountPassword = await prisma.account.update({
  //   where: { id: user.id },
  //   data: { password: "CC@12345" },
  // });
  // console.log(`userToUpdateUserPassword: ${userToUpdateUserPassword}`);
  // console.log(`userToUpdateAccountPassword: ${userToUpdateAccountPassword}`);
  //   }

  //   const useerwToDeele = await prisma.user.deleteMany({
  //     where: { role: "ADMIN" },
  //   });
  //   console.log(useerwToDeele);
  //   console.log(`✅ Deleted ${useerwToDeele} admins`);
}

createParents();
