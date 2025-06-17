"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { authClient } from "database/auth-client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

import Logo from "@/components/logo";
import navItems from "./nav-items";

export default function NavMobile({ className }: { className?: string }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`${className}`}>
        <MenuIcon
          className="cursor-pointer border-2 rounded-md p-0.5 border-border hover:text-primary hover:border-gray-400 transition-all"
          size={40}
        />
      </SheetTrigger>
      <SheetContent className={`${className} w-[300px] max-[300px]:w-full`}>
        <SheetHeader onClick={() => setOpen(false)}>
          <Logo className="text-secondary" />
        </SheetHeader>
        <nav className="grid gap-4 py-4">
          <ul className="flex flex-col">
            <li className="px-3">
              {navItems.map(({ label, path }) =>
                path.startsWith("/") ? (
                  <Link
                    key={label}
                    href={path}
                    onClick={() => setOpen(false)}
                    className={`block w-full px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors `}
                  >
                    {label}
                  </Link>
                ) : (
                  <span
                    key={label}
                    onClick={() => setOpen(false)}
                    className="block w-full mt-1 px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-not-allowed"
                  >
                    {label}
                  </span>
                )
              )}
            </li>
            <li className="px-3">
              <Link
                href={`${user?.role === "PARENT" ? "/parent" : user?.role === "AGENT" ? "/agent" : "/auth/login"}`}
                onClick={() => setOpen(false)}
                className={`block w-full px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors `}
              >
                {!user ? "Se connecter" : "Accéder à Cantine Connect"}
              </Link>
            </li>
          </ul>
        </nav>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button></Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
