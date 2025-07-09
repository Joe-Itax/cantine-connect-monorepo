import { WifiOff } from "lucide-react";

export const NoInternetOverlay = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 text-center text-white bg-gray-900 bg-opacity-95 backdrop-blur-sm"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <WifiOff className="h-24 w-24 mb-6 text-red-500" />
      <h2 className="text-4xl font-bold mb-4">Pas de connexion Internet</h2>
      <p className="text-xl max-w-lg">
        Il semble que vous n'êtes pas connecté à Internet. Veuillez vérifier
        votre connexion et réessayer.
      </p>
      <p className="mt-8 text-sm text-gray-400">
        Les fonctionnalités en ligne ne sont pas disponibles.
      </p>
    </div>
  );
};
