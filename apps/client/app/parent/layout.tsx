"use client";

import { useAuthRedirect } from "@/hooks/use-auth-redirect";
// import type { Metadata } from "next";
import NavDesktop from "./components/nav/nav-desktop";
import NavMobile from "./components/nav/nav-mobile";

// export const metadata: Metadata = {
//   title: {
//     default: "Cantine Connect",
//     template: "%s | Cantine Connect",
//   },
//   description: "Solution de gestion intelligence pour les cantines scolaires",
// };

interface parentLayoutProps {
  children: React.ReactNode;
}

export default function ParentLayout({ children }: parentLayoutProps) {
  useAuthRedirect({
    ifAuthenticatedAgent: "/agent",
    ifAuthenticatedParent: "/parent",
    ifUnauthenticated: "/auth/login",
  });
  return (
    <>
      <NavDesktop className="hidden md:flex" />
      <NavMobile className="md:hidden" />
      {children}
    </>
  );
}
