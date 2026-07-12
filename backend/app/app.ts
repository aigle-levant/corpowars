import Fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes/routes.index.js";
import { registerSwagger } from "./plugins/swagger.js";
import { supabase } from "./db/supabase.client.js";

export const app = Fastify({ logger: true });

await app.register(cors, {
  origin: "http://localhost:3000",
  credentials: true,
});
await registerSwagger(app);

app.decorateRequest("user");
app.register(registerRoutes);

app.decorate("supabase", supabase);
