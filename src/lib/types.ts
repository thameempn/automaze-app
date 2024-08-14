import { z } from "zod";

/**
 * Schema for user profile form
 */
export const EditUserProfielSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});
