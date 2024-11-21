import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ITask } from "../models";

interface TaskState {
  tasks: ITask[];
  setTasks: (value: ITask[]) => void;
}

export const useTasksStore = create(persist<TaskState>((set) => ({
  tasks: [],
  setTasks: (value: ITask[]) => set(() => ({
    tasks: value
  }))
}), {
  name: 'tasks'
}));
