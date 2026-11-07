import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Punto de entrada principal de la aplicación React.
// TODO: Envolver la aplicación con BrowserRouter y CartProvider según corresponda.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
