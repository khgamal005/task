import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});



export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const verifySchema = z.object({
  code: z
    .string()
    .min(6, "Code must be 6 digits")
    .max(6, "Code must be 6 digits"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export type LoginSchema = z.infer<typeof loginSchema>;
export type VerifySchema = z.infer<typeof verifySchema>;



export type ValidationErrors =
  | {
      [key: string]: string[];
    }
  | undefined;
