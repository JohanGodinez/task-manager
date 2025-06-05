import { ITask } from "../../models";
import { Card } from "./Card";

interface Props {
  title: string;
  tasks: ITask[] | []
}

export const Panel: React.FC<Props> = ({ title, tasks }) => {
  return (
    <div className="bg-gray-700 h-auto rounded-lg min-w-[450px] w-[450px]">
      <p className="text-gray-300 font-oswald font-bold  text-center text-xl py-4">
        {title}
      </p>
      <div className="flex-col p-2">
        {tasks
          .map((task) => (
            <Card key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};
