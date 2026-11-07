import { createContext, useState, useEffect } from "react";

// Contexto del Carrito de Compras.
//
// MUY IMPORTANTE:
// - Aquí se deja solo la estructura mínima del contexto.
// - La lógica real de:
//    * restaurar y sincronizar el carrito con localStorage ('techvibe_cart'),
//    * agregar productos controlando el stock,
//    * modificar cantidades (+ / -), eliminar ítems y vaciar carrito,
//    * calcular totales y envío condicional,
//   debe ser IMPLEMENTADA POR EL ALUMNO.
//
// Pista:
// - Inspírate en `js/producto.js` y `js/carrito.js` de la versión vanilla.

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // TODO:
    // - Leer y/o sincronizar el carrito con localStorage.
  }, []);

  const addToCart = (product) => {
    // TODO:
    // - Implementar lógica para agregar producto o incrementar cantidad sin superar el stock.
    console.warn("TODO: implementar addToCart en CartContext");
  };

  const removeFromCart = (productId) => {
    // TODO:
    // - Implementar lógica para eliminar un producto del carrito.
    console.warn("TODO: implementar removeFromCart en CartContext");
  };

  const clearCart = () => {
    // TODO:
    // - Implementar lógica para vaciar el carrito.
    console.warn("TODO: implementar clearCart en CartContext");
  };

  const value = { cart, addToCart, removeFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
