import { Links } from "../../Elements/Link";

export const Navigation = () => {
  return (
    <>
      <nav className="flex justify-end items-center gap-4">
        <Links to={"/"}>Login</Links>
        <Links to={"/register"}>Register</Links>
      </nav>
    </>
  );
};
