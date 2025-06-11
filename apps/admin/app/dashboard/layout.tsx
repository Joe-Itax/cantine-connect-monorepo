"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { DashboardSkeleton } from "./skeleton";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPending, user } = useAuthRedirect({ ifUnauthenticated: "/login" });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isPending) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isPending]);

  // Afficher le skeleton tant que isPending est true OU que showContent est false
  if (isPending || !showContent) {
    return <DashboardSkeleton />;
  }

  // Si l'utilisateur n'est pas connecté, rediriger vers le login
  if (!user) {
    return <DashboardSkeleton />;
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
