import type { Company } from "../../../types/company";
import type { BattleCompany, Battle } from "../types/battle";
import { determineTurnOrder } from "./turn-order";
import { executeMove } from "../../moves/function/execute-move";
import { getBattleResult } from "./winner";
import { chooseMove } from "./bot";
import { processStatuses } from "../../moves/function/process-statuses";

function createBattleCompany(company: Company): BattleCompany {
  return {
    company,
    currentCapital: company.stats.capital,
    statuses: [],
  };
}

export function simulateBattle(
  playerCompany: Company,
  enemyCompany: Company,
): Battle {
  const battle: Battle = {
    player: createBattleCompany(playerCompany),
    enemy: createBattleCompany(enemyCompany),
    turn: 1,
    logs: [],
  };

  while (!getBattleResult(battle)) {
    const order = determineTurnOrder(battle.player, battle.enemy);

    processStatuses(order.first);

    if (getBattleResult(battle)) {
      break;
    }

    processStatuses(order.second);

    if (getBattleResult(battle)) {
      break;
    }

    const firstMove = chooseMove(order.first.company);

    battle.logs.push(
      executeMove({
        battle,
        attacker: order.first,
        defender: order.second,
        move: firstMove,
      }),
    );

    if (getBattleResult(battle)) {
      break;
    }

    const secondMove = chooseMove(order.second.company);

    battle.logs.push(
      executeMove({
        battle,
        attacker: order.second,
        defender: order.first,
        move: secondMove,
      }),
    );

    if (getBattleResult(battle)) {
      break;
    }

    battle.turn++;
  }

  return battle;
}