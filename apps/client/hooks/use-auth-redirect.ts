"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "database/auth-client";

type RedirectParams = {
  ifAuthenticatedParent?: string;
  ifAuthenticatedAgent?: string;
  ifUnauthenticated?: string;
};

export function useAuthRedirect(params: RedirectParams): {
  user: any;
  isPending: boolean;
  error: any;
} {
  const { ifAuthenticatedParent, ifAuthenticatedAgent, ifUnauthenticated } =
    params;
  const router = useRouter();
  const { data: session, isPending, error } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (isPending) return;

    try {
      if (
        !ifAuthenticatedParent &&
        !ifAuthenticatedAgent &&
        !ifUnauthenticated
      ) {
        console.warn(
          "useAuthRedirect devrait être utilisé avec au moins un paramètre"
        );
      }

      if (user && user.role === "PARENT" && ifAuthenticatedParent) {
        router.replace(ifAuthenticatedParent);
      }

      if (
        user &&
        (user.role === "AGENT" || user.role === "ADMIN") &&
        ifAuthenticatedAgent
      ) {
        router.replace(ifAuthenticatedAgent);
      }

      if (!user && ifUnauthenticated) {
        router.replace(ifUnauthenticated);
      }
    } catch (error) {
      console.error("Redirect error:", error);
    }
  }, [
    user,
    isPending,
    error,
    router,
    ifAuthenticatedParent,
    ifAuthenticatedAgent,
    ifUnauthenticated,
  ]);

  return { user, isPending, error };
}
