import type { TeamSlot } from "@/types/team-types";

export function moveTeamSlot(
  team: TeamSlot[],
  from: number,
  to: number,
): TeamSlot[] {
  if (from === to) {
    return team;
  }

  const next = [...team];

  const [moved] = next.splice(from, 1);

  next.splice(to, 0, moved);

  return next;
}
