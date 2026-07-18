import { BattleCompany } from "../types/battle";
import { Move } from "../../moves/types/moves";

export function calculateDamage(
  attacker: BattleCompany,
  defender: BattleCompany,
  move: Move,
): number {
  const attack = attacker.company.stats.execution;
  const defense = defender.company.stats.resilience;

  const damage = attack + move.power - defense;

  return Math.max(1, damage);
}

export function applyDamage(defender: BattleCompany, damage: number): number {
  const actualDamage = Math.min(damage, defender.currentCapital);

  defender.currentCapital -= actualDamage;

  return actualDamage;
}

export function heal(target: BattleCompany, amount: number): number {
  const maxCapital = target.company.stats.capital;

  const healed = Math.min(amount, maxCapital - target.currentCapital);

  target.currentCapital += healed;

  return healed;
}