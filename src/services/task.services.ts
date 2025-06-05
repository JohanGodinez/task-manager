import { ITask, IUser } from '../models';
import { supabase } from './api';

export const getTasks = async (): Promise<(ITask & { user: IUser })[]> => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*, user:users(id, name, lastname, avatar, username)');
  if (error) {
    console.error('Error al obtener las tareas', error);
    throw new Error(error.message);
  }
  return data as (ITask & { user: IUser })[];
};
