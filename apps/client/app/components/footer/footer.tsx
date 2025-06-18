import Logo from "@/components/logo";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="text-secondary" />
            </div>
            <p className="mb-4 text-primary-foreground">
              Votre partenaire digital pour une cantine scolaire moderne et
              efficace.
            </p>
            <div className="flex space-x-3">
              <Link
                href=""
                className="p-3 rounded-full bg-secondary hover:bg-secondary/90 transition flex items-center justify-center"
              >
                <FacebookIcon />
              </Link>
              <Link
                href=""
                className="p-3 rounded-full bg-secondary hover:bg-secondary/90 transition flex items-center justify-center"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-secondary pt-1">
              Cantine Connect
            </h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground">
                <Link href="">À Propos de Nous</Link>
              </li>
              {/* <li>
                <Link href="">Le Projet TFC</Link>
              </li> */}
              <li className="text-primary-foreground">
                <Link href="">Témoignages</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="">Notre Vision</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-secondary pt-1">
              Aide et Support
            </h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground">
                <Link href="">FAQ</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="">Confidentialité</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="">Conditions d'Utilisation</Link>
              </li>
            </ul>
          </div>

          {/* <div>
                <h3 className="font-bold mb-4">Restons en Contact</h3>
                <p className="mb-2">Suivez nos mises à jour</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="px-3 py-2 rounded-l-md text-gray-800 w-full"
                  />
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
                    →
                  </button>
                </div>
              </div> */}
        </div>

        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-primary-foreground">
            Copyright &copy; {new Date().getFullYear()} - CantineConnect. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
