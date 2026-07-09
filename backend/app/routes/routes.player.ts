/*
main route: /player

GET    /me              -> Current player profile
PATCH  /me              -> Update username/avatar/etc.

GET    /companies       -> All available companies

GET    /team            -> Current team
PUT    /team            -> Replace current team

GET    /history         -> Battle history
GET    /stats           -> Player statistics
*/

// imports
import type { FastifyInstance } from "fastify";
import { authMiddleware } from "../middleware/auth.js";
import { getPlayer, updatePlayer } from "../controllers/controller.player.js";

/**
 * Registers player-related routes and applies authentication middleware.
 *
 * @param app - Fastify server instance.
 */
export async function playerRoutes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  // Current player profile
  app.get("/me", getPlayer);

  // Update player profile
  app.patch("/me", updatePlayer);

  // Available companies
  app.get("/companies", async () => {
    return {
      message: "Not implemented",
    };
  });

  // Current team
  app.get("/team", async () => {
    return {
      message: "Not implemented",
    };
  });

  // Replace team
  app.put("/team", async () => {
    return {
      message: "Not implemented",
    };
  });

  // Battle history
  app.get("/history", async () => {
    return {
      message: "Not implemented",
    };
  });

  // Player statistics
  app.get("/stats", async () => {
    return {
      message: "Not implemented",
    };
  });
}
