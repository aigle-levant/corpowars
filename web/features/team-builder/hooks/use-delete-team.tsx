"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTeam } from "../services/teams";

export function useDeleteTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeam,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },
  });
}
