import { CompanyId, PlayerId } from "./core";
import { Company } from "./company";

export interface Player {
  id: PlayerId;

  username: string;

  activeCompany: CompanyId;

  companies: Company[];

  resources: PlayerResources;
}

export interface PlayerResources {
  capital: number;

  influence: number;

  reputation: number;
}