import { z } from 'zod';

export const IUser = z.object({
  id: z.number(),
  name: z.string(),
  lastname: z.string(),
  avatar: z.string().optional(),
  username: z.string()
});

export type IUser = z.infer<typeof IUser>;
