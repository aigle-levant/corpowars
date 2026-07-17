import type { TeamBuilderState } from "../types/teams";
import type { UpdateTeamDto } from "../types/dto";

export function mapBuilderToDto(team: TeamBuilderState): UpdateTeamDto {
  return {
    name: team.name,

    members: team.slots
      .map((slot, index) => ({
        slot,
        index,
      }))
      .filter(({ slot }) => slot.company !== null)
      .map(({ slot, index }) => ({
        position: index,

        companyId: slot.company!.id,

        itemId: slot.item?.id ?? null,
      })),
  };
}
