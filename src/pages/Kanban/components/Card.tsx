import { useState } from "react";
import {Modal} from "../../../components";

interface Props {
  task: ITask
}

export const Card: React.FC<Props> = ({task}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { title, description, user } = task;
  const { name, lastname, avatar } = user;
  const handleOpen = () => {
    setModalOpen(true)
  }

  return (
    <div onClick={handleOpen} className="w-full bg-gray-800 px-4 py-2 mb-4 border border-gray-400 rounded-md hover:bg-gray-700 hover:border-gray-500 cursor-pointer transition-all ease-in shadow-md">
      <div className="flex-col">
        <h1 className="font-oswald text-xl text-gray-300 py-4">{title}</h1>
        <p className="font-lato text-md text-gray-400">{description}</p>
        <div className="flex justify-end items-center gap-4 py-4">
          <p className="text-gray-400">
            {name} {lastname}
          </p>
          <figure>
            <img
              className="inline-block w-6 h-6 rounded-full ring-1 ring-gray-400"
              src={avatar}
              alt="avatar"
            />
          </figure>
        </div>
      </div>
      <Modal title={title} isOpen={isModalOpen} />
    </div>
  );
};
