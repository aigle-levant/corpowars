import type { BattleContext } from "../../../battles/types/battle";
import { dealDamage } from "../../function/helpers";

export function damage(ctx: BattleContext) {
  const damage = dealDamage(ctx);

  return {
    message: `${ctx.attacker.company.name} dealt ${damage} damage using ${ctx.move.name}!`,
  };
}