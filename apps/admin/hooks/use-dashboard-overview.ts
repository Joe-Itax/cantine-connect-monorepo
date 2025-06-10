import { DashboardStats } from "@workspace/ui/types/dashboard-stat";
import { useQuery } from "@tanstack/react-query";

export function useDashboardStatsQuery(): ReturnType<typeof useQuery<DashboardStats>> {
  return useQuery<DashboardStats>({
    queryKey: ["dashboard-overview"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard/overview`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();

        if (!res.ok) {
          console.error("Erreur lors du fetch des stats: ", data.message);
          throw new Error("Erreur lors du fetch des stats");
        }

        return data;
      } catch (error) {
        console.error(`Erreur lors du fetch des stats. Erreur: ${error}`);
      }
    },
    staleTime: 5 * 60 * 1000,
    // refetchOnWindowFocus: false,
  });
}
