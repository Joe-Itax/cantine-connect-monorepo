"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import {
  CreditCard,
  QrCode,
  Bell,
  Info,
  CalendarDays,
  UtensilsCrossed,
} from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";

export default function ParentHomePage() {
  const { selectedChild } = useChildSelection();

  if (!selectedChild) {
    return null;
  }

  const { abonnements: abo } = selectedChild;
  const abonnements = abo && abo.length > 0 ? abo[0] : undefined;

  const subscriptionStatus = abonnements
    ? new Date(abonnements.endDate as string) > new Date()
      ? "Actif"
      : "Expiré"
    : "Aucun abonnement";
  const subscriptionEndDate = abonnements
    ? new Date(abonnements?.endDate).toLocaleDateString("fr-FR")
    : "N/A";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "text-green-600";
      case "Expiré":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Bienvenue, {selectedChild.enrolledStudent.name} !
      </h2>

      {/* Statut de l'abonnement */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" /> Statut de l'abonnement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            <span className={getStatusColor(subscriptionStatus)}>
              {subscriptionStatus}
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {abonnements
              ? `Valide jusqu'au ${subscriptionEndDate}`
              : "Aucun abonnement en cours"}
          </p>
          {subscriptionStatus !== "Actif" && (
            <Link href="/parent/subscription" passHref>
              <Button className="mt-4">Commander un abonnement</Button>
            </Link>
          )}
        </CardContent>
      </Card>

      {/* Raccourcis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/parent/subscription" passHref>
          <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Gérer l'abonnement
              </CardTitle>
              <CreditCard className="h-6 w-6 stroke-purple-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Voir les détails ou renouveler l'abonnement.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/parent/qrcode" passHref>
          <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Afficher le QR Code
              </CardTitle>
              <QrCode className="h-6 w-6 stroke-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Accédez au QR Code de votre enfant pour la cantine.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/parent/notifications" passHref>
          <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Voir les notifications
              </CardTitle>
              <Bell className="h-6 w-6 stroke-orange-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Consultez les alertes importantes et l'activité.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/parent/history" passHref>
          <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Historique des repas
              </CardTitle>
              <UtensilsCrossed className="h-6 w-6 stroke-indigo-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Suivez les repas pris par votre enfant.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
