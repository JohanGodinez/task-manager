import { useQuery } from "@tanstack/react-query";

import { Sidebar, Navbar } from "../../components";
import { PanelGroup } from "./components";
import { getTasks } from "../../services";

export const Kanban = () => {
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

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-col w-full h-auto">
          <Navbar />
          <PanelGroup tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Kanban;
