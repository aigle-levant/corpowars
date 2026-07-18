import { Move } from "../features/moves/types/moves";

export interface CompanyStats {
  capital: number;
  innovation: number;
  influence: number;
  trust: number;
  marketShare: number;
  resilience: number;
  execution: number;
}

export interface Company {
  id: string;

  name: string;
  ticker: string;

  description: string;

  sector: string;

  passive: string;

  tags: string[];

  stats: CompanyStats;

  moves: Move[];
}
