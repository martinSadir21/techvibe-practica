import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import {CartProvider} from "./context/CartContext.jsx";
import "./index.css";

// Punto de entrada principal de la aplicación React.
// TODO: Envolver la aplicación con BrowserRouter y CartProvider según corresponda.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
