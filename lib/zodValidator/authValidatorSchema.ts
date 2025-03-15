import { z } from "zod";

const emailSchema = z
  .string()
  .min(1, { message: "Email obligatoire" })
  .email({ message: "Format de L'email invalide" })
  .max(255)
  .trim();
const passwordSchema = z
  .string()
  .min(6, { message: "Le mot de passe doit avoir au moins 6 caractères" })
  .max(255)
  .trim();
const fullnameSchema = z
  .string()
  .min(3, {
    message: "Le nom de l'utilisateur doit avoir au moins 3 caractères",
  })
  .max(255, {
    message: "Le nom de l'utilisateur doit avoir au maximum 225 caractères",
  })
  .trim();

export const registerSchema = z.object({
  fullname: fullnameSchema,
  email: emailSchema,
  poste: z
    .string()
    .min(3, {
      message: "Veuillez choisir un poste dans la liste de proposition",
    })
    .max(255)
    .trim(),
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional(),
});

export const activationSchema = z.object({
  password: passwordSchema,
});
