import { Company } from "@/types/company-types";
import { Item } from "@/types/item-types";

// export interface TeamSlot {
//   company: Company | null;
//   item: Item | null;
// }

// export interface TeamBuilderState {
//   id?: string;

//   name: string;

//   slots: TeamSlot[];
// }

// export type Action =
//   | {
//       type: "SET_TEAM";
//       payload: TeamBuilderState;
//     }
//   | {
//       type: "UPDATE_NAME";
//       payload: string;
//     }
//   | {
//       type: "UPDATE_COMPANY";
//       payload: {
//         index: number;
//         company: Company;
//       };
//     }
//   | {
//       type: "UPDATE_ITEM";
//       payload: {
//         index: number;
//         item: Item;
//       };
//     }
//   | {
//       type: "CLEAR_SLOT";
//       payload: number;
//     }
//   | {
//       type: "RESET";
//       payload: TeamBuilderState;
//     };

// export interface CreateTeamDto {
//   name: string;
// }

// export interface UpdateTeamDto {
//   name?: string;
// }
export interface TeamSlot {
  company: Company | null;
  item: Item | null;
}

export interface TeamBuilderState {
  name: string;
  slots: TeamSlot[];
}

export type Action =
  | {
      type: "SET_TEAM";
      payload: TeamBuilderState;
    }
  | {
      type: "UPDATE_NAME";
      payload: string;
    }
  | {
      type: "UPDATE_COMPANY";
      payload: {
        index: number;
        company: Company;
      };
    }
  | {
      type: "UPDATE_ITEM";
      payload: {
        index: number;
        item: Item;
      };
    }
  | {
      type: "CLEAR_SLOT";
      payload: number;
    }
  | {
      type: "RESET";
      payload: TeamBuilderState;
    };

export interface TeamMemberInput {
  position: number;
  companyId: string;
  itemId: string | null;
}

export interface CreateTeamDto {
  name: string;
  members: TeamMemberInput[];
}

export interface UpdateTeamDto {
  name: string;
  members: TeamMemberInput[];
}