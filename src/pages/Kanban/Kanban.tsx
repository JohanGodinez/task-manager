import { useQuery } from "@tanstack/react-query";

import { Sidebar, Navbar } from "../../components";
import { PanelGroup } from "./components";
import { getTasks } from "../../services";
import { useTasksStore } from "../../store/taskStore";

export const Kanban = () => {
  const setTasks = useTasksStore((state) => state.setTasks);
  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  if (!isLoading && tasks) setTasks(tasks);

  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex-col w-full h-screen py-4">
          <Navbar />
          <PanelGroup />
        </div>
      </div>
    </>
  );
};

export default Kanban;
