import { simulateBattle } from "../../../packages/index.js";

import * as CompaniesRepository from "../db/repo.companies.js";

export async function simulate(
  userId: string,
  playerCompanyId: string,
  enemyCompanyId: string,
) {
  const player = await CompaniesRepository.movesFindById(playerCompanyId);
  const enemy = await CompaniesRepository.movesFindById(enemyCompanyId);

  if (!player) {
    throw new Error("Player company not found.");
  }

  if (!enemy) {
    throw new Error("Enemy company not found.");
  }

  return simulateBattle(player, enemy);
}
