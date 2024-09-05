import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/55 flex justify-center items-center z-50"
      >
        <div className="bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-2/5 p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h2 className="text-xl font-semibold">{children}</h2>
        </div>
      </div>
    </>
  );
};
