"use client";

import React from "react";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { User, Loader2 } from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";
import HeaderNav from "./components/header-nav/header-nav";

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-16 sm:pb-8">
      <HeaderNav />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Afficher un message si aucun enfant n'est sélectionné et n'est pas en chargement */}
        {!isLoadingChildren &&
          !selectedChild &&
          canteenStudents &&
          canteenStudents.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
              <User className="h-20 w-20 mb-4 text-gray-400" />
              <h2 className="text-2xl font-semibold mb-2">Bienvenue !</h2>
              <p className="text-lg text-center">
                Il semble qu'aucun de vos enfants ne soit actuellement inscrit à
                la cantine.
              </p>
              <p className="text-md text-center mt-2">
                Pour commencer, assurez-vous que votre enfant est inscrit par
                l'administration.
              </p>
            </div>
          )}
        {/* Afficher les enfants seulement si un enfant est sélectionné ou en cours de chargement */}
        {isLoadingChildren && (
          <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
            <Loader2 className="h-16 w-16 animate-spin text-blue-500 mb-4" />
            <p className="text-lg">Chargement de vos enfants...</p>
          </div>
        )}
        {selectedChild && !isLoadingChildren && children}
      </main>
    </div>
  );
}
