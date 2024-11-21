import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<Props> = (props) => {
  return (
    <>
      <textarea
        className="border border-gray w-full px-3 py-2 rounded-md focus:outline-none"
        {...props}
      >
      </textarea>
    </>
  );
};
