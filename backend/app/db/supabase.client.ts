import { createClient } from "@supabase/supabase-js";
import { env } from "../config.js";

/**
 * Shared Supabase client instance for database access.
 *
 * Uses the service role key so backend operations can securely access
 * Supabase resources without exposing credentials to clients.
 */
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY);
