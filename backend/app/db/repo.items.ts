import { supabase } from "./supabase.client.js";

export async function findAll() {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function findById(id: string) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function search(query: string) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .or(`name.ilike.%${query}%,category.ilike.%${query}%`)
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}
