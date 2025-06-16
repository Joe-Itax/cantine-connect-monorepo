import { betterAuth } from "better-auth";
import { createAuthMiddleware, APIError } from "better-auth/api";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../client";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "PARENT",
      },
      searchableName: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      isActive: {
        type: "boolean",
        required: true,
        defaultValue: true,
      },
      slug: {
        type: "string",
        required: true,
        defaultValue: "",
      },
    },
    changeEmail: {
      enabled: true,
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      // Vérifier si c'est la requête de connexion par email/mot de passe

      if (ctx.path !== "/sign-in/email") {
        return; // Ne rien faire pour les autres endpoints
      }

      const email = ctx.body?.email;

      if (!email || typeof email !== "string") {
        throw new APIError("BAD_REQUEST", {
          message: "Email manquant dans la requête.",
        });
      }

      const user = await prisma.user.findUnique({
        where: { email },
        select: { isActive: true },
      });
      if (user && !user.isActive) {
        throw new APIError("UNAUTHORIZED", {
          code: "ACCOUNT_DEACTIVATED",
          message:
            "Votre compte est désactivé. Veuillez contacter l'administrateur.",
        });
      }

      if (ctx.path === "/sign-in/email") {
        if (ctx.request?.headers.get("x-app-origin") === "admin") {
          const email = ctx.body?.email;
          const user = await prisma.user.findUnique({
            where: { email },
            select: { role: true },
          });

          if (!user || user.role !== "ADMIN") {
            throw new APIError("UNAUTHORIZED", {
              message: "Email ou mot de passe incorrect",
              code: "INVALID_EMAIL_OR_PASSWORD",
            });
          }
        }

        if (ctx.request?.headers.get("x-app-origin") === "client") {
          const email = ctx.body?.email;
          const user = await prisma.user.findUnique({
            where: { email },
            select: { role: true },
          });

          // console.log("User: ", user);

          if (!user || (user.role !== "AGENT" && user.role !== "PARENT")) {
            // console.log("It's not PARENT or AGENT: ", user);
            throw new APIError("UNAUTHORIZED", {
              message: "Email ou mot de passe incorrect",
              code: "INVALID_EMAIL_OR_PASSWORD",
            });
          }
          // console.log("It's PARENT or AGENT: ", user);
        }
      }

      return;
    }),
  },
});
