"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

import Logo from "@/components/logo";
import navItems from "./nav-items";
import Link from "next/link";

export default function NavMobile({ className }: { className?: string }) {
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
          <Logo />
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
                    className={`block w-full px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors ${
                      true ? "bg-primary text-primary-foreground" : ""
                    }`}
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
