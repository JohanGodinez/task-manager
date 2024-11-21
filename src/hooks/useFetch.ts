import { useQuery } from '@tanstack/react-query';
import { IPanel, ITask, IUser } from '../models';
import api from '../services/api'

const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await api.get<IUser[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    throw error;
  }
};

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })
}

const getTasks = async (): Promise<ITask[]> => {
  try {
    const response = await api.get<ITask[]>("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error al obtener las tareas", error);
    throw error;
  }
};

export const useFetchTask = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  })
}


export const getPanel = async (): Promise<IPanel[]> => {
  try {
    const response = await api.get<IPanel[]>("/panels");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los panels", error);
    throw error;
  }
};


export const useFetchPanel = () => {
  return useQuery({
    queryKey: ["panels"],
    queryFn: getPanel,
  })
}