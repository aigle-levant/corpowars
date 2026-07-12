import type { Company } from "@/types/company-types";
import type { TeamSlot } from "@/types/team-types";

import { getSelectedCompanyIds } from "./get-selected-companies-ids";

export function filterAvailableCompanies(
  companies: Company[],
  team: TeamSlot[],
): Company[] {
  const selected = getSelectedCompanyIds(team);

  return companies.filter((company) => !selected.has(company.id));
}
