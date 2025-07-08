"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { PlusIcon } from "lucide-react";

interface scanResultProps {
  type: "success" | "error";
  message: string;
  studentName?: string;
}

export default function ScanResult({
  type,
  message,
  studentName,
}: scanResultProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";
  const Icon = type === "success" ? CheckCircle2 : XCircle;

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="ml-auto" variant="outline">
          <PlusIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
          Ajouter un utilisateur
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>Créer un nouvel utilisateur</DialogTitle>
        </DialogHeader>
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
            {/* <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-300 hover:text-white focus:outline-none"
            >
              <XCircle className="h-6 w-6" />
            </button> */}
            <Icon className="h-16 w-16" />
            <h2 className="text-2xl font-bold">
              {type === "success" ? "Validation réussie !" : "Erreur de scan"}
            </h2>
            {studentName && (
              <p className="text-xl font-semibold">{studentName}</p>
            )}
            <p className="text-lg">{message}</p>
          </div>
        </div>
        <div className="border-t px-6 py-4 flex justify-end gap-2">
          {/* <DialogClose asChild>
            <Button variant="outline">Annuler</Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? "Création..." : "Créer l'utilisateur"}
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
