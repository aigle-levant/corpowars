import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "../services/companies";

export function useCompanies() {
  return useQuery({
    queryKey: ["companies"],

    queryFn: getCompanies,

    staleTime: 1000 * 60 * 30,
  });
}
