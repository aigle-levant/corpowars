import { z } from "zod";

export const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(128),
  username: z.string().trim().min(3).max(30),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type Signup = z.infer<typeof signupSchema>;
export type Login = z.infer<typeof loginSchema>;