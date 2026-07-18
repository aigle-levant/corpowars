import type { BattleContext } from "../../../battles/types/battle";
import { addStatus } from "../../function/helpers";

export function healOverTime(ctx: BattleContext) {
  addStatus(ctx.attacker, {
    id: ctx.move.id,
    type: "HEAL_OVER_TIME",
    amount: ctx.move.power,
    duration: ctx.move.duration,
  });

  return {
    message: `${ctx.attacker.company.name} will recover over time!`,
  };
}
