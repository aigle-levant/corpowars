"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/query-keys";
import { getCompanies } from "@/services/company-service";

export function useCompanies() {
  return useQuery({
    queryKey: queryKeys.companies,
    queryFn: getCompanies,
  });
}
