"use client";

import { Button } from "@workspace/ui/components/button";
import { authClient } from "database/auth-client";
// import { pricing } from "@workspace/ui/lib/pricing";
import Link from "next/link";

interface priceCardProps {
  pricing: {
    type: string;
    price: number;
  };
  isPopular?: boolean;
}

export default function PriceCard({ pricing, isPopular }: priceCardProps) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const isParentConnected = user?.role === "PARENT";
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg p-6 text-center grid ${isPopular ? "bg-secondary text-black border-2 border-primary" : "bg-white"}`}
    >
      {isPopular && (
        <p className="text-sm text-black font-semibold mb-2">
          Le plus populaire !
        </p>
      )}
      <h3
        className={`font-bold text-2xl mb-2 ${isPopular ? "text-black" : ""}`}
      >
        Abonnement {pricing.type === "daily" && "Journalier"}
        {pricing.type === "short" && "Court"}
        {pricing.type === "weekly" && "Hebdomadaire"}
        {pricing.type === "monthly" && "Mensuel"}
      </h3>
      <p className={`mb-4  ${isPopular ? "text-black" : "text-gray-600"}`}>
        {pricing.type === "daily" && "Pour un repas ponctuel"}
        {pricing.type === "short" && "Quelques jours de repas"}
        {pricing.type === "weekly" && "Pour une semaine complète"}
        {pricing.type === "monthly" && "Un mois entier de repas"}
      </p>
      <div className="font-bold mb-4">
        <div>
          <p
            className={`lg:text-4xl text-5xl font-bold ${isPopular ? "text-white" : "text-secondary"}`}
          >
            {pricing.price.toLocaleString("fr-CD", {
              style: "currency",
              currency: "CDF",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <div>
          <span
            className={`text-xl ${isPopular ? "text-white" : "text-gray-500"}`}
          >
            /{pricing.type === "daily" ? " jour" : " jours"}
          </span>
        </div>
      </div>
      <ul
        className={`space-y-2 mb-6 text-left pl-4 ${isPopular ? "text-black" : "text-gray-700"}`}
      >
        {pricing.type === "daily" && (
          <>
            <li>✅ 1 jour de repas à la cantine</li>
            <li>✅ Vérification par QR Code</li>
            <li>✅ Idéal pour les besoins occasionnels</li>
          </>
        )}
        {pricing.type === "short" && (
          <>
            <li>✅ 3 jours consécutifs de repas</li>
            <li>✅ Vérification par QR Code</li>
            <li>✅ Flexibilité pour une courte période</li>
          </>
        )}
        {pricing.type === "weekly" && (
          <>
            <li>✅ 7 jours consécutifs de repas</li>
            <li>✅ Suivi facile pour les parents</li>
            <li>✅ Idéal pour une planification hebdomadaire</li>
          </>
        )}
        {pricing.type === "monthly" && (
          <>
            <li>✅ 30 jours consécutifs de repas</li>
            <li>✅ Économies importantes</li>
            <li>✅ Tranquillité d'esprit pour le mois</li>
          </>
        )}
      </ul>
      <Link
        href={`${isParentConnected ? "/parent" : "/auth/login"}`}
        passHref
        // style={{ position: "sticky", bottom: 0 }}
      >
        <Button className="w-full">Acheter</Button>
      </Link>
    </div>
  );
}
