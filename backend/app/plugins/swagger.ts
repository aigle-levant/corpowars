import type { FastifyInstance } from "fastify";

import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export async function registerSwagger(app: FastifyInstance) {
  await app.register(swagger, {
    openapi: {
      info: {
        title: "Corpowars API",
        description: "Backend API for Corpowars",
        version: "1.0.0",
      },

      servers: [
        {
          url: "http://localhost:8000",
        },
      ],

      tags: [
        { name: "Companies" },
        { name: "Items" },
        { name: "Teams" },
        { name: "Battles" },
        { name: "Players" },
      ],
    },
  });

  await app.register(swaggerUI, {
    routePrefix: "/docs",
  });
}
