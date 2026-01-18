import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import { WishlistProvider } from "./context/WishlistProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WishlistProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </WishlistProvider>
  </React.StrictMode>,
);
