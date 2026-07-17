export interface TeamMemberDto {
  position: number;

  companyId: string;

  itemId: string | null;
}

export interface UpdateTeamDto {
  name: string;

  members: TeamMemberDto[];
}
