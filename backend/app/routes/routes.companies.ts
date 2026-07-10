import type { FastifyInstance } from "fastify";

import {
  getAllCompanies,
  getCompanyById,
  searchCompanies,
} from "../controllers/controller.companies.js";

export async function companyRoutes(app: FastifyInstance) {
  app.get("/", getAllCompanies);

  app.get("/search", searchCompanies);

  app.get("/:id", getCompanyById);
}
