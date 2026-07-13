/*
what does this do: this is a generic HTTP helper.

Use it like this [example]:
return api<Company[]>("/companies");
*/

// imports
import { createClient } from "./client";
import { BASE_URL } from "@/constants/config";

export async function api<T>(
  endpoint: string,
  init: RequestInit = {},
): Promise<T> {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const headers = new Headers(init.headers);

  headers.set("Content-Type", "application/json");

  if (session?.access_token) {
    headers.set("Authorization", `Bearer ${session.access_token}`);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    let message = "Something went wrong";

    try {
      const error = await response.json();
      message = error.error ?? message;
    } catch {
      message = await response.text();
    }

    throw new Error(message);
  }

  return response.json() as Promise<T>;
}
