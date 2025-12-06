import { Links } from "../../Elements/Link";

export const Navigation = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Links to={"/"}>Login</Links>
        <Links to={"/register"}>Register</Links>
        <Links to={"/dashboard"}>Dashboard</Links>
      </div>
    </>
  );
};
