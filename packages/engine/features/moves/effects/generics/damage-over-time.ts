import type { BattleContext } from "../../../battles/types/battle";
import { addStatus } from "../../function/helpers";

export function damageOverTime(ctx: BattleContext) {
  addStatus(ctx.defender, {
    id: ctx.move.id,
    type: "DAMAGE_OVER_TIME",
    amount: ctx.move.power,
    duration: ctx.move.duration,
  });

  return {
    message: `${ctx.defender.company.name} will take damage over time!`,
  };
}
