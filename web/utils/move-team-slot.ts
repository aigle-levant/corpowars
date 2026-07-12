import type { TeamSlot } from "@/types/team-types";

export function moveTeamSlot(
  team: TeamSlot[],
  from: number,
  to: number,
): TeamSlot[] {
  const next = [...team];

  const [slot] = next.splice(from, 1);

  next.splice(to, 0, slot);

  return next;
}
