import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button: FC<Props> = (props) => {
  const { text } = props;
  return (
    <>
      <button
        className="border-none w-full bg-blue-500 px-4 py-2 text-md text-white rounded-md cursor-pointer"
        {...props}
      >
        {text}
      </button>
    </>
  );
};
