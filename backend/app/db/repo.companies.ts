

import { supabase } from "./supabase.client.js";

export async function findAllCompanies() {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function findCompanyById(id: string) {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function searchCompanies(query: string) {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .or(`name.ilike.%${query}%,ticker.ilike.%${query}%,sector.ilike.%${query}%`)
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}
