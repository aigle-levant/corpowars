import * as TeamsRepository from "../db/repo.teams.js";

import type { SaveTeamInput } from "../db/repo.teams.js";

/**
 * Retrieve all teams belonging to a player.
 */
export async function findAll(userId: string) {
  return TeamsRepository.findAll(userId);
}

/**
 * Retrieve a team by its id.
 */
export async function findById(userId: string, teamId: string) {
  return TeamsRepository.findById(userId, teamId);
}

/**
 * Create a new team.
 */
export async function create(userId: string, values: SaveTeamInput) {
  return TeamsRepository.create(userId, values);
}

/**
 * Update an existing team.
 */
export async function update(
  userId: string,
  teamId: string,
  values: SaveTeamInput,
) {
  return TeamsRepository.updateById(userId, teamId, values);
}

/**
 * Delete a team.
 */
export async function remove(userId: string, teamId: string) {
  return TeamsRepository.deleteById(userId, teamId);
}
