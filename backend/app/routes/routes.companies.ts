import type { FastifyInstance } from "fastify";

import * as CompanyController from "../controllers/controller.companies.js";

export async function companyRoutes(app: FastifyInstance) {
  app.get("/", CompanyController.getAll);

  app.get("/search", CompanyController.search);

  app.get("/:id", CompanyController.getById);
}
