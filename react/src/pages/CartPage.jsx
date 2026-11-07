// Página del Carrito de Compras (`/carrito`).
//
// MUY IMPORTANTE:
// - Aquí solo se deja el esqueleto básico de la página.
// - Toda la lógica de:
//    * Consumir el estado y las acciones de `CartContext` (`useCart`),
//    * Mostrar el mensaje de carrito vacío o la tabla de productos (`.cart-table`),
//    * Botones para incrementar (+), decrementar (-), eliminar ítem (🗑️) y vaciar carrito,
//    * Calcular y mostrar subtotal, envío condicional y total final (`.cart-order-summary`),
//   debe ser IMPLEMENTADA POR EL ALUMNO.
//
// Pista:
// - Inspírate en `carrito.html` y `js/carrito.js` de la versión vanilla.

export function CartPage() {
  // TODO:
  // - Consumir `useCart()` y renderizar la interfaz del carrito.

  return (
    <section className="cart-view-container">
      <h1>Tu Carrito Tech</h1>
      {/* TODO: Implementar vista de carrito vacío vs tabla de ítems y resumen de pedido */}
    </section>
  );
}
