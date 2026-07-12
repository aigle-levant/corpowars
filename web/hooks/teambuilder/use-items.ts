"use client";

import { useQuery } from "@tanstack/react-query";

import { getItems } from "@/services/item-service";

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
}
