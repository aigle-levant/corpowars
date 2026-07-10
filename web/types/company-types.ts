export interface Company {
  id: string;
  name: string;
  ticker: string;
  description: string;
  sector: string;
  passive: string;
  tags: string[];
  stats: {
    capital: number;
    innovation: number;
    influence: number;
    trust: number;
    marketShare: number;
    resilience: number;
    execution: number;
  };
}
