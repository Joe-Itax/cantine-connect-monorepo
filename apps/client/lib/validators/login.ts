import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email invalide"),
  // password: z.string(),
  password: z.string()
  .min(1, "Le mot de passe est requis"),
});

export type LoginInput = z.infer<typeof LoginSchema>;
