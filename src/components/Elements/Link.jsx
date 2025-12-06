import { Link } from "react-router-dom";

export const Links = (props) => {
  const { to, children, classname } = props;
  return (
    <>
      <Link to={to} className={classname}>
        {children}
      </Link>
    </>
  );
};
