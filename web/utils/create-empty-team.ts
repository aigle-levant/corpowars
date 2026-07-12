import { TEAM_SIZE } from "@/constants/config";

import type { TeamSlot } from "@/types/team-types";

export function createEmptyTeam(): TeamSlot[] {
  return Array.from({ length: TEAM_SIZE }, () => ({
    company: null,
    item: null,
  }));
}
