import { auth, prisma } from "database";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function requireRole(requiredRoles: string | string[]) {
  if (!Array.isArray(requiredRoles)) {
    requiredRoles = [requiredRoles];
  }
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || !session?.user) {
    return NextResponse.json(
      { message: "Veuillez vous authentifié puis réessayer." },
      {
        status: 401,
      }
    );
  }

  if (!requiredRoles.includes(session.user.role)) {
    return NextResponse.json(
      { message: "Vous n'êtes pas autorisé à éffectué cette action." },
      {
        status: 403,
      }
    );
  }
}
