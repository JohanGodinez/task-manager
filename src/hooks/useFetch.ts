import { useQuery } from "@tanstack/react-query";
import { getPanels, getTasks, getUsers } from "../services";

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useFetchTask = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useFetchPanel = () => {
  return useQuery({
    queryKey: ["panels"],
    queryFn: getPanels,
  });
};
