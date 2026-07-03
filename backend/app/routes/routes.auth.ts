import type { FastifyInstance } from "fastify";
import { signupSchema, loginSchema } from "../types/auth.types.js";
import { signup, login, logout } from "../services/services.auth.js";

export async function authRoutes(app: FastifyInstance) {
  app.post("/signup", async (request, response) => {
    const signupData = signupSchema.parse(request.body);
    const res = await signup(signupData);
    return response.send(res);
  });
  app.post("/login", async (request, response) => {
    const loginData = loginSchema.parse(request.body);
    const res = await login(loginData);
    return response.send(res);
  });
  app.post("/logout", async (request, response) => {
    const res = await logout();
    return response.send(res);
  });
}