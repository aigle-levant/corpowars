import type { FastifyInstance } from "fastify";

import * as ItemController from "../controllers/controller.items.js";

export async function itemRoutes(app: FastifyInstance) {
  app.get("/", ItemController.getAll);

  app.get("/search", ItemController.search);

  app.get("/:id", ItemController.getById);
}
