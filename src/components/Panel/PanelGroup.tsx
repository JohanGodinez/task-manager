import { Panel } from "./Panel";
import { useFetchPanel, useFetchTask } from "../../hooks/useFetch";

export const PanelGroup = () => {
  const {data: panels, isLoading: loadingPanels} = useFetchPanel()
  const {data: tasks, isLoading: loadingTasks} = useFetchTask()

  if (loadingPanels || loadingTasks) return <div>Cargando...</div>;
  if (!panels || !tasks) return <div>Error cargando datos</div>;

  return (
    <div className="flex overflow-x-auto w-full gap-6 p-4 scroll-smooth">
      {
        panels.map(panel => {
          const panelTasks = tasks.filter(task => task.status === panel.id)
          return (
            <Panel key={panel.id} title={panel.description} tasks={panelTasks}></Panel>
          )
        })
      }
    </div>
  );
};
