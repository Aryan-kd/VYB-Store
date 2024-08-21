import {
  username_validator,
  email_validator,
  password_validator,
} from "@/constants/regex_constants";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(5, "Username must be atleast 5 characters")
  .max(20, "At max 20 characters only")
  .regex(username_validator, "Must not contain special character");

export const emailValidation = z
  .string()
  .email({ message: "Must be a email" })
  .regex(email_validator, "Must be a valid email address");

export const passwordValidation = z
  .string()
  .min(8, "Must minimum of 8 character")
  .max(15, "Must be Maximum of 15 character")
  .regex(password_validator);

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  isCreator: z.boolean(),
});
