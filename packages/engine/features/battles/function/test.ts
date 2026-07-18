import { Move } from "../../moves/types/moves";
import { Company } from "../../../types/company";
import { simulateBattle } from "./battle";
import { getBattleResult } from "./winner";

const lawsuit: Move = {
  id: "1",
  name: "Lawsuit",
  description: "Deal heavy damage.",
  power: 35,
  type: "offensive",
  duration: 0,
  effect: "DAMAGE",
};

const fundingRound: Move = {
  id: "2",
  name: "Funding Round",
  description: "Recover Capital.",
  power: 25,
  type: "support",
  duration: 0,
  effect: "HEAL",
};

const defamation: Move = {
  id: "3",
  name: "Defamation Campaign",
  description: "Damage over time.",
  power: 10,
  type: "offensive",
  duration: 3,
  effect: "DAMAGE_OVER_TIME",
};

const coffee: Move = {
  id: "4",
  name: "Coffee Time",
  description: "Heal over time.",
  power: 8,
  type: "support",
  duration: 3,
  effect: "HEAL_OVER_TIME",
};

const tabx: Company = {
  id: "tabx",
  name: "TabX",
  ticker: "TABX",
  description: "Private aerospace company pushing reusable launch technology.",
  sector: "aerospace",
  passive: "rapid_iteration",
  tags: ["space", "launch", "engineering"],

  stats: {
    trust: 78,
    capital: 84,
    execution: 87,
    influence: 80,
    innovation: 99,
    resilience: 88,
    marketShare: 76,
  },

  moves: [lawsuit, fundingRound, coffee],
};

const pear: Company = {
  id: "pear",
  name: "Pear",
  ticker: "PEAR",
  description: "Consumer technology giant with a tightly integrated ecosystem.",
  sector: "consumer",
  passive: "ecosystem_lockin",
  tags: ["consumer", "hardware", "ecosystem"],

  stats: {
    trust: 96,
    capital: 95,
    execution: 90,
    influence: 82,
    innovation: 88,
    resilience: 92,
    marketShare: 85,
  },

  moves: [lawsuit, defamation, fundingRound],
};

const battle = simulateBattle(tabx, pear);

console.log("========== BATTLE ==========");

for (const log of battle.logs) {
  console.log(`[Turn ${log.turn}] ${log.message}`);
}

console.log(getBattleResult(battle));
