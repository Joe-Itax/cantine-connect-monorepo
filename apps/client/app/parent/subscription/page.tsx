"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import { Label } from "@workspace/ui/components/label";
import { toast } from "sonner";
import { Calendar } from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";
import { useBuySubscriptionMutation } from "@/hooks/use-students";
import { pricing } from "@workspace/ui/lib/pricing";
import { Spinner } from "@workspace/ui/components/spinner";

export default function ParentSubscriptionPage() {
  const { selectedChild } = useChildSelection();
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const buySubscriptionMutation = useBuySubscriptionMutation();

  const subscriptionOptions = useMemo(() => {
    return Object.entries(pricing)
      .map(([durationStr, { price }]) => {
        const duration = parseInt(durationStr);
        let label = `${duration} Jours`;
        if (duration === 1) label = "1 Jour (Quotidien)";
        if (duration === 3) label = "3 Jours (Court)";
        if (duration === 7) label = "1 Semaine";
        if (duration === 30) label = "1 Mois";

        return { duration, label, price };
      })
      .sort((a, b) => a.duration - b.duration);
  }, []);

  if (!selectedChild) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
        <Spinner className="h-16 w-16 animate-spin text-blue-500 mb-4" />
        <p className="text-lg">Chargement de l'enfant sélectionné...</p>
      </div>
    );
  }

  const currentSubscription = selectedChild.abonnements?.[0];
  const isSubscriptionActive = currentSubscription
    ? new Date(currentSubscription.endDate) > new Date()
    : false;

  const subscriptionEndDate =
    currentSubscription && currentSubscription.endDate
      ? new Date(currentSubscription.endDate).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "N/A";

  const handleBuySubscription = async () => {
    if (!selectedChild || selectedDuration === null) {
      toast.error("Veuillez sélectionner une durée d'abonnement.");
      return;
    }

    try {
      await buySubscriptionMutation.mutateAsync({
        canteenStudentId: selectedChild.id,
        payload: { duration: selectedDuration },
      });
      toast.success("Abonnement acheté avec succès !");
      setSelectedDuration(null);
    } catch (error: any) {
      console.error("Erreur lors de l'achat de l'abonnement:", error);

      toast.error(error.message || "Erreur lors de l'achat de l'abonnement.");
    }
  };

  const selectedOption =
    selectedDuration !== null
      ? subscriptionOptions.find((opt) => opt.duration === selectedDuration)
      : null;
  const selectedPrice = selectedOption ? selectedOption.price : null;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Abonnement de {selectedChild.enrolledStudent.name}
      </h2>

      {/* Statut de l'abonnement actuel */}
      <Card>
        <CardHeader>
          <CardTitle>Statut Actuel de l'Abonnement</CardTitle>
          <CardDescription>
            Informations sur l'abonnement de cantine de{" "}
            {selectedChild.enrolledStudent.name}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubscriptionActive ? (
            <div className="space-y-2">
              <p className="text-lg font-semibold flex items-center gap-2 text-green-600">
                <Calendar className="h-5 w-5" /> Abonnement Actif
              </p>
              <p className="text-sm text-gray-700">
                Valide jusqu'au :{" "}
                <span className="font-medium">{subscriptionEndDate}</span>
              </p>
              <p className="text-sm text-gray-700">
                Durée de l'abonnement :{" "}
                <span className="font-medium">
                  {currentSubscription?.duration}{" "}
                  {Number(currentSubscription?.duration) === 1
                    ? "jour"
                    : "jours"}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Coût initial :{" "}
                <span className="font-medium">
                  {pricing[
                    currentSubscription?.duration as unknown as keyof typeof pricing
                  ]?.price ||
                    currentSubscription?.price ||
                    "N/A"}{" "}
                  Fc
                </span>
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-lg font-semibold flex items-center gap-2 text-red-600">
                <Calendar className="h-5 w-5" /> Aucun abonnement actif ou
                abonnement expiré
              </p>
              {currentSubscription && (
                <p className="text-sm text-gray-700">
                  Dernier abonnement expiré le :{" "}
                  <span className="font-medium">{subscriptionEndDate}</span>
                </p>
              )}
              <p className="text-sm text-gray-500">
                Veuillez sélectionner une option ci-dessous pour renouveler ou
                souscrire.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section Achat d'abonnement */}
      <Card>
        <CardHeader>
          <CardTitle>Acheter ou Renouveler un Abonnement</CardTitle>
          <CardDescription>
            Choisissez une durée pour l'abonnement de cantine de votre enfant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            onValueChange={(value) => setSelectedDuration(parseInt(value))}
            value={selectedDuration ? String(selectedDuration) : ""}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {subscriptionOptions.map((option) => (
              <div
                key={option.duration}
                className="flex items-center space-x-3 rounded-md border p-4 hover:bg-gray-50 cursor-pointer"
              >
                <RadioGroupItem
                  value={String(option.duration)}
                  id={`duration-${option.duration}`}
                  className="peer"
                />
                <Label
                  htmlFor={`duration-${option.duration}`}
                  className="flex flex-col flex-1 cursor-pointer"
                >
                  <span className="font-medium text-lg">{option.label}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    {option.price} <span className="text-primary">Fc</span>
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="mt-6 flex flex-wrap gap-3 items-center justify-center sm:justify-between border-t pt-4">
            <div>
              <span className="text-lg font-semibold flex items-center gap-1">
                Coût total :{" "}
                {selectedPrice !== null ? (
                  <>
                    {selectedPrice} <span>Fc</span>
                  </>
                ) : (
                  "Sélectionnez une option"
                )}
              </span>
            </div>
            <div>
              <Button
                onClick={handleBuySubscription}
                disabled={
                  selectedDuration === null || buySubscriptionMutation.isPending
                }
              >
                {buySubscriptionMutation.isPending ? <Spinner /> : null}
                Payer maintenant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
