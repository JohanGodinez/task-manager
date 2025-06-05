import { IPanel } from "../models";
import { supabase } from "./api";


export const getPanels = async (): Promise<IPanel[]> => {
  const { data, error } = await supabase.from("panels").select("*");
  if (error) {
    console.error("Error al obtener los paneles", error);
    throw new Error(error.message);
  }
  return data as IPanel[];
};