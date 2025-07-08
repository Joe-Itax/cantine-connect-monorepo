"use client";

import { useEffect, useState } from "react";
import { Label } from "@workspace/ui/components/label";
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

import { authClient } from "database/auth-client";
import { useCanteenStudentsByParentQuery } from "@/hooks/use-students";

export default function SelectStudent() {
  //   async function rr() {
  //     await authClient.signOut();
  //   }
  //   rr();
  const [openDialog, setOpenDialog] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const getCanteenStudentsByParent = async () => {
    const students = await useCanteenStudentsByParentQuery(user?.id as string);

    console.log("getCanteenStudentsByParent: ", students);
    return students;
  };

  useEffect(() => {
    if (user) getCanteenStudentsByParent();
  }, [user]);
  //   console.log("getCanteenStudentsByParent: ", getCanteenStudentsByParent);

  const handleSelect = async () => {
    try {
    } catch (error) {
      console.error(error);
    } finally {
      setOpenDialog(false);
    }
  };

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
          <DialogTitle>Sélectionner un élève</DialogTitle>
        </DialogHeader>
        {/* <div className="space-y-4 px-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Rôle *</Label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="parent">Parent</option>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div> */}
        {/* <div className="border-t px-6 py-4 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Annuler</Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? "Création..." : "Créer l'utilisateur"}
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
