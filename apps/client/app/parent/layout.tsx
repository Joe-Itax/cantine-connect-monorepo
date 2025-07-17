"use client";

import React from "react";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { User } from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";
import HeaderNav from "./components/header-nav/header-nav";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";
import { authClient } from "database/auth-client";
import { Spinner } from "@workspace/ui/components/spinner";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthRedirect({
    ifAuthenticatedAgent: "/agent",
    ifUnauthenticated: "/auth/login",
  });

  const {
    selectedChild,
    children: canteenStudents,
    isLoadingChildren,
  } = useChildSelection();

  const router = useRouter();
  const { signOut } = authClient;

  const handleGoHome = () => {
    router.push("/");
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/auth/login");
  };

  const hasNoChildren =
    !isLoadingChildren &&
    ((canteenStudents && canteenStudents.length === 0) || !canteenStudents);

  if (isLoadingChildren) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Spinner className="h-16 w-16 animate-spin text-blue-500 mb-4" />
        <p className="text-lg text-gray-700">Chargement de vos enfants...</p>
      </div>
    );
  }

  if (hasNoChildren) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <User className="h-20 w-20 mb-4 text-gray-400" />
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Bienvenue sur votre espace Parent !
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl">
          Il semble qu'aucun de vos enfants ne soit actuellement rattaché à
          votre compte cantine.
        </p>
        <p className="text-md text-center mt-4 text-gray-600 max-w-2xl">
          Pour associer votre ou vos enfant(s) à votre compte et commencer à
          gérer leurs abonnements, veuillez vous rendre à l'administration de
          l'école. Notre équipe sur place se fera un plaisir de vous aider à
          finaliser cette étape.
        </p>
        <p className="text-sm text-center mt-6 text-gray-500">
          (Cette situation est généralement gérée lors de l'inscription initiale
          de votre enfant à la cantine.)
        </p>

        <div className="flex gap-4 mt-8">
          <Button onClick={handleGoHome} variant="outline">
            Retour à l'accueil
          </Button>
          <Button onClick={handleLogout} variant="destructive">
            Se déconnecter
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-16 sm:pb-8">
      <HeaderNav />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {selectedChild && children}
      </main>
    </div>
  );
}
