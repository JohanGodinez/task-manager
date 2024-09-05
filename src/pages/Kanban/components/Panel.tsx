import { Card } from "./Card";

interface Props {
  title: string;
  tasks?: ITask[];
}

export const Panel: React.FC<Props> = ({ tasks, title }) => {
  return (
    <div className="bg-gray-700 h-auto rounded-lg min-w-96">
      <p className="text-gray-300 font-oswald font-bold  text-center text-xl py-4">
        {title}
      </p>
      <div className="flex-col p-2">
        {tasks && tasks.map((task, i) => {
          return <Card key={i} task={task} />;
        })}
      </div>
    </div>
  );
};
