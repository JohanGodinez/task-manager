import { z } from 'zod';
import { IUser } from './user.model';

export const ITask = z.object({
  id: z.number(),
  linkbitrix: z.string().optional(),
  nobitrix: z.string().optional(),
  status: z.number(),
  title: z.string(),
  project: z.string(),
  description: z
    .string()
    .min(20, 'La descripcion de la tarea debe de ser de minimo 20 caracteres'),
  user: IUser,
  startDate: z.date(),
  endDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ITask = z.infer<typeof ITask>;
