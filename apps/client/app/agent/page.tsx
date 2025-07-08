// "use client";

// import { useAuthRedirect } from "@/hooks/use-auth-redirect";
// import DataStatusDisplay from "@workspace/ui/components/data-status-display";
// // import { authClient } from "database/auth-client";
// import { useEffect, useState } from "react";

// export default function Agent() {
//   // const { signOut } = authClient;

//   // useEffect( async() => {
//   //   await signOut()
//   // });
//   const [showContent, setShowContent] = useState(false);
//   const { isPending, error } = useAuthRedirect({
//     ifAuthenticatedParent: "/parent",
//     ifUnauthenticated: "/auth/login",
//   });
//   useEffect(() => {
//     if (!isPending) {
//       const timer = setTimeout(() => {
//         setShowContent(true);
//       }, 5000);

//       return () => clearTimeout(timer);
//     }
//   }, [isPending]);

//   if (isPending || error || !showContent) {
//     return (
//       <DataStatusDisplay
//         showContent={showContent}
//         isPending={isPending}
//         hasError={error}
//       />
//     );
//   }
//   return (
//     <main>
//       <h1>Agent Page</h1>
//     </main>
//   );
// }

// apps/client/app/(dashboard)/agent/scan/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Camera,
  CheckCircle2,
  XCircle,
  QrCode as QrCodeIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useScanQRCodeMutation } from "@/hooks/use-students";

// Composant ScanResultPopup inchangé
const ScanResultPopup = ({
  type,
  message,
  studentName,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  studentName?: string;
  onClose: () => void;
}) => {
  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";
  const textColor = type === "success" ? "text-white" : "text-white";
  const Icon = type === "success" ? CheckCircle2 : XCircle;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onClose();
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        className={`${bgColor} text-white p-8 rounded-lg shadow-xl text-center flex flex-col items-center space-y-4 max-w-sm w-full border border-opacity-30 border-white`}
      >
        {/* Bouton de fermeture en haut à droite */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
        >
          <XCircle className={`h-6 w-6 ${textColor}`} color="white" />
        </button>
        <Icon className={`${textColor} h-16 w-16`} color="white" />
        <h2 className={`${textColor} text-2xl font-bold`}>
          {type === "success" ? "Validation réussie !" : "Erreur de scan"}
        </h2>
        {studentName && (
          <p className={`${textColor} text-xl font-semibold`}>{studentName}</p>
        )}
        <p className={`${textColor} text-lg`}>{message}</p>
      </div>
    </div>
  );
};

export default function AgentScanPage() {
  // scanActive sera utilisé pour la prop 'paused' du Scanner
  const [scanActive, setScanActive] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<{
    type: "success" | "error";
    message: string;
    studentName?: string;
  } | null>(null);

  const scanQRCodeMutation = useScanQRCodeMutation();

  // Traitement du résultat du scan
  const handleScan = async (detectedCodes: IDetectedBarcode[]) => {
    if (detectedCodes.length === 0 || !detectedCodes[0]?.rawValue) {
      return;
    }

    const qrCodeData = detectedCodes[0].rawValue;
    setScanActive(false); // Met en pause le scanner

    try {
      const result = await scanQRCodeMutation.mutateAsync(qrCodeData);

      setPopupState({
        type: "success",
        message: result.message,
        studentName: result.studentName,
      });

      /*let studentData: {
        name: string;
        subscriptionStatus: string;
        mealRecorded: boolean;
      };
      if (qrCodeData === "VALID_QR_ALICE_123") {
        studentData = {
          name: "Alice Martin",
          subscriptionStatus: "Active",
          mealRecorded: false,
        };
      } else if (qrCodeData === "EXPIRED_QR_BOB_456") {
        studentData = {
          name: "Bob Dubois",
          subscriptionStatus: "Expirée",
          mealRecorded: false,
        };
      } else {
        studentData = {
          name: "Inconnu",
          subscriptionStatus: "Non trouvé",
          mealRecorded: false,
        };
      }

      if (studentData.subscriptionStatus === "Active") {
        setPopupState({
          type: "success",
          message: "Repas enregistré !",
          studentName: studentData.name,
        });
      } else if (studentData.subscriptionStatus === "Expirée") {
        setPopupState({
          type: "error",
          message: `Abonnement expiré.`,
          studentName: studentData.name,
        });
      } else {
        setPopupState({
          type: "error",
          message: `Élève non reconnu ou QR Code invalide.`,
          studentName: studentData.name,
        });
      }*/
    } catch (error: any) {
      console.error("Erreur lors de la vérification du QR Code:", error);

      setPopupState({
        type: "error",
        message: error.message || "Erreur de communication avec le serveur.",
        studentName: error.studentName,
      });
    }
  };

  // Fonction pour gérer les erreurs du scanner de manière plus robuste
  const handleError = (error: unknown) => {
    // Vérifie si l'erreur est le DOMException d'interruption
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Scan interrompu par l'utilisateur ou le système.");
    } else {
      console.error("Erreur du scanner:", error);
      setScanActive(false); // Arrête le scanner en cas d'erreur inattendue
      setPopupState({
        type: "error",
        message: "Erreur d'accès ou d'utilisation de la caméra.",
      });
    }
  };

  // Boutons de simulation pour le développement
  const simulateScan = (qrCode: string) => {
    setScanActive(true); // Active le scanner pour la simulation
    setPopupState(null);
    setTimeout(
      () => handleScan([{ rawValue: qrCode } as IDetectedBarcode]),
      1500
    );
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
        Scan QR Code Élève
      </h1>

      {/* Zone de scan */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6 mb-8 border border-gray-200 text-center">
        {!scanActive && ( // Afficher ceci si le scan n'est PAS actif
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <QrCodeIcon className="h-20 w-20 mb-4 text-gray-400" />
            <p className="text-lg">
              Appuyez pour démarrer le scan du QR Code de l'élève
            </p>
            <Button
              onClick={() => setScanActive(true)} // Active le scan
              className="mt-6 flex items-center gap-2"
            >
              <Camera className="h-5 w-5" color="white" /> Démarrer le Scan
            </Button>
            {/* Boutons de simulation pour le développement */}
            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => simulateScan("VALID_QR_ALICE_123")}
                className="text-blue-600 border-blue-600"
              >
                Simuler Valide
              </Button>
              <Button
                variant="outline"
                onClick={() => simulateScan("EXPIRED_QR_BOB_456")}
                className="text-red-600 border-red-600"
              >
                Simuler Expiré
              </Button>
              <Button
                variant="outline"
                onClick={() => simulateScan("UNKNOWN_QR_789")}
                className="text-gray-600 border-gray-600"
              >
                Simuler Inconnu
              </Button>
            </div> */}
          </div>
        )}

        {scanActive && ( // Afficher ceci si le scan EST actif
          <div className="flex flex-col items-center justify-center h-64 text-blue-600">
            <p className="text-lg mb-4">
              Scanning... Veuillez présenter le QR Code
            </p>
            {/* Intégration du composant Scanner */}
            <div className="w-full h-48 rounded-md overflow-hidden relative bg-gray-200">
              <Scanner
                onScan={handleScan}
                onError={handleError}
                constraints={{
                  facingMode: "environment",
                  width: { ideal: 1280 },
                  height: { ideal: 720 },
                }}
                scanDelay={500}
                // Ici, la prop 'paused' est cruciale
                paused={!scanActive} // Le scanner est en pause si scanActive est false
                styles={{
                  video: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                  container: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-4 border-blue-500 w-3/4 h-3/4 rounded-lg animate-pulse" />
              </div>
            </div>
            <Button
              onClick={() => setScanActive(false)} // Passe à l'état idle (arrête le scan)
              variant="outline"
              className="mt-4 flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-100"
            >
              <XCircle className="h-5 w-5" /> Arrêter le Scan
            </Button>
          </div>
        )}
      </div>

      {/* Affichage du popup de résultat */}
      {popupState && (
        <ScanResultPopup
          type={popupState.type}
          message={popupState.message}
          studentName={popupState.studentName}
          onClose={() => {
            setPopupState(null);
          }}
        />
      )}
    </div>
  );
}
