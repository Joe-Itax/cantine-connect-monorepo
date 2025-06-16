"use client";

import Link from "next/link";
import { authClient } from "database/auth-client";
import { Button } from "@workspace/ui/components/button";
import Logo from "@/components/logo";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <header className="w-full bg-white sticky top-0 left-0 z-50 shadow-sm">
      <div className="mx-auto px-4 py-5 flex items-center justify-between">
        <Logo className="text-secondary _expandButton_1rxo6_28" />
        {/* <NavDesktop className="flex" /> */}
        <NavDesktop className="hidden lg:flex" />
        <NavMobile className="lg:hidden" />
        <Link
          href={`${user?.role === "PARENT" ? "/parent" : user?.role === "AGENT" ? "/agent" : "/auth/login"}`}
          passHref
          className="hidden lg:flex"
        >
          <Button
            variant="outline"
            // className="text-white border-white hover:bg-white hover:text-secondary-dark px-4 py-2 rounded-md transition-colors"
          >
            {user ? "Accèder à CantineConnect" : "Se connecter"}
          </Button>
        </Link>
      </div>
    </header>
  );
}
