import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

// Custom hook para consumir el contexto del carrito.
// Esto simplifica su uso en el resto de la aplicación.

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    // Este error ayuda a detectar si se usa el hook fuera del CartProvider.
    throw new Error("useCart debe usarse dentro de un <CartProvider>");
  }

  return ctx;
}
