import { damage } from "../effects/generics/damage";
import { heal } from "../effects/generics/heal";
import { damageOverTime } from "../effects/generics/damage-over-time";
import { healOverTime } from "../effects/generics/heal-over-time";
import type { BattleContext, BattleLog } from "../../battles/types/battle";

export type MoveEffectHandler = (
  ctx: BattleContext,
) => BattleLog | { message: string };

export const effectRegistry: Record<string, MoveEffectHandler> = {
  DAMAGE: damage,
  HEAL: heal,
  DAMAGE_OVER_TIME: damageOverTime,
  HEAL_OVER_TIME: healOverTime,
};