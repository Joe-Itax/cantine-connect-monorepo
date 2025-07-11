"use client";

import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import AgentHeader from "./_components/agent-header";

export default function AgentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthRedirect({
    ifAuthenticatedAgent: "/agent",
    ifAuthenticatedParent: "/parent",
    ifUnauthenticated: "/auth/login",
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header spécifique à l'agent */}
      <AgentHeader />

      {/* Contenu principal */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
