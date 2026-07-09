// imports
import { findById, updateById } from "../db/repo.players.js";

/**
 * Retrieve a player profile by user id.
 *
 * @param userId - The authenticated user's profile id.
 * @returns The profile record.
 * @throws Error if the profile is not found.
 */
export async function getProfile(userId: string) {
  const profile = await findById(userId);

  if (!profile) {
    throw new Error("Profile not found");
  }

  return profile;
}

/**
 * Update a player profile by user id.
 *
 * @param userId - The authenticated user's profile id.
 * @param data - Fields to update on the profile.
 * @returns The updated profile record.
 * @throws Error if the profile could not be updated.
 */
export async function updateProfile(
  userId: string,
  data: {
    username?: string;
    avatar_url?: string;
  },
) {
  const profile = await updateById(userId, data);

  if (!profile) {
    throw new Error("Failed to update profile");
  }

  return profile;
}
