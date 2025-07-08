"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { User, Mail, Building, LogOut, Calendar } from "lucide-react";
import { authClient } from "database/auth-client";
import { useRouter } from "next/navigation";

export default function AgentProfilePage() {
  const { signOut } = authClient;
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return <div>Chargement du profil...</div>;
  }
  // Simuler les informations de l'agent
  const agentInfo = {
    name: user.name,
    email: user.email,
    role: user.role,
    school: "École de la Liberté",
    createdAt: user.createdAt,
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
        Mon Profil Agent
      </h1>

      <section className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 mb-8 border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <User className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-2xl text-center font-bold text-gray-800">
            {agentInfo.name}
          </h2>
          <p className="text-md text-gray-600">{agentInfo.role}</p>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Mail className="h-5 w-5 text-gray-500" />
            <span>{agentInfo.email}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Building className="h-5 w-5 text-gray-500" />
            <span>{agentInfo.school}</span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span>
              Agent depuis le <b> {formatDate(user.createdAt.toString())}</b>
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
          <Button
            variant="destructive"
            className="w-full sm:w-auto flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" color="white" /> Déconnexion
          </Button>
        </div>
      </section>
    </div>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
