import { z } from "zod";

export const UpdateUserSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "Le nom de l'utilisateur doit avoir au moins 3 caractères",
    })
    .max(255, {
      message: "Le nom de l'utilisateur doit avoir au maximum 225 caractères",
    })
    .trim(),
  poste: z
    .string()
    .min(3, {
      message: "Veuillez choisir un poste dans la liste de proposition",
    })
    .max(255, {
      message: "Le poste doit avoir au maximum 225 caractères",
    })
    .trim(),
  role: z
    .string()
    .min(3, {
      message: "Veuillez choisir un role dans la liste de proposition",
    })
    .max(255, {
      message: "Le role doit avoir au maximum 225 caractères",
    })
    .trim(),
  userId: z.string(),
});
