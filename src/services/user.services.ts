import { IUser } from "../models";
import { supabase } from "./api";

export const getUsers = async (): Promise<IUser[]> => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error al obtener los usuarios", error);
    throw new Error(error.message);
  }
  return data as IUser[];
};