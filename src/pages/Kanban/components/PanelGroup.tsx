import { Panel } from "./Panel";

interface Props {
  tasks?: ITask[];
}

export const PanelGroup: React.FC<Props> = ({ tasks }) => {
  console.log(tasks)
  return (
    <div className="flex w-full justify-around gap-4 px-4 md:overflow-x-auto">
      <Panel title="To Do" tasks={tasks && tasks.filter(task => task.status ===  1)}/>
      <Panel title="In Progress" tasks={tasks && tasks.filter(task => task.status ===  2)}/>
      <Panel title="Testing" tasks={tasks && tasks.filter(task => task.status ===  3)}/>
      <Panel title="Done" tasks={tasks && tasks.filter(task => task.status ===  4)}/>
    </div>
  );
};
