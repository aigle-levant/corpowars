import { Battle, BattleResult } from "../types/battle";

export function getBattleResult(battle: Battle): BattleResult {
  const playerAlive = battle.player.currentCapital > 0;
  const enemyAlive = battle.enemy.currentCapital > 0;

  if (!playerAlive && !enemyAlive) {
    return "draw";
  }

  if (!playerAlive) {
    return "enemy";
  }

  if (!enemyAlive) {
    return "player";
  }

  return null;
}

export function hasWinner(battle: Battle): boolean {
  return getBattleResult(battle) !== null;
}