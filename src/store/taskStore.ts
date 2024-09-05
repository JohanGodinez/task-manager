import { create } from "zustand";

interface TaskState {
  tasks: ITask[];
  setTasks: (value: ITask[]) => void;
}

export const useTasksStore =  create<TaskState>((set) => ({
  tasks: [],
  setTasks: (value: ITask[]) => set(() => ({
    tasks: value
  }))
}));
