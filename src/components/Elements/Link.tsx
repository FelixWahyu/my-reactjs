import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  to: string;
  children: ReactNode;
  classname?: string;
};

export const Links = (props: LinkProps) => {
  const { to, children, classname = "" } = props;
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
};
