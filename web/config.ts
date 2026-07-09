/*
what does this file do: store all
*/

// url
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

// supabase related
export const SUPABASE = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
};