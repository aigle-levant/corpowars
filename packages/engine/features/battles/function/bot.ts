import type { Move } from "../../moves/types/moves";
import { Company } from "../../../types/company";

export function chooseMove(company: Company): Move {
  if (!company.moves || company.moves.length === 0) {
    throw new Error(`${company.name} has no available moves.`);
  }

  const index = Math.floor(Math.random() * company.moves.length);

  return company.moves[index];
}
