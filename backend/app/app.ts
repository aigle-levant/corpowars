import Fastify from "fastify";
import { registerRoutes } from "./routes/routes.index.js";
import { supabase } from "./db/supabase.client.js";

export const app = Fastify({ logger: true });

app.decorateRequest("user");
app.register(registerRoutes);

app.decorate("supabase", supabase);
