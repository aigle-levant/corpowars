import type { TeamSlot } from "@/types/team-types";

export function removeTeamSlot(team: TeamSlot[], slot: number): TeamSlot[] {
  const next = [...team];

  next.splice(slot, 1);

  next.push({
    company: null,
    item: null,
  });

  return next;
}
