import { useTasksStore } from "../../store/taskStore";
import { Card } from "./Card";

interface Props {
  title: string;
}

export const Panel: React.FC<Props> = ({ title }) => {
  const tasks = useTasksStore((store) => store.tasks);

  return (
    <div className="bg-gray-700 h-auto rounded-lg min-w-[450px] w-[450px]">
      <p className="text-gray-300 font-oswald font-bold  text-center text-xl py-4">
        {title}
      </p>
      <div className="flex-col p-2">
        {tasks
          .filter((task) => task.status.description == title)
          .map((task) => (
            <Card key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};
