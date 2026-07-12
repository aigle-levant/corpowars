import type { TeamSlot } from "@/types/team-types";

export function getSelectedCompanyIds(team: TeamSlot[]): Set<string> {
  return new Set(
    team
      .map((slot) => slot.company?.id)
      .filter((id): id is string => id !== undefined),
  );
}
