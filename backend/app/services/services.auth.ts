import type { Signup, Login } from "../types/auth.types.js";
import { supabase } from "../db/supabase.client.js";

export async function signup(signupData: Signup) {
    const {data,error} = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
            data: {
                username: signupData.username
            }
        }
    })
    if (error) {
        throw error;
    }
    return data;
}

export async function login(loginData: Login) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginData.email,
    password: loginData.password
  });
  if (error) {
    throw error;
  }
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  return {
    message: "Logged out"
  }
}

