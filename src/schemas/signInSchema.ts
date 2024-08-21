import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Must be 8 character length")
    .max(15, "Must be at most 15 character"),
});
