import { ButtonHTMLAttributes, FC } from "react";

/**
 * @param {string} text - The text the button
 */
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<Props> = (props) => {
  const { text } = props;
  return (
    <>
      <button
        className="border-none w-full bg-gray-700 hover:bg-opacity-80 px-4 py-2 text-md text-white rounded-md cursor-pointer transition-all ease-in"
        {...props}
      >
        {text}
      </button>
    </>
  );
};
