import { useQuery } from "@tanstack/react-query";

import { getItems } from "../services/items";

export function useItems() {
  return useQuery({
    queryKey: ["items"],

    queryFn: getItems,

    staleTime: 1000 * 60 * 30,
  });
}
