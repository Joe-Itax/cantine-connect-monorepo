import Link from "next/link";
import { LinkIcon } from "lucide-react";

interface LogoProps {
  className?: string;
  classNameTxt?: string;
  classNameIcon?: string;
  isLink?: boolean;
}

export default function Logo({
  className,
  classNameTxt,
  classNameIcon,
  isLink = true,
}: LogoProps) {
  return isLink ? (
    <Link
      href="/"
      className={`logo-cantine-connect select-none text-xl font-extrabold flex justify-center items-center gap-1 text-inherit ${className}`}
    >
      <LinkIcon className={`size-8 text-inherit font-bold ${classNameIcon}`} />
      <span className={`text-xl font-bold text-inherit ${classNameTxt}`}>
        CantineConnect
      </span>
    </Link>
  ) : (
    <span
      // href="/"
      className={`logo-cantine-connect select-none text-xl font-extrabold flex justify-center items-center gap-1 text-inherit ${className}`}
    >
      <LinkIcon className={`size-8 text-inherit font-bold ${classNameIcon}`} />
      <span className={`text-xl font-bold text-inherit ${classNameTxt}`}>
        CantineConnect
      </span>
    </span>
  );
}
