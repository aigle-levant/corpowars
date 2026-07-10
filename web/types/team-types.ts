import type { Company } from "./company-types";
import type { Item } from "./item-types";

export interface TeamSlot {
  company: Company | null;
  item: Item | null;
}

export interface Team {
  id: string;
  name: string;
  slots: TeamSlot[];
}
