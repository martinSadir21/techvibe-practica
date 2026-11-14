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
const STORAGE_KEY = "techvibe_cart";
const FREE_SHIPPING_THRESHOLD = 100000;
const SHIPPING_COST = 4500;

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existe = cart.find((i) => i.id === product.id);
    if (existe) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // sumar y restar del carrito
  const increaseQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item.quantity >= item.stock) {
      alert(`Stock máximo disponible alcanzado (${item.stock} unidades).`);
      return;
    }
    setCart(
      cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item.quantity <= 1) {
      removeFromCart(id); // si queda en 0, se saca
      return;
    }
    setCart(
      cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i)),
    );
  };

  const removeFromCart = (productId) =>
    setCart(cart.filter((i) => i.id !== productId));

  const clearCart = () => setCart([]);

  // ya esta escrito en carrito.js
  const subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping =
    cart.length === 0
      ? 0
      : subtotal >= FREE_SHIPPING_THRESHOLD
        ? 0
        : SHIPPING_COST;
  const total = subtotal + shipping;

  const value = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
