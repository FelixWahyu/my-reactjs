import { Routes, Route } from "react-router-dom";
import AuthForm from "../pages/auth";
import RegisterForm from "../pages/register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm></AuthForm>}></Route>
      <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
    </Routes>
  );
};
