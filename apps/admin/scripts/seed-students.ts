import { prisma } from "database";
import { faker } from "@faker-js/faker";
import { generateUniqueSlug } from "@/utils/generate-unique-slug";
import { removeAccents } from "@/utils/remove-accents";

const classes = [
  "1A",
  "1B",
  "2A",
  "2B",
  "3A",
  "3B",
  "4A",
  "4B",
  "5A",
  "5B",
  "6A",
  "6B",
];
const genders = ["M", "F"];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]!;
}

async function createStudents(count = 300) {
  for (let i = 1; i <= count; i++) {
    const gender = getRandomItem(genders);
    const name = faker.person.fullName({
      sex: gender === "M" ? "male" : "female",
    });
    const studentClass = getRandomItem(classes);
    const matricule = `2025-${String(i).padStart(3, "0")}`;
    const slug = await generateUniqueSlug(name, "enrolledStudent");
    const searchableName = removeAccents(name);

    try {
      await prisma.enrolledStudent.create({
        data: {
          name,
          gender,
          class: studentClass,
          matricule,
          slug,
          searchableName,
        },
      });
      console.log(
        `✅ Created student ${name} - ${searchableName} - ${gender} - (${matricule}) - ${slug}`
      );
      // await prisma.enrolledStudent.deleteMany();
      // console.log(`✅ Deleted all students`);
    } catch (err) {
      console.error(`❌ Failed to create student ${i}`, err);
    }
  }
  // -----------------------------

  // const enrolledStudents = await prisma.enrolledStudent.deleteMany();

  // console.log(` enrolledStudents nomber: ${enrolledStudents.count}`);

  // for (const student of enrolledStudents) {
  //   await prisma.enrolledStudent.update({
  //     where: { matricule: student.matricule },
  //     data: {
  //       searchableName: student.name,
  //     },
  //   });
  //   console.log(`${student.name} - ${student.matricule}`);
  // }
}

createStudents();
