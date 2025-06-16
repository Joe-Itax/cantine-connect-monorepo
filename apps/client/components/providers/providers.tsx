"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // Un seul retry en cas d'erreur
            refetchOnWindowFocus: false, // Pas de refetch quand le user changes d'onglet
            staleTime: 5 * 60 * 1000, // 5 minutes de données fraiches
          },
        },
      })
  );

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      // defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {/* {children} */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  );
}
