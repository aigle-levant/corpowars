import type { FastifyInstance, FastifyRequest } from "fastify";

import * as TeamsService from "../services/services.teams.js";

import { authMiddleware } from "../middleware/auth.js";

import type { SaveTeamInput } from "../types/teams.types.js";

interface TeamParams {
  id: string;
}

export async function teamRoutes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  /**
   * Get all teams belonging to the authenticated user.
   */
  app.get("/", async (request, reply) => {
    const teams = await TeamsService.findAll(request.user!.id);

    return reply.send(teams);
  });

  /**
   * Get a single team.
   */
  app.get(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: TeamParams;
      }>,
      reply,
    ) => {
      const team = await TeamsService.findById(
        request.user!.id,
        request.params.id,
      );

      if (!team) {
        return reply.status(404).send({
          error: "Team not found",
        });
      }

      return reply.send(team);
    },
  );

  /**
   * Create a new team.
   */
  app.post(
    "/",
    async (
      request: FastifyRequest<{
        Body: SaveTeamInput;
      }>,
      reply,
    ) => {
      const team = await TeamsService.create(request.user!.id, request.body);

      return reply.status(201).send(team);
    },
  );

  /**
   * Update an existing team.
   */
  app.patch(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: TeamParams;
        Body: SaveTeamInput;
      }>,
      reply,
    ) => {
      const team = await TeamsService.update(
        request.user!.id,
        request.params.id,
        request.body,
      );

      if (!team) {
        return reply.status(404).send({
          error: "Team not found",
        });
      }

      return reply.send(team);
    },
  );

  /**
   * Delete a team.
   */
  app.delete(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: TeamParams;
      }>,
      reply,
    ) => {
      await TeamsService.remove(request.user!.id, request.params.id);

      return reply.status(204).send();
    },
  );
}
