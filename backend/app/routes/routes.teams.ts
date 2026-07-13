import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import * as TeamsService from "../services/services.teams.js";
import { authMiddleware } from "../middleware/auth.js";

export async function teamRoutes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  app.get("/", async (request, reply) => {
    const teams = await TeamsService.findAll(request.user!.id);

    return reply.send(teams);
  });

  app.get(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: {
          id: string;
        };
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

  app.post("/", async (request, reply) => {
    const team = await TeamsService.create(
      request.user!.id,
      request.body as {
        name: string;
      },
    );

    return reply.status(201).send(team);
  });

  app.patch(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: {
          id: string;
        };
      }>,
      reply,
    ) => {
      const team = await TeamsService.update(
        request.user!.id,
        request.params.id,
        request.body as {
          name?: string;
        },
      );

      if (!team) {
        return reply.status(404).send({
          error: "Team not found",
        });
      }

      return reply.send(team);
    },
  );

  app.delete(
    "/:id",
    async (
      request: FastifyRequest<{
        Params: {
          id: string;
        };
      }>,
      reply,
    ) => {
      await TeamsService.remove(request.user!.id, request.params.id);

      return reply.status(204).send();
    },
  );
}
