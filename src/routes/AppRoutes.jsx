import { Routes, Route } from "react-router-dom";
import AuthForm from "../pages/auth";
import RegisterForm from "../pages/register";
import Dashboard from "../pages/dashboard";
import UsersContent from "../pages/users";
import CategoryContent from "../pages/category";
import ProductContent from "../pages/product";
import OrdersPage from "../pages/orders";
import DetailProduct from "../pages/detailProduct";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthForm></AuthForm>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<UsersContent></UsersContent>}></Route>
        <Route path="/category" element={<CategoryContent></CategoryContent>}></Route>
        <Route path="/product" element={<ProductContent></ProductContent>}></Route>
        <Route path="/product/:id" element={<DetailProduct></DetailProduct>}></Route>
        <Route path="/orders" element={<OrdersPage></OrdersPage>}></Route>
      </Routes>
    </>
  );
};
