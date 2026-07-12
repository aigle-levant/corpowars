import type { TeamSlot } from "@/types/team-types";

export function findNextEmptySlot(team: TeamSlot[]): number {
  return team.findIndex((slot) => slot.company === null);
}
