import type { FastifyInstance } from "fastify";

import * as PlayerController from "../controllers/controller.player.js";
import { authMiddleware } from "../middleware/auth.js";

export async function playerRoutes(app: FastifyInstance) {
  app.addHook("preHandler", authMiddleware);

  app.get("/me", PlayerController.get);

  app.patch("/me", PlayerController.update);

  app.get("/companies", async () => ({
    message: "Not implemented",
  }));

  app.get("/team", async () => ({
    message: "Not implemented",
  }));

  app.put("/team", async () => ({
    message: "Not implemented",
  }));

  app.get("/history", async () => ({
    message: "Not implemented",
  }));

  app.get("/stats", async () => ({
    message: "Not implemented",
  }));
}
