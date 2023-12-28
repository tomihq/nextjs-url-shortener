import { z } from "zod";

export const createShortUrlFormSchema = z.object({
    url: z.string().url({message: "Please, enter a valid URL."}),
  })