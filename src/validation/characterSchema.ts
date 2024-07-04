import { z } from "zod";

export const characterSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name is required" })
      .max(49, { message: "Name must have less than 50 characters" }),
    nationality: z
      .string()
      .min(2, { message: "Nationality is required" })
      .max(49, { message: "Nationality must have less than 50 characters" }),
    biography: z
      .string()
      .min(10, { message: "Biography must be at least 10 characters long" })
      .max(999, { message: "Biography must have less than 1000 characters" }),
    birthDate: z.date({
      invalid_type_error: "",
      required_error: "Birth date is required",
    }),
    deathDate: z.date().optional(),
    occupation: z
      .string()
      .min(3, "Occupation is required")
      .max(49, { message: "Occupation must have less than 50 characters" }),
    imageUrl: z
      .string()
      .url({ message: "Invalid image URL" })
      .max(299, { message: "Image URL must have less than 300 characters" }),
  })
  .superRefine((data, ctx) => {
    if (
      data.deathDate &&
      data.birthDate &&
      new Date(data.deathDate) <= new Date(data.birthDate)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["deathDate"],
        message: "Death date must be after birth date",
      });
    }
  });
