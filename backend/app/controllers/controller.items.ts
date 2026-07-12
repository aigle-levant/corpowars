import type { FastifyReply, FastifyRequest } from "fastify";

import * as ItemService from "../services/services.items.js";

export async function getAll(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const items = await ItemService.findAll();

  return reply.send(items);
}

export async function getById(
  request: FastifyRequest<{
    Params: {
      id: string;
    };
  }>,
  reply: FastifyReply,
) {
  const item = await ItemService.findById(request.params.id);

  if (!item) {
    return reply.status(404).send({
      error: "Item not found",
    });
  }

  return reply.send(item);
}

export async function search(
  request: FastifyRequest<{
    Querystring: {
      q?: string;
    };
  }>,
  reply: FastifyReply,
) {
  const items = await ItemService.search(request.query.q ?? "");

  return reply.send(items);
}
