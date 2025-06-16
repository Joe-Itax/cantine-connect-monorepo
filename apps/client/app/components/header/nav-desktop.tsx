import Link from "next/link";
import navItems from "./nav-items";

export default function NavDesktop({ className }: { className?: string }) {
  return (
    <nav className={`${className} flex items-center gap-1 nav-desktop`}>
      {navItems.map(({ label, path }) =>
        path.startsWith("/") ? (
          <Link
            key={label}
            href={path}
            className={`font-light transition-colors px-2 border border-transparent py-1 hover:border-b-primary text-black ${
              true ? "text- border-b border-b-white" : ""
            }`}
          >
            {label}
          </Link>
        ) : (
          <span
            key={label}
            className="font-semibold transition-colors px-2.5 border border-transparent py-1 text-white cursor-not-allowed"
            title="Fonctionnalité à venir"
          >
            {label}
          </span>
        )
      )}
    </nav>
  );
}
