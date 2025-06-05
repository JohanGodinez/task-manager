import { z } from 'zod';

export const IPanel = z.object({
  id: z.number(),
  description: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type IPanel = z.infer<typeof IPanel>;
