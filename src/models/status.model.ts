import { z } from 'zod';

export const IStatus = z.object({
  id: z.number(),
  description: z.string(),
});

export type IStatus = z.infer<typeof IStatus>;
