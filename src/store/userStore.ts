import { create } from "zustand";
import { IUser } from "../models";

type State = {
  users: IUser[]
}

type Actions = {
  setUsers: (value: IUser[]) => void;
}

export const useUserStore =  create<State & Actions>((set) => ({
  users: [],
  setUsers: (value: IUser[]) => set(() => ({
    users: value
  })),
}));
