// imports
import { supabase } from "./supabase.client.js";

/**
 * Retrieve all teams belonging to a player.
 *
 * @param ownerId - Authenticated player's id.
 * @returns List of teams.
 * @throws If the Supabase query returns an error.
 */
export async function findAll(ownerId: string) {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("owner_id", ownerId)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Retrieve a team by its id.
 *
 * @param ownerId - Authenticated player's id.
 * @param teamId - Team id.
 * @returns Team record.
 * @throws If the Supabase query returns an error.
 */
export async function findById(ownerId: string, teamId: string) {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("owner_id", ownerId)
    .eq("id", teamId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Create a new team.
 *
 * @param ownerId - Authenticated player's id.
 * @param values - Team fields.
 * @returns Newly created team.
 * @throws If the Supabase query returns an error.
 */
export async function create(
  ownerId: string,
  values: {
    name: string;
  },
) {
  const { data, error } = await supabase
    .from("teams")
    .insert({
      owner_id: ownerId,
      ...values,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Update an existing team.
 *
 * @param ownerId - Authenticated player's id.
 * @param teamId - Team id.
 * @param values - Fields to update.
 * @returns Updated team.
 * @throws If the Supabase query returns an error.
 */
export async function updateById(
  ownerId: string,
  teamId: string,
  values: {
    name?: string;
  },
) {
  const { data, error } = await supabase
    .from("teams")
    .update({
      ...values,
      updated_at: new Date().toISOString(),
    })
    .eq("owner_id", ownerId)
    .eq("id", teamId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Delete a team.
 *
 * @param ownerId - Authenticated player's id.
 * @param teamId - Team id.
 * @throws If the Supabase query returns an error.
 */
export async function deleteById(ownerId: string, teamId: string) {
  const { error } = await supabase
    .from("teams")
    .delete()
    .eq("owner_id", ownerId)
    .eq("id", teamId);

  if (error) {
    throw error;
  }
}
