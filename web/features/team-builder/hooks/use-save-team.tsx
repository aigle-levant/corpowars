"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTeam } from "../services/teams";
import type { SaveTeamParams } from "../types/props";

export function useSaveTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: SaveTeamParams) => updateTeam(id, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });

      queryClient.invalidateQueries({
        queryKey: ["team", variables.id],
      });
    },
  });
}
