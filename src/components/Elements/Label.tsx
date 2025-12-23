import { ReactNode } from "react";

type LabelProps = {
  htmlfor: string;
  children?: ReactNode;
  className?: string;
};

export const Label = (props: LabelProps) => {
  const { htmlfor, children, className = "" } = props;

  return (
    <label htmlFor={htmlfor} className={`text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
};
