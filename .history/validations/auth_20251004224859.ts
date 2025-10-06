import * as z from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


export const signUpSchema = (translations: Translations) => {
  return z
    .object({
      name: z
        .string()
        .trim()
        .min(1, { message: translations.validation.nameRequired }),
      email: z.string().trim().email({
        message: translations.validation.validEmail,
      }),
      password: z
        .string()
        .min(6, { message: translations.validation.passwordMinLength })
        .max(40, { message: translations.validation.passwordMaxLength }),
      confirmPassword: z
        .string()
        .min(6, { message: translations.validation.confirmPasswordRequired }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: translations.validation.passwordMismatch,
      path: ["confirmPassword"],
    });
};

export type ValidationErrors =
  | {
      [key: string]: string[];
    }
  | undefined;
