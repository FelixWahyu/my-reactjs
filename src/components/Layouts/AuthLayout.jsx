import { Navigation } from "../Fragments/Navbar/NavLink";

export default function AuthLayout(props) {
  const { children } = props;
  return (
    <div>
      <Navigation></Navigation>
      <div>{children}</div>
    </div>
  );
}
