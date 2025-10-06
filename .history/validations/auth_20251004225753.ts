import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});




export type RegisterSchema = z.infer<typeof registerSchema>;

export type ValidationErrors =
  | {
      [key: string]: string[];
    }
  | undefined;
