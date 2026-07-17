export const queryKeys = {
  companies: ["companies"] as const,
  items: ["items"] as const,
  profile: ["profile"] as const,
  teams: ["teams"] as const,
  battles: ["battles"] as const,
  team: (id: string) => ["teams", id] as const,
};
