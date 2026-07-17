"use client";

import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../services/teams";

export function useTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });
}
