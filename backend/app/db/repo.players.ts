// imports
import { supabase } from "./supabase.client.js";

/**
 * Retrieve a player profile by its id.
 *
 * @param userId - The profile id to search for.
 * @returns The profile record from the `profiles` table.
 * @throws If the Supabase query returns an error.
 */
export async function findById(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Update a player profile by its id.
 *
 * @param userId - The profile id to update.
 * @param values - The fields to update on the profile.
 * @returns The updated profile record.
 * @throws If the Supabase query returns an error.
 */
export async function updateById(
  userId: string,
  values: {
    username?: string;
    avatar_url?: string;
  },
) {
  const { data, error } = await supabase
    .from("profiles")
    .update(values)
    .eq("id", userId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
