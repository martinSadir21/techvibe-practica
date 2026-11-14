// =============================================================================
// PASO 6 · components/CartTable.jsx — la tabla del carrito (la rúbrica la nombra)
// -----------------------------------------------------------------------------
// De dónde sale:
//   <table class="cart-table"> con su <thead> → de carrito.html
//   cada <tr> → el forEach de renderCart() en carrito.js → cart.map(...)
//   botones con data-id + addEventListener('click') → onClick={() => fn(item.id)}
//     .btn-minus → decreaseQuantity · .btn-plus → increaseQuantity · 🗑️ → removeFromCart
//   itemSubtotal = item.price * item.quantity (también de carrito.js)
// Recibe `items` por props (la página le pasa el carrito) y saca las funciones del context.
// =============================================================================
import { useCart } from "../hooks/useCart.js";
import { formatPrice } from "../api/client.js";

export function CartTable({ items }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "48px", height: "48px", objectFit: "cover", borderRadius: "6px" }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.category}</div>
              </div>
            </td>
            <td>{formatPrice(item.price)}</td>
            <td>
              <div className="quantity-controls">
                <button type="button" className="btn-qty btn-minus" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" className="btn-qty btn-plus" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </td>
            <td style={{ fontWeight: 600 }}>{formatPrice(item.price * item.quantity)}</td>
            <td>
              <button
                type="button"
                className="btn-remove-item"
                onClick={() => removeFromCart(item.id)}
                style={{ background: "transparent", border: "none", color: "#f87171", cursor: "pointer", fontSize: "1.1rem" }}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ➡️ SIGUIENTE: components/CartSummary.jsx
