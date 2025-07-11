"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, ChevronDown, UserCircle } from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { navItems } from "./nav-items";

export default function HeaderNav() {
  const pathname = usePathname();
  const {
    selectedChild,
    setSelectedChildId,
    children: canteenStudents,
    isLoadingChildren,
  } = useChildSelection();

  return (
    <>
      <header className="bg-white shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Espace Parent</h1>

        <div className="flex items-center gap-4">
          {/* Sélecteur d'enfant */}
          <div className="flex items-center gap-2">
            {isLoadingChildren ? (
              <span className="text-gray-500 flex items-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" /> Chargement des
                enfants...
              </span>
            ) : canteenStudents && canteenStudents.length > 0 ? (
              <>
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Enfant :
                    </span>
                  </div>
                  <div>
                    <Select
                      value={selectedChild?.id || ""}
                      onValueChange={(value) => setSelectedChildId(value)}
                      disabled={canteenStudents.length <= 1} // Désactiver si un seul enfant
                    >
                      <SelectTrigger className="w-[180px] sm:w-[200px]">
                        <SelectValue placeholder="Sélectionner un enfant" />
                        {/* {canteenStudents.length > 1 && (
                          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                        )} */}
                      </SelectTrigger>
                      <SelectContent>
                        {canteenStudents.map((child) => (
                          <SelectItem key={child.id} value={child.id}>
                            {child.enrolledStudent.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            ) : (
              <span className="text-gray-500">
                Aucun enfant inscrit à la cantine.
              </span>
            )}
          </div>

          {/* Bouton de Profil */}
          <Link
            href="/parent/profile"
            className="flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <UserCircle className="h-7 w-7 text-gray-600" />
            <span className="sr-only">Profil Parent</span>
          </Link>
        </div>
      </header>

      {/* Navigation par onglets */}
      <nav className="bg-white border-b border-gray-200 sm:sticky fixed sm:top-0 bottom-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:h-16 h-18 overflow-x-auto w-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isQrCode = item.name === "QR Code";

              return (
                <Tooltip key={`${item.name}-${item.href}`}>
                  <TooltipTrigger asChild>
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex flex-col items-center justify-center gap-1 px-4 py-2 text-sm font-medium sm:border-b-2 border-t-2 sm:border-t-0 transition-colors duration-200 ease-in-out block
                    ${
                      isActive
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    >
                      <div
                        className={`${item.name === "QR Code" ? "mb-2 border size-10 flex justify-center items-center rounded-full" : ""}`}
                      >
                        <item.icon
                          className={`${isQrCode ? "size-5" : "size-5"} ${
                            isActive
                              ? "border-blue-600 text-blue-600 stroke-blue-600"
                              : "border-transparent stroke-gray-500 hover:border-gray-300 hover:stroke-gray-700"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`truncate sm:w-auto w-[50px] text-center hidden ${isQrCode ? "hidden" : "min-[450px]:block"} ${
                            isActive
                              ? "border-blue-600 text-blue-600"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                          }`}
                        >
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
