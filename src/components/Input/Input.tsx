import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => {
  return (
    <>
      <input
        className="border border-gray w-full px-3 py-2 rounded-md focus:outline-none mt-2"
        {...props}
      />
    </>
  );
};
