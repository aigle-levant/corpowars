import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";
import type { TeamSlot } from "@/types/team-types";

export function updateTeamSlot(
  team: TeamSlot[],
  slot: number,
  data: {
    company?: Company | null;
    item?: Item | null;
  },
): TeamSlot[] {
  const next = [...team];

  next[slot] = {
    ...next[slot],
    ...data,
  };

  return next;
}
