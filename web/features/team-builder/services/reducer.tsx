import { EMPTY_SLOT } from "../constants/const";

import type { TeamBuilderState, Action } from "../types/teams";

export function teamBuilderReducer(
  state: TeamBuilderState,
  action: Action,
): TeamBuilderState {
  switch (action.type) {
    case "SET_TEAM":
      return action.payload;

    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "UPDATE_COMPANY": {
      const slots = [...state.slots];

      slots[action.payload.index] = {
        ...slots[action.payload.index],
        company: action.payload.company,
      };

      return {
        ...state,
        slots,
      };
    }

    case "UPDATE_ITEM": {
      const slots = [...state.slots];

      slots[action.payload.index] = {
        ...slots[action.payload.index],
        item: action.payload.item,
      };

      return {
        ...state,
        slots,
      };
    }

    case "CLEAR_SLOT": {
      const slots = [...state.slots];

      slots[action.payload] = { ...EMPTY_SLOT };

      return {
        ...state,
        slots,
      };
    }

    case "RESET":
      return action.payload;

    default:
      return state;
  }
}
