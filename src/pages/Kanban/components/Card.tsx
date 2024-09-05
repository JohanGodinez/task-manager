import { useState } from "react";
import { Modal } from "../../../components";

interface Props {
  task: ITask;
}

export const Card: React.FC<Props> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { title, description, user, linkbitrix, nobitrix } = task;
  const { name, lastname, avatar } = user;

  return (
    <div className="w-full bg-gray-800 px-4 py-2 mb-4 border border-gray-400 rounded-md hover:bg-gray-700 hover:border-gray-500 cursor-pointer transition-all ease-in shadow-md">
      <div onClick={openModal} className="flex-col">
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <section className="w-full">
          <h1 className="text-xl font-oswald text-gray-300">{title}</h1>
          <article className="flex-colo text-sm font-lato text-gray-500">
            <article className="mt-4 flex gap-2">
              <p className="py-1">
                Inicio: 05/09/2024
              </p>
              <p className="py-1">
                Fin: 06/09/2024
              </p>
            </article>
            <a className="py-1" href={linkbitrix} target="_blank">#{nobitrix}</a>
          </article>

          <p className="text-md my-4 font-lato text-gray-400">{description}</p>
          <div className="flex justify-end items-center gap-4 pt-2">
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
        </section>
      </Modal>
    </div>
  );
};
