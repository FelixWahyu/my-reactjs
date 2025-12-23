import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { type = "button", children, onClick, className = "" } = props;

  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 w-full cursor-pointer bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 ${className}`}>
      {children}
    </button>
  );
};
