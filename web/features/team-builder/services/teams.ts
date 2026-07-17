import { api } from "@/lib/api";

import type { Team } from "@/types/team-types";
import type { CreateTeamDto, UpdateTeamDto } from "../types/teams";

export function getTeams() {
  return api<Team[]>("/teams");
}

export function getTeam(id: string) {
  return api<Team>(`/teams/${id}`);
}

export function createTeam(payload: CreateTeamDto) {
  return api<Team>("/teams", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateTeam(id: string, payload: UpdateTeamDto) {
  return api<Team>(`/teams/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export function deleteTeam(id: string) {
  return api<void>(`/teams/${id}`, {
    method: "DELETE",
  });
}