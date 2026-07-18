import { BattleCompany } from "../../battles/types/battle";
import { dealFixedDamage, healCompany, removeStatus } from "./helpers";

export function processStatuses(company: BattleCompany): void {
  const expired: string[] = [];

  for (const status of company.statuses) {
    switch (status.type) {
      case "DAMAGE_OVER_TIME":
        dealFixedDamage(company, status.amount);
        break;

      case "HEAL_OVER_TIME":
        healCompany(company, status.amount);
        break;
    }

    status.duration--;

    if (status.duration <= 0) {
      expired.push(status.id);
    }
  }

  for (const id of expired) {
    removeStatus(company, id);
  }
}
