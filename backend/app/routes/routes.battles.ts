import type { FastifyInstance, FastifyRequest } from "fastify";

import * as BattlesService from "../services/services.battles.js";

import { authMiddleware } from "../middleware/auth.js";
import type { BattleRequest } from "../types/battles.types.js";

export async function battleRoutes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  app.post(
    "/",
    async (
      request: FastifyRequest<{
        Body: BattleRequest;
      }>,
      reply,
    ) => {
      const { playerCompanyId, enemyCompanyId } = request.body;

      if (!playerCompanyId || !enemyCompanyId) {
        return reply.status(400).send({
          error: "playerCompanyId and enemyCompanyId are required.",
        });
      }

      try {
        const battle = await BattlesService.simulate(
          request.user!.id,
          playerCompanyId,
          enemyCompanyId,
        );

        return reply.send(battle);
      } catch (error) {
        request.log.error(error);

        return reply.status(500).send({
          error: "Failed to simulate battle.",
        });
      }
    },
  );
}
