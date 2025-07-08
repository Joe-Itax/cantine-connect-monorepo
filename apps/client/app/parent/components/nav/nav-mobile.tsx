import { HomeIcon } from "lucide-react";
import Link from "next/link";

interface navMobileProps {
  className?: string;
}

export default function NavMobile({ className }: navMobileProps) {
  return (
    <nav className={`${className}`}>
      <ul>
        <li>
          <Link href={""}>
            <HomeIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
