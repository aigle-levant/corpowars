import * as PlayerRepository from "../db/repo.players.js";

export async function getProfile(userId: string) {
  const profile = await PlayerRepository.findById(userId);

  if (!profile) {
    throw new Error("Profile not found");
  }

  return profile;
}

export async function updateProfile(
  userId: string,
  data: {
    username?: string;
    avatar_url?: string;
  },
) {
  const profile = await PlayerRepository.updateById(userId, data);

  if (!profile) {
    throw new Error("Failed to update profile");
  }

  return profile;
}
