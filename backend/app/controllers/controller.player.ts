import type { FastifyReply, FastifyRequest } from "fastify";

import * as PlayerService from "../services/services.player.js";
import { requireUser } from "../utils/requireUser.js";

export async function get(request: FastifyRequest, reply: FastifyReply) {
  try {
    const user = requireUser(request);

    const profile = await PlayerService.getProfile(user.id);

    return reply.code(200).send(profile);
  } catch (error) {
    request.log.error(error);

    return reply.code(500).send({
      error: "Internal Server Error",
    });
  }
}

export async function update(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const user = requireUser(request);

    const profile = await PlayerService.updateProfile(
      user.id,
      request.body as {
        username?: string;
        avatar_url?: string;
      },
    );

    return reply.code(200).send(profile);
  } catch (error) {
    request.log.error(error);

    return reply.code(500).send({
      error: "Internal Server Error",
    });
  }
}
