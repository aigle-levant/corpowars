import type { FastifyInstance } from "fastify";
import { healthRoutes } from "./routes.health.js";
import { companyRoutes } from "./routes.companies.js";

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
    prefix: "/company",
  });
}
