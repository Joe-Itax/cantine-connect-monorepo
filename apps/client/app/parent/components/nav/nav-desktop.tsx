import Link from "next/link";
import { HomeIcon } from "lucide-react";

import { navItems } from "./nav-items";

interface navDesktopProps {
  className?: string;
}

export default function NavDesktop({ className }: navDesktopProps) {
  return (
    <nav
      className={`${className} w-full sticky top-0 flex justify-center items-center p-8`}
    >
      <ul className="flex gap-2">
        {navItems.map((item: any) => {
          return (
            <li key={`${item.name}`}>
              <Link href={`${item.href}`}>{item.icon}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
