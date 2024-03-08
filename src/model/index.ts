import { z } from "zod";

export enum Registration {
  LOGIN = "Don't have an account yet?",
  SIGN_UP = "Already have an account?",
}

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(4, { message: "Password should have at least 4 letters." }),
});

export type LoginFormReturnType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(6, { message: "Minimum 6 characters required." }),
});

export type RegisterFormReturnType = z.infer<typeof RegisterSchema>;
