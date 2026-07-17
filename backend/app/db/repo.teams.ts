// imports
import { supabase } from "./supabase.client.js";

// types
export interface TeamMemberInput {
  position: number;
  companyId: string;
  itemId: string | null;
}

export interface SaveTeamInput {
  name: string;
  members: TeamMemberInput[];
}

/**
 * Retrieve all teams belonging to a player.
 *
 * Returns lightweight team summaries for the team list.
 */
export async function findAll(ownerId: string) {
  const { data, error } = await supabase
    .from("teams")
    .select("id, name, updated_at")
    .eq("owner_id", ownerId)
    .order("updated_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Retrieve a team together with all of its members,
 * companies and equipped items.
 */
export async function findById(ownerId: string, teamId: string) {
  const { data, error } = await supabase
    .from("teams")
    .select(
      `
      id,
      name,
      created_at,
      updated_at,

      members:team_members(
        position,

        company:companies(*),

        item:items(*)
      )
    `,
    )
    .eq("owner_id", ownerId)
    .eq("id", teamId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Create a new team together with its members.
 */
export async function create(ownerId: string, values: SaveTeamInput) {
  const { data: team, error } = await supabase
    .from("teams")
    .insert({
      owner_id: ownerId,
      name: values.name,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  if (values.members.length > 0) {
    const { error: membersError } = await supabase.from("team_members").insert(
      values.members.map((member) => ({
        team_id: team.id,

        position: member.position,

        company_id: member.companyId,

        item_id: member.itemId,
      })),
    );

    if (membersError) {
      throw membersError;
    }
  }

  return findById(ownerId, team.id);
}

/**
 * Update an existing team.
 */
export async function updateById(
  ownerId: string,
  teamId: string,
  values: SaveTeamInput,
) {
  const { error } = await supabase
    .from("teams")
    .update({
      name: values.name,

      updated_at: new Date().toISOString(),
    })
    .eq("owner_id", ownerId)
    .eq("id", teamId);

  if (error) {
    throw error;
  }

  const { error: deleteError } = await supabase
    .from("team_members")
    .delete()
    .eq("team_id", teamId);

  if (deleteError) {
    throw deleteError;
  }

  if (values.members.length > 0) {
    const { error: insertError } = await supabase.from("team_members").insert(
      values.members.map((member) => ({
        team_id: teamId,

        position: member.position,

        company_id: member.companyId,

        item_id: member.itemId,
      })),
    );

    if (insertError) {
      throw insertError;
    }
  }

  return findById(ownerId, teamId);
}

/**
 * Delete a team.
 *
 * team_members are removed automatically via
 * ON DELETE CASCADE.
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
