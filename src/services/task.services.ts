import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = async (): Promise<ITask[]> => {
  try {
    const response = await api.get<ITask[]>("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error al obtener las tareas", error);
    throw error;
  }
};
