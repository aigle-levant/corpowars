export interface Company {
  id: string;

  name: string;

  revenue: number;

  attack: number;

  defense: number;

  moves: Move[];
}

export interface Move {
  id: string;

  name: string;

  damage: number;
}

export interface Battle {
  player1: Company;

  player2: Company;

  turn: number;
}