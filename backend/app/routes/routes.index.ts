import type { FastifyInstance } from "fastify";
import { healthRoutes } from "./routes.health.js";
import { companyRoutes } from "./routes.companies.js";
import { itemRoutes } from "./routes.items.js";
import { teamRoutes } from "./routes.teams.js";

/**
 * Register all application routes with the Fastify instance.
 *
 * @param app - Fastify server instance.
 */
export async function registerRoutes(app: FastifyInstance) {
  app.register(healthRoutes, {
    prefix: "/health",
  });
  app.register(companyRoutes, {
    prefix: "/companies",
  });
  app.register(itemRoutes, {
    prefix: "/items",
  });
  app.register(teamRoutes, {
    prefix: "/teams",
  });
}
