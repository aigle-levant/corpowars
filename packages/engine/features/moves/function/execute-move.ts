import { effectRegistry } from "./effects";
import type { BattleContext, BattleLog } from "../../battles/types/battle";

export function executeMove(ctx: BattleContext): BattleLog {
  const effect = effectRegistry[ctx.move.effect];

  if (!effect) {
    throw new Error(`Unknown move effect: ${ctx.move.effect}`);
  }

  const result = effect(ctx);

  return {
    turn: ctx.battle.turn,
    attacker: ctx.attacker.company.name,
    defender: ctx.defender.company.name,
    move: ctx.move.name,
    // TODO: add damage
    message: result.message,
  };
}
