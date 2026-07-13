import * as TeamsRepository from "../db/repo.teams.js";

export async function findAll(userId: string) {
  return TeamsRepository.findAll(userId);
}

export async function findById(userId: string, teamId: string) {
  return TeamsRepository.findById(userId, teamId);
}

export async function create(
  userId: string,
  values: {
    name: string;
  },
) {
  return TeamsRepository.create(userId, values);
}

export async function update(
  userId: string,
  teamId: string,
  values: {
    name?: string;
  },
) {
  return TeamsRepository.update(userId, teamId, values);
}

export async function remove(userId: string, teamId: string) {
  return TeamsRepository.remove(userId, teamId);
}
