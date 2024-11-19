import { z } from "zod";
export const BodyInfoSchema = z.object({
  gender: z.string().min(1, { message: "gender is required" }),
  dateOfBirth: z.object({
    day: z.string().min(1, { message: "Day is required" }),
    month: z.string().min(1, { message: "Month is required" }),
    year: z.string().min(1, { message: "Year is required" }),
  }),
  heightFt: z.string().min(1, { message: "height is required" }),
  heightIn: z.string().min(1, { message: "height is required" }),
  weight: z.coerce.number().min(1, { message: "weight is required" }),
});

export type BodyInfoData = z.infer<typeof BodyInfoSchema>;
