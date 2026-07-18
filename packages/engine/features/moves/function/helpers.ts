import type {
  BattleCompany,
  BattleContext,
  StatusEffect,
} from "../../battles/types/battle";

import {
  calculateDamage,
  applyDamage,
  heal,
} from "../../battles/function/damage";

export function dealDamage(ctx: BattleContext): number {
  const damage = calculateDamage(ctx.attacker, ctx.defender, ctx.move);

  return applyDamage(ctx.defender, damage);
}

export function dealFixedDamage(target: BattleCompany, amount: number): number {
  return applyDamage(target, amount);
}

export function healCompany(target: BattleCompany, amount: number): number {
  return heal(target, amount);
}

export function addStatus(target: BattleCompany, status: StatusEffect): void {
  target.statuses.push(status);
}

export function removeStatus(target: BattleCompany, statusId: string): void {
  target.statuses = target.statuses.filter((status) => status.id !== statusId);
}

export function hasStatus(target: BattleCompany, statusId: string): boolean {
  return target.statuses.some((status) => status.id === statusId);
}

export function faint(target: BattleCompany): void {
  target.currentCapital = 0;
}