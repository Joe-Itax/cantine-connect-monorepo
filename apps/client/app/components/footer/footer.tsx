import Logo from "@/components/logo";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-purple-600 font-bold">
                CC
              </div>
              <span className="font-medium">CantineConnect</span> */}
              <Logo className="text-secondary" classNameIcon="text-white" />
            </div>
            <p className="mb-4">
              Votre partenaire digital pour une cantine scolaire moderne et
              efficace.
            </p>
            <div className="flex space-x-3">
              <Link
                href=""
                className="p-3 rounded-full bg-purple-500 hover:bg-purple-400 transition flex items-center justify-center"
              >
                <FacebookIcon />
              </Link>
              <Link
                href=""
                className="p-3 rounded-full bg-purple-500 hover:bg-purple-400 transition flex items-center justify-center"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">CantineConnect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="">À Propos de Nous</Link>
              </li>
              {/* <li>
                <Link href="">Le Projet TFC</Link>
              </li> */}
              <li>
                <Link href="">Témoignages</Link>
              </li>
              <li>
                <Link href="">Notre Vision</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Aide et Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="">FAQ</Link>
              </li>
              <li>
                <Link href="">Confidentialité</Link>
              </li>
              <li>
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

        <div className="border-t border-purple-500 mt-8 pt-8 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} - CantineConnect. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
