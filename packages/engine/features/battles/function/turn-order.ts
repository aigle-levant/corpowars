import type { TurnOrder, BattleCompany } from "../types/battle";

export function determineTurnOrder(
  player: BattleCompany,
  enemy: BattleCompany,
): TurnOrder {
  const playerExecution = player.company.stats.execution;
  const enemyExecution = enemy.company.stats.execution;

  if (playerExecution > enemyExecution) {
    return {
      first: player,
      second: enemy,
    };
  }

  if (enemyExecution > playerExecution) {
    return {
      first: enemy,
      second: player,
    };
  }

  if (Math.random() < 0.5) {
    return {
      first: player,
      second: enemy,
    };
  }

  return {
    first: enemy,
    second: player,
  };
}
