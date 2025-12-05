import { Link } from "react-router-dom";

export const Links = (props) => {
  const { to, children } = props;
  return (
    <>
      <Link to={to}>{children}</Link>
    </>
  );
};
