import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <input
        className="border border-gray w-full px-3 py-2 rounded-md focus:outline-none mt-2"
        ref={ref}
        {...props}
      />
    </>
  );
});

Input.displayName = "Input";