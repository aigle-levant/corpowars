
import type { TeamSlot, TeamBuilderState } from "../types/teams";

export const COPY = {
  title: "No Teams Yet",
  description:
    "Create your first company lineup and prepare for battle. You can save multiple teams and switch between them whenever you want.",
};

export const EMPTY_SLOT: TeamSlot = {
  company: null,
  item: null,
};

export const EMPTY_TEAM: TeamBuilderState = {
  name: "",
  slots: Array.from({ length: 4 }, () => ({
    ...EMPTY_SLOT,
  })),
};