export type MoveEffect =
  | "DAMAGE"
  | "HEAL"
  | "DAMAGE_OVER_TIME"
  | "HEAL_OVER_TIME";

export interface Move {
  id: string;
  name: string;
  description: string;
  power: number;
  type: "offensive" | "support";
  duration: number;

  effect: MoveEffect;
}
