"use client";

import { useQuery } from "@tanstack/react-query";

import { getTeam } from "../services/teams";

export function useTeam(teamId: string) {
  return useQuery({
    queryKey: ["team", teamId],

    queryFn: () => getTeam(teamId),

    enabled: !!teamId,
  });
}
