import { Outlet, useNavigate } from "react-router-dom";

import { Navbar, Button } from "../components";
import { PanelGroup } from "../components";
import { useTasksStore } from "../store/taskStore";
import { useFetchTask } from '../hooks/useFetch'

export const Kanban = () => {
  const setTasks = useTasksStore((state) => state.setTasks);
  const { data: tasks, error, isLoading } = useFetchTask()
  const navigate = useNavigate();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  if (!isLoading && tasks) setTasks(tasks);

  return (
    <>
      <div className="flex">
        <div className="flex-col w-full h-screen py-4">
          <Navbar />
          <div className="w-40 p-4">
            <Button text="Agregar" onClick={() => navigate('/kanban/create')} />
          </div>
          <PanelGroup />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Kanban;
