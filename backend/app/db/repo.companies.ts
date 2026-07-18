import { supabase } from "./supabase.client.js";

export async function findAll() {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function findById(id: string) {
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

export async function search(query: string) {
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
export async function movesFindById(id: string) {
  const { data, error } = await supabase
    .from("companies")
    .select(
      `
      *,
      company_moves (
        slot,
        moves (*)
      )
    `,
    )
    .eq("id", id)
    .order("slot", {
      foreignTable: "company_moves",
      ascending: true,
    })
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const { company_moves, ...company } = data;

  return {
    ...company,
    moves: company_moves.map((cm: { moves: unknown }) => cm.moves),
  };
}