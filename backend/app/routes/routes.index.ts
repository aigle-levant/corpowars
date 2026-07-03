import type { FastifyInstance } from "fastify";
import { healthRoutes } from "./routes.health.js";
import { authRoutes } from "./routes.auth.js";

export async function registerRoutes(app: FastifyInstance) {
  app.register(healthRoutes, {
    prefix: "/health",
  }),
  app.register(authRoutes, {
    prefix: "/auth",
  })
}
