// =============================================================================
// PASO 6 · components/CartSummary.jsx — resumen del pedido (la rúbrica lo nombra)
// -----------------------------------------------------------------------------
// De dónde sale: <div class="cart-order-summary"> de carrito.html, traducido.
// Llenar los ids con lo que asigna carrito.js:
//   summary-subtotal → `$${subtotal.toLocaleString}`         → formatPrice(subtotal)
//   summary-shipping → shipping === 0 ? 'Gratis' : `$${...}`  → mismo ternario
//                      .style.color = shipping === 0 ? '#34d399' : 'var(--text-main)'
//   summary-total    → formatPrice(total)
// Los números ya los calcula el context (PIEZA 6): acá solo se muestran.
// onclick="alert(...)" del botón de pago → onClick={() => alert(...)}
// =============================================================================
import { useCart } from "../hooks/useCart.js";
import { formatPrice } from "../api/client.js";

export function CartSummary() {
  const { subtotal, shipping, total } = useCart();

  return (
    <div className="cart-order-summary">
      <h2 style={{ fontSize: "1.15rem" }}>Resumen del Pedido</h2>

      <div className="summary-row">
        <span style={{ color: "var(--text-muted)" }}>Subtotal:</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="summary-row">
        <span style={{ color: "var(--text-muted)" }}>Envío:</span>
        <span style={{ color: shipping === 0 ? "#34d399" : "var(--text-main)" }}>
          {shipping === 0 ? "Gratis" : formatPrice(shipping)}
        </span>
      </div>

      <div className="summary-row summary-total">
        <span>Total Final:</span>
        <span>{formatPrice(total)}</span>
      </div>

      <button
        type="button"
        className="btn-primary"
        style={{ marginTop: "8px" }}
        onClick={() => alert("¡Compra simulada con éxito!")}
      >
        Iniciar Pago Seguro
      </button>
    </div>
  );
}

// ➡️ SIGUIENTE: pages/CartPage.jsx (juntar tabla + resumen)
