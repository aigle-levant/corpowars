// imports
import type { FastifyRequest } from "fastify";

/**
 * Ensure an authenticated user is present on the request.
 *
 * @param request - Fastify request object.
 * @returns The authenticated user payload.
 * @throws Error if authentication middleware did not populate `request.user`.
 */
export function requireUser(request: FastifyRequest) {
  if (!request.user) {
    throw new Error("Authentication middleware not applied.");
  }

  return request.user;
}