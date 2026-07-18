import type { Company } from "../../../types/company";
import type { Move } from "../../moves/types/moves";

export interface BattleCompany {
  company: Company;

  currentCapital: number;

  statuses: StatusEffect[];
}

export interface Battle {
  player: BattleCompany;

  enemy: BattleCompany;

  turn: number;

  logs: BattleLog[];
}

export interface BattleContext {
  battle: Battle;

  attacker: BattleCompany;

  defender: BattleCompany;

  move: Move;
}

export interface BattleLog {
  turn: number;

  attacker: string;

  defender: string;

  move: string;

  damage?: number;

  message: string;
}

export interface TurnOrder {
  first: BattleCompany;

  second: BattleCompany;
}

export type StatusType =
  | "DAMAGE_OVER_TIME"
  | "HEAL_OVER_TIME"
  | "STUN"
  | "SILENCE"
  | "SHIELD";

export interface StatusEffect {
  id: string;
  type: StatusType;
  amount: number;
  duration: number;
}

export type BattleResult = "player" | "enemy" | "draw" | null;
