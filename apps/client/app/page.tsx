"use client";

import Image from "next/image";
import Header from "@/app/components/header/header";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

import { pricing } from "@workspace/ui/lib/pricing";
import { NumberTicker } from "@workspace/ui/components/number-ticker";
import PriceCard from "./components/price-card";
import { authClient } from "database/auth-client";
import Footer from "./components/footer/footer";
import ContactSection from "./components/contact-section";

export default function Home() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <>
      {/* Header (contiendra le bouton "Se connecter") */}
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="accueil"
          className="bg-secondary text-white sm:py-40 py-20 relative sm:px-20 px-2 flex w-full"
        >
          <div className="mx-auto px-4 flex flex-col gap-4 md:w-2/3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl mb-8 leading-tight text-white">
              CantineConnect : La solution numérique pour la cantine de votre
              école
            </h1>
            <p className="text-lg mb-8 max-w-2xl">
              Simplifiez l'inscription, la gestion des abonnements et le service
              des repas pour les parents, l'administration scolaire et l'équipe
              de cantine.
            </p>
            <Button className="w-fit" size={"lg"}>
              <Link
                href={`${user?.role === "PARENT" ? "/parent" : user?.role === "AGENT" ? "/agent" : "/auth/login"}`}
                passHref
                className="w-full"
              >
                {user ? "Accèder à CantineConnect" : "Se connecter"}
              </Link>
            </Button>
          </div>
          <div className="hidden md:flex w-1/3"></div>

          {/* Decorative elements - Idéalement, remplacer par des illustrations pertinentes */}
          <div className="absolute bottom-0 right-0 w-72">
            <Image
              src={`/vector-1.svg`} // Ex: Illustration d'un enfant heureux à la cantine
              alt="Illustration Cantine Scolaire"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-72">
            <Image
              src={`/vector-2.svg`} // Ex: Illustration d'un QR code ou d'une application mobile
              alt="Illustration Gestion Cantine"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
        </section>
        {/* Stats Section - Adaptées aux données de cantine */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 flex justify-between flex-wrap gap-y-4">
            <div className="text-center px-4 flex-1 min-w-[150px]">
              <h3 className="text-3xl font-bold">1 seule</h3>{" "}
              {/* Pour une seule école simulée */}
              <p className="text-gray-600">École Gérée</p>
            </div>
            <div className="text-center px-4 flex-1 min-w-[150px]">
              <h3 className="text-3xl font-bold">
                <NumberTicker value={500} />+
              </h3>{" "}
              {/* Nombre d'élèves typiques dans une cantine */}
              <p className="text-gray-600">Élèves de Cantine</p>
            </div>
            <div className="text-center px-4 flex-1 min-w-[150px]">
              <h3 className="text-3xl font-bold">
                <NumberTicker value={90} />%
              </h3>
              <p className="text-gray-600">Parents Connectés</p>
            </div>
            <div className="text-center px-4 flex-1 min-w-[150px]">
              <h3 className="text-3xl font-bold">Rapidité</h3>
              <p className="text-gray-600">Service du Repas</p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="fonctionnalities" className="py-16 pt-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              CantineConnect : Des fonctionnalités conçues pour chacun
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1: Pour les Parents */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Pour les Parents : Simplicité et Suivi
                </h3>
                <p className="text-gray-700">
                  Après inscription par l'administration, accédez à votre espace
                  pour acheter ou renouveler les abonnements de vos enfants et
                  suivre leurs repas en temps réel.
                </p>
              </div>

              {/* Feature 2: Pour l'Administration (ADMIN) */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">👨‍💻</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Pour l'Admin : Contrôle et Efficacité
                </h3>
                <p className="text-gray-700">
                  Gérez toutes les inscriptions des élèves à la cantine,
                  associez-les à leurs parents, et générez des QR codes uniques
                  pour faciliter leur accès.
                </p>
              </div>

              {/* Feature 3: Pour l'Agent de Cantine (AGENT) */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">📱</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Pour l'Agent : Rapidité et Fiabilité
                </h3>
                <p className="text-gray-700">
                  Utilisez notre interface de scan rapide pour vérifier les
                  abonnements des élèves via leur QR code et assurer un service
                  fluide à la cantine.
                </p>
              </div>

              {/* Feature 4: Gestion des Abonnements */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">📅</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Abonnements sur Mesure
                </h3>
                <p className="text-gray-700">
                  Proposez des durées d'abonnement flexibles (journalier, court,
                  hebdomadaire, mensuel) pour s'adapter aux besoins de chaque
                  famille.
                </p>
              </div>

              {/* Feature 5: Notifications Intelligentes */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">🔔</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Alertes et Rappels</h3>
                <p className="text-gray-700">
                  Parents et administrateurs reçoivent des notifications
                  automatiques pour les abonnements expirants et la confirmation
                  du service des repas.
                </p>
              </div>

              {/* Feature 6: Sécurité et Confidentialité */}
              <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">🔒</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Données Sécurisées et Accès Contrôlé
                </h3>
                <p className="text-gray-700">
                  Un système robuste avec accès par rôles garantit la protection
                  des informations des élèves et des utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section id="howitwork" className="py-16 pt-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 w-full">
              <div className="relative h-80 w-full">
                {/* Placeholder pour une image illustrative du processus de QR code/scan */}
                <div className="bg-green-100 h-full w-full rounded-lg flex items-center justify-center">
                  <span className="text-6xl">✨</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">
                CantineConnect en action : Un processus simple et efficace
              </h2>
              <p className="text-gray-600 mb-6">
                Découvrez comment notre solution fluidifie la gestion de la
                cantine au quotidien.
              </p>
              <ul className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <span className="font-bold">Inscription par l'ADMIN :</span>{" "}
                  L'administration scolaire ajoute les élèves de l'école à la
                  cantine et les associe à un parent. Un QR code unique est
                  généré pour chaque élève.
                </li>
                <li>
                  <span className="font-bold">Accès Parent & QR Code :</span> Le
                  parent, une fois ajouté par l'ADMIN, accède à son espace
                  personnel pour consulter le QR code de son enfant (qui peut
                  être imprimé ou affiché sur un appareil).
                </li>
                <li>
                  <span className="font-bold">Achat d'Abonnement :</span> Le
                  parent choisit et achète l'abonnement souhaité (journalier,
                  hebdomadaire, mensuel, etc.) directement depuis son interface
                  sécurisée.
                </li>
                <li>
                  <span className="font-bold">
                    Service Rapide avec QR Code :
                  </span>{" "}
                  À la cantine, l'élève présente son QR code. L'agent de cantine
                  le scanne pour une vérification instantanée de l'abonnement
                  actif et un enregistrement rapide du service.
                </li>
                <li>
                  <span className="font-bold">
                    Notifications Intelligentes :
                  </span>{" "}
                  Parents et administrateurs reçoivent des notifications
                  automatiques, par exemple, lors de l'achat d'un abonnement ou
                  quand l'enfant est servi.
                </li>
              </ul>
              <Link
                href={`${user?.role === "PARENT" ? "/parent" : user?.role === "AGENT" ? "/agent" : "/auth/login"}`}
                passHref
              >
                <Button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600">
                  Accéder à CantineConnect
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section id="pricing" className="py-16 pt-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Nos Plans d'Abonnement Cantine
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Choisissez la durée d'abonnement qui convient le mieux aux besoins
              de votre enfant pour la cantine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {/* Abonnement 1 jour */}
              <PriceCard pricing={pricing[1]} />

              {/* Abonnement 3 jours (short) */}
              <PriceCard pricing={pricing[3]} />

              {/* Abonnement 7 jours (weekly) */}
              <PriceCard pricing={pricing[7]} isPopular />

              {/* Abonnement 30 jours (monthly) */}
              <PriceCard pricing={pricing[30]} />
            </div>
            <p className="text-center text-gray-700 mt-8">
              *Les abonnements sont gérés par l'administration de l'école.
              Connectez-vous pour voir les détails de paiement.
            </p>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 pt-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ce que les utilisateurs disent de CantineConnect
            </h2>

            <div className="max-w-2xl mx-auto text-center">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                &quot;En tant que parent, CantineConnect a simplifié la gestion
                de l'abonnement de mes enfants à la cantine. Un vrai gain de
                temps et une tranquillité d'esprit !&quot;
              </p>
              <p className="font-semibold text-lg text-gray-800">
                - Mme. K. , Parent d'élève
              </p>

              {/* Autres témoignages */}
              <div className="text-yellow-500 text-2xl mb-4 mt-8">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                &quot;Notre administration utilise CantineConnect au quotidien.
                La gestion des élèves et des QR codes est intuitive et rapide.
                Indispensable pour l'école.&quot;
              </p>
              <p className="font-semibold text-lg text-gray-800">
                - M. Dupont, Administrateur Scolaire
              </p>

              <div className="text-yellow-500 text-2xl mb-4 mt-8">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                &quot;Le scanner de QR codes est super efficace ! Plus de
                longues files, on gagne un temps fou au service. Merci
                CantineConnect !&quot;
              </p>
              <p className="font-semibold text-lg text-gray-800">
                - Agent de Cantine
              </p>

              {/* Placeholder for user avatars */}
              {/* <div className="flex justify-center space-x-2 mt-8">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>{" "}
                
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
