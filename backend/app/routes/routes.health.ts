import type { FastifyInstance } from "fastify";

/**
 * Registers health check routes.
 *
 * @param app - Fastify server instance.
 */
export async function healthRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return {
      status: "ok",
    };
  });
}