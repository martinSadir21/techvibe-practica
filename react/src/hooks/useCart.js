// =============================================================================
// PASO 4 · hooks/useCart.js — VENÍA HECHO (sin TODO) → no se toca
// -----------------------------------------------------------------------------
// Es el atajo para "abrir la caja" del context desde cualquier componente:
//   const { cart, addToCart } = useCart();
// Solo se puede sacar lo que está en el `value` de CartContext.jsx.
// =============================================================================
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    // Avisa si se usa fuera del <CartProvider> (si te olvidaste de main.jsx)
    throw new Error("useCart debe usarse dentro de un <CartProvider>");
  }

  return ctx;
}
