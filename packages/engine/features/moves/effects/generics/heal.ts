import type { BattleContext } from "../../../battles/types/battle";
import { healCompany } from "../../function/helpers";

export function heal(ctx: BattleContext) {
  healCompany(ctx.attacker, ctx.move.power);

  return {
    message: `${ctx.attacker.company.name} recovered ${ctx.move.power} Capital!`,
  };
}
