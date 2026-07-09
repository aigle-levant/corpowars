// imports
import type { FastifyReply, FastifyRequest } from "fastify";
import { supabase } from "../db/supabase.client.js";

/**
 * Fastify middleware that validates the Bearer token and attaches
 * the authenticated user to the request object.
 *
 * @param request - Incoming Fastify request.
 * @param reply - Fastify reply object.
 * @returns Sends 401 if authentication fails.
 */
export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.code(401).send({
      error: "Missing authorization header",
    });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return reply.code(401).send({
      error: "Invalid authorization header",
    });
  }

  const token = authHeader.substring(7);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return reply.code(401).send({
      error: "Unauthorized",
    });
  }

  request.user = {
    id: user.id,
    email: user.email ?? "",
  };
}
