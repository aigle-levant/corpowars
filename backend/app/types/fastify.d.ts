import "fastify";

/**
 * Application-wide Fastify type augmentation.
 *
 * Adds the optional `user` property to request objects after authentication.
 */
declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: string;
      email: string;
    };
  }
}
