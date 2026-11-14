// =============================================================================
// PASO 1 · main.jsx — el punto de entrada
// -----------------------------------------------------------------------------
// Qué hace: envuelve la app con
//   - BrowserRouter → habilita Link, NavLink, useParams (rutas).
//   - CartProvider  → el carrito queda disponible en TODA la app (useCart()).
// De dónde sale "CartProvider": de context/CartContext.jsx →
//   `export function CartProvider`. No se inventa: se mira el esqueleto.
// =============================================================================
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// ➡️ SIGUIENTE: App.jsx (las rutas)
