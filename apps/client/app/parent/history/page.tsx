"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import { useChildSelection } from "@/context/child-selection-context";
import { useMealHistoryQuery } from "@/hooks/use-students";
import { Loader2, Utensils, XCircle } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function ParentHistoryPage() {
  const { selectedChild } = useChildSelection();

  const {
    data: mealHistory,
    isPending,
    isError,
    error,
    refetch,
  } = useMealHistoryQuery(selectedChild?.id || "");

  console.log("data mealHistory: ", mealHistory);

  if (!selectedChild) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
        <Loader2 className="h-16 w-16 animate-spin text-blue-500 mb-4" />
        <p className="text-lg">Chargement de l'enfant sélectionné...</p>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <p className="mt-4 text-lg text-gray-600">
          Chargement de l'historique des repas...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-red-600">
        <XCircle className="h-12 w-12 mb-4" />
        <p className="text-lg">
          Erreur lors du chargement de l'historique: {error?.message}
        </p>
        <Button onClick={() => refetch()} className="mt-4">
          Réessayer
        </Button>
      </div>
    );
  }

  const sortedMealHistory = [...(mealHistory || [])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  console.log("sortedMealHistory 68: ", sortedMealHistory);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Historique des repas de {selectedChild.enrolledStudent.name}
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>Repas enregistrés</CardTitle>
          <CardDescription>
            Liste des repas pris par {selectedChild.enrolledStudent.name} à la
            cantine.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sortedMealHistory.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Aucun repas enregistré pour {selectedChild.enrolledStudent.name}{" "}
              pour le moment.
            </p>
          ) : (
            <ul className="space-y-3">
              {sortedMealHistory.map((meal) => (
                <li
                  key={meal.id}
                  className="flex items-center justify-between p-3 rounded-md border bg-white shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Utensils className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-800">Repas pris</p>
                      <p className="text-sm text-gray-500">
                        {new Date(meal.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        à{" "}
                        {new Date(meal.date).toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
