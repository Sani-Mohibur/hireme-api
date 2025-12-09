import { z } from "zod";

export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(10, "Description must be at least 10 chars"),
    companyName: z.string().min(2, "Company name is required"),
    location: z.string().min(2, "Location is required"),
    salary: z.number().min(0).optional(),
  }),
});
