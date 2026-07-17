export interface TeamMemberInput {
  /**
   * Team slot position.
   * Matches the database constraint (1–4).
   */
  position: number;

  /**
   * Selected company.
   */
  companyId: string;

  /**
   * Equipped item.
   * Null if no item is equipped.
   */
  itemId: string | null;
}

export interface SaveTeamInput {
  /**
   * Team name.
   */
  name: string;

  /**
   * Team composition.
   */
  members: TeamMemberInput[];
}
