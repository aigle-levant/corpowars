import type { TeamSlot } from "@/features/team-builder/types/teams";

export type BuilderStep = "company" | "items" | "review";

export type BuilderMode = "building" | "editing";

export interface BuilderState {
  team: TeamSlot[];
  selectedSlot: number;
  step: BuilderStep;
  mode: BuilderMode;
}
