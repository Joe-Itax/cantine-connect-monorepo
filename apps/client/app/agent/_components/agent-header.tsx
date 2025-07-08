"use client";
import Link from "next/link";
import { User, QrCode } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";

export default function AgentHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <div className="flex items-center">
        <Link href="/agent" className="flex items-center gap-2">
          <Logo isLink={false} classNameTxt="hidden" />
          <h1 className="text-xl font-semibold text-gray-800 hiddens sm: block">
            Agent Cantine
          </h1>
        </Link>
      </div>

      <nav className="flex items-center gap-4">
        {/* Lien vers la page de scan */}
        <Link
          href="/agent"
          className={`flex flex-col items-center gap-1 p-2 rounded-md transition-colors ${
            pathname === "/agent"
              ? "text-blue-700 bg-blue-50 font-semibold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <QrCode className="h-5 w-5" />
          <span className="text-xs">Scan</span>
        </Link>

        {/* Lien vers la page de profil/déconnexion */}
        <Link
          href="/agent/profile"
          className={`flex flex-col items-center gap-1 p-2 rounded-md transition-colors ${
            pathname === "/agent/profile"
              ? "text-blue-700 bg-blue-50 font-semibold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profil</span>
        </Link>
      </nav>
    </header>
  );
}
