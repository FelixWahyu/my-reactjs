import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRoutes";
// import { Navigation } from "./components/Fragments/Navbar/NavLink";
// import AuthForm from "./pages/auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthForm /> */}
      <AppRouter></AppRouter>
    </BrowserRouter>
  </StrictMode>
);
