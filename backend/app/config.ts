// so that ts won't scream at me for missing types
import * as z from "zod";

// .env
const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);