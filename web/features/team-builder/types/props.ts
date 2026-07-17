
import { Company } from "@/types/company-types";
import { Item } from "@/types/item-types";
import type { TeamSlot, UpdateTeamDto } from "./teams";

export interface EmptyTeamStateProps {
  onCreateTeam: () => void;
  onLoadTeam: () => void;
  hasSavedTeams?: boolean;
}

export interface CompanyPickerProps {
  companies: Company[];
  onSelect(company: Company): void;
}

export interface TeamSlotProps {
  index: number;
  slot: TeamSlot;
  selected: boolean;
  editable: boolean;
  onSelect(): void;
  onClear(): void;
}

export interface ItemsPickerProps {
  items: Item[];
  onSelect(item: Item): void;
}

export interface TeamNameInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export interface TeamSlotsProps {
  slots: TeamSlot[];

  selectedSlot: number | null;

  editable?: boolean;

  onSelectSlot: (index: number) => void;

  onClearSlot: (index: number) => void;
}

export interface CompanyEditorProps {
  slot: TeamSlot | null;

  companies: Company[];

  items: Item[];

  onSelectCompany: (company: Company) => void;

  onSelectItem: (item: Item) => void;
}

export interface SaveTeamParams {
  id: string;
  payload: UpdateTeamDto;
}

export interface ReviewProps {
  team: TeamSlot[];
}