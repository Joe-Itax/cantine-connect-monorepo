"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import { User, Mail, Phone, Home, Loader2, XCircle, Users, LogOut } from "lucide-react";
import { useChildSelection } from "@/context/child-selection-context";
import { authClient } from "database/auth-client";
import { Button } from "@workspace/ui/components/button";
import { CanteenStudent, EnrolledStudent } from "@workspace/ui/types/student"; 
import { useUserQuery } from "@/hooks/use-users";

interface ParentProfile {
  id: string;
  name: string;
  email: string;
}



export default function ParentProfilePage() {
    const router = useRouter();
  const { data: session } = authClient.useSession();
  const parentId = session?.user?.id;

  const { signOut } = authClient;
  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  const {
    data: parentProfile,
    isPending: isLoadingParent,
    isError: isErrorParent,
    error: parentError,
  } = useUserQuery(parentId as string);

  const { children: canteenStudents, isLoadingChildren } = useChildSelection();

  if (status === "loading" || isLoadingParent || isLoadingChildren) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <p className="mt-4 text-lg text-gray-600">
          Chargement de votre profil...
        </p>
      </div>
    );
  }

  if (isErrorParent) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-red-600">
        <XCircle className="h-12 w-12 mb-4" />
        <p className="text-lg">
          Erreur lors du chargement de votre profil: {parentError?.message}
        </p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Réessayer
        </Button>
      </div>
    );
  }

  if (!parentProfile) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-600">
        <User className="h-20 w-20 mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Profil non trouvé</h2>
        <p className="text-md text-center mt-2">
          Impossible de charger les informations de votre compte.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Votre Profil</h2>

      <Card>
        <CardHeader>
          <CardTitle>Informations Personnelles</CardTitle>
          <CardDescription>
            Gérez les détails de votre compte parent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-500" />
            <p className="text-lg font-medium">{parentProfile.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <p className="text-lg text-gray-700">{parentProfile.email}</p>
          </div>
          {/* <Button className="mt-4">Modifier le Profil</Button> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enfants Rattachés</CardTitle>
          <CardDescription>
            Liste des enfants associés à votre compte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingChildren ? (
            <p className="flex items-center text-gray-600">
              <Loader2 className="animate-spin mr-2" /> Chargement des
              enfants...
            </p>
          ) : canteenStudents && canteenStudents.length > 0 ? (
            <ul className="space-y-2">
              {canteenStudents.map((child: CanteenStudent) => (
                <li
                  key={child.id}
                  className="flex items-center gap-2 text-lg font-medium text-gray-800"
                >
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    {child.enrolledStudent.name} (Matricule:{" "}
                    {/* {child.matricule.substring(0, 8)}...) */}
                    {child.enrolledStudent.matricule}; Classe:{" "}
                    {child.enrolledStudent.class})
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              Aucun enfant n'est rattaché à ce compte.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deconnexion</CardTitle>
          {/* <CardDescription>
            Gérez les détails de votre compte parent.
          </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Button
              variant="destructive"
              className="w-full sm:w-auto flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" color="white" /> Déconnexion
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
