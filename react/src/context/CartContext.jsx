// =============================================================================
// PASO 4 · context/CartContext.jsx — el carrito compartido (25 pts)
// -----------------------------------------------------------------------------
// El comentario que traía el esqueleto ES la lista de tareas. Cada línea → una pieza:
//   restaurar y sincronizar con localStorage ('techvibe_cart') → PIEZA 1 y 2
//   agregar productos controlando el stock                    → PIEZA 3 addToCart
//   modificar cantidades (+ / -)  ⚠️ NO venían en el esqueleto → PIEZA 4 (se CREAN)
//   eliminar ítems y vaciar carrito                           → PIEZA 5
//   calcular totales y envío condicional                      → PIEZA 6
// Todo se copia de js/producto.js y js/carrito.js (constantes, alerts, cálculos).
// Variante "carrito con cantidad" (molde 12b del kit): la vanilla tiene `quantity`.
// =============================================================================
import { createContext, useState, useEffect } from "react";

// Constantes copiadas de las primeras líneas de producto.js / carrito.js
const STORAGE_KEY = "techvibe_cart";
const FREE_SHIPPING_THRESHOLD = 100000;
const SHIPPING_COST = 4500;

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  // PIEZA 1 · LEER al arrancar → ADENTRO del useState (lazy init).
  // Es el try/catch de getStoredCart() de la vanilla. Si el JSON está roto → [].
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  });

  // PIEZA 2 · GUARDAR cada vez que cambia el carrito (saveCart de la vanilla).
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // PIEZA 3 · AGREGAR → el click de #btn-add-cart en producto.js:
  //   si ya existe: si llegó al stock → alert y corta; si no → cantidad + 1
  //   si no existe: entra con quantity: 1
  //   al final: alert de "agregado"
  // Nunca push: siempre un arreglo NUEVO (map / [...cart, nuevo]) para que React redibuje.
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.quantity >= product.stock) {
        alert("Has alcanzado el límite de stock disponible para este producto.");
        return;
      }
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      // Mismos campos que guarda la vanilla (no hace falta guardar specs ni descripción)
      const { id, name, category, price, image, stock } = product;
      setCart([...cart, { id, name, category, price, image, stock, quantity: 1 }]);
    }

    alert(`¡"${product.name}" agregado al carrito!`);
  };

  // PIEZA 5 · QUITAR un ítem (botón 🗑️) y VACIAR (botón "Vaciar Carrito")
  // (van antes que la pieza 4 porque decreaseQuantity usa removeFromCart)
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // PIEZA 4 · + y − → los listeners de .btn-plus / .btn-minus en carrito.js
  //   +: si llegó al stock → alert; si no → +1
  //   −: si está en 1 → se saca del carrito (así nunca queda en 0 ni negativo)
  const increaseQuantity = (productId) => {
    const target = cart.find((item) => item.id === productId);
    if (!target) return;
    if (target.quantity >= target.stock) {
      alert(`Stock máximo disponible alcanzado (${target.stock} unidades).`);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    const target = cart.find((item) => item.id === productId);
    if (!target) return;
    if (target.quantity <= 1) {
      removeFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  // PIEZA 6 · TOTALES → copiados de renderCart() en carrito.js
  //   subtotal = suma de precio × cantidad
  //   envío: gratis si subtotal ≥ 100.000; $4.500 si es menor;
  //          $0 si el carrito está vacío (eso lo pide el README, no está en la vanilla)
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let shipping = SHIPPING_COST;
  if (cart.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) {
    shipping = 0;
  }
  const total = subtotal + shipping;

  // Todo lo que las páginas pueden sacar con useCart(). Si no está acá, no se puede usar.
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

/* -----------------------------------------------------------------------------
   TABLA DE CONEXIONES (que ninguna función quede sin usar — me lo descontaron)
   cart              → Navbar (badge) · CartPage (vacío o no) · CartTable (map)
   addToCart         → ProductDetailPage: botón "Agregar al Carrito"
   increaseQuantity  → CartTable: botón +
   decreaseQuantity  → CartTable: botón −
   removeFromCart    → CartTable: botón 🗑️
   clearCart         → CartPage: botón "Vaciar Carrito" (con confirm)
   subtotal, shipping, total → CartSummary
   ----------------------------------------------------------------------------- */

// ✅ PASO 4 TERMINADO → commit: git commit -m "feat: context del carrito con stock, envio y localStorage"
// ➡️ SIGUIENTE: hooks/useCart.js (ya viene hecho, no se toca) y después PASO 5:
//    hooks/useProductDetail.js. TIP: conectá YA el botón del detalle y probá
//    que el badge sube → así addToCart cuenta como usada aunque te trabes después.
