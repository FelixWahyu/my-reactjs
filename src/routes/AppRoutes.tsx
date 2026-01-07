import { Routes, Route } from "react-router-dom";
import AuthForm from "../pages/auth";
import RegisterForm from "../pages/register";
import Dashboard from "../pages/dashboard";
import UsersContent from "../pages/users";
import CategoryContent from "../pages/category";
import ProductContent from "../pages/product";
import OrdersPage from "../pages/orders";
import DetailProduct from "../pages/detailProduct";
import CounterPage from "../pages/counter";
import TodoPage from "../pages/todoPage";
import KatalogProduct from "../pages/katalogProduct";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<KatalogProduct></KatalogProduct>} />
        <Route path="/login" element={<AuthForm></AuthForm>} />
        <Route path="/register" element={<RegisterForm></RegisterForm>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/user" element={<UsersContent></UsersContent>} />
        <Route path="/category" element={<CategoryContent></CategoryContent>} />
        <Route path="/product" element={<ProductContent></ProductContent>} />
        <Route path="/product/:id" element={<DetailProduct></DetailProduct>} />
        <Route path="/orders" element={<OrdersPage></OrdersPage>} />
        <Route path="/counter" element={<CounterPage></CounterPage>} />
        <Route path="/todo-list" element={<TodoPage></TodoPage>} />
      </Routes>
    </>
  );
}
