import { z } from "zod";

export const clientSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Le nom du client doit avoir au moins 3 caractères" })
    .max(255)
    .trim()
    .toUpperCase(),
  contact: z.string().max(255).trim().optional(),
  email: z.string().max(255).trim().optional(),
  address: z.string().max(255).trim().optional(),
  type: z
    .string()
    .min(3, {
      message: "Veuillez choisir un type dans la liste de proposition",
    })
    .max(255)
    .trim(),
  description: z.string().max(255).trim().optional(),
});
