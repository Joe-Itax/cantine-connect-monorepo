import { Home, CreditCard, QrCode, Bell, History } from "lucide-react";

export const navItems = [
  { name: "Accueil", href: "/parent", icon: Home },
  { name: "Abonnement", href: "/parent/subscription", icon: CreditCard },
  { name: "QR Code", href: "/parent/qrcode", icon: QrCode },
  { name: "Notifications", href: "/parent/notifications", icon: Bell },
  { name: "Historique", href: "/parent/history", icon: History },
];
