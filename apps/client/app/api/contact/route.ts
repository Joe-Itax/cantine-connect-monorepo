import { NextResponse, NextRequest } from "next/server";
import { prisma } from "database";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validatedData = contactSchema.parse(body);

  const { name, email, message } = validatedData;
  try {
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });
    return NextResponse.json(
      {
        message: "Message envoyé avec succès! Nous vous répondrons bientôt.",
        data: contactMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Une erreur inconnue est survenue.";
    return NextResponse.json(
      {
        message: "Erreur lors de l'envoi du message de contact",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
