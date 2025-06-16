"use client";

import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import DataStatusDisplay from "@workspace/ui/components/data-status-display";
// import { authClient } from "database/auth-client";
import { useEffect, useState } from "react";

export default function Agent() {
  // const { signOut } = authClient;

  // useEffect( async() => {
  //   await signOut()
  // });
  const [showContent, setShowContent] = useState(false);
  const { isPending, error } = useAuthRedirect({
    ifAuthenticatedParent: "/parent",
    ifUnauthenticated: "/auth/login",
  });
  useEffect(() => {
    if (!isPending) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isPending]);

  if (isPending || error || !showContent) {
    return (
      <DataStatusDisplay
        showContent={showContent}
        isPending={isPending}
        hasError={error}
      />
    );
  }
  return (
    <main>
      <h1>Agent Page</h1>
    </main>
  );
}
