"use client";

import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Download, Loader2, QrCode as QrCodeIcon } from "lucide-react";
import { toast } from "sonner";
import { useChildSelection } from "@/context/child-selection-context";

export default function ParentQrCodePage() {
  const { selectedChild } = useChildSelection();
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  useEffect(() => {
    if (selectedChild && selectedChild.matriculeHashe) {
      setQrCodeData(selectedChild.matriculeHashe);
    } else {
      setQrCodeData(null);
    }
  }, [selectedChild]);

  if (!selectedChild) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
        <Loader2 className="h-16 w-16 animate-spin text-blue-500 mb-4" />
        <p className="text-lg">Chargement de l'enfant sélectionné...</p>
      </div>
    );
  }

  if (!qrCodeData) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-600">
        <QrCodeIcon className="h-20 w-20 mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">QR Code non disponible</h2>
        <p className="text-md text-center mt-2">
          Impossible de générer le QR Code pour{" "}
          {selectedChild.enrolledStudent.name}.
        </p>
      </div>
    );
  }

  const downloadQrCode = () => {
    const canvas = document.getElementById(
      "qrcode-canvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `qrcode-${selectedChild.enrolledStudent.name}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      toast.success("QR Code téléchargé !");
    } else {
      toast.error("Erreur lors du téléchargement du QR Code.");
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800">
        QR Code de {selectedChild.enrolledStudent.name}
      </h2>

      <Card className="p-6 flex flex-col items-center space-y-4 max-w-sm w-full">
        <CardHeader className="w-full">
          <CardTitle className="text-center">
            Présentez ce QR Code à l'agent de cantine
          </CardTitle>
          <CardDescription className="text-center">
            Il sera scanné pour enregistrer le repas de votre enfant.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <QRCodeCanvas
              id="qrcode-canvas"
              value={qrCodeData}
              size={200}
              level="H"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button
              onClick={downloadQrCode}
              className="flex items-center gap-2 w-full"
            >
              <Download className="h-4 w-4" color="white" /> Télécharger
            </Button>
            {/* <Button
              onClick={copyQrCodeData}
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <Copy className="h-4 w-4" /> Copier le texte
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
