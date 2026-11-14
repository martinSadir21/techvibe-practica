// =============================================================================
// PASO 6 · pages/CartPage.jsx — el carrito (tipo 3: lee del CONTEXT)
// -----------------------------------------------------------------------------
// No hace fetch → SIN loading ni error. Solo 2 caras (el if/else de renderCart):
//   cart.length === 0  → <div id="cart-empty">   (mensaje + "Ver Catálogo")
//   si no              → <div id="cart-content"> (tabla + vaciar + resumen)
// En React: cart.length === 0 ? (vacío) : (contenido)
// El botón "Vaciar Carrito" copia el confirm de carrito.js y llama a clearCart.
// El título <h1> va AFUERA del ternario: se ve siempre (igual que en carrito.html).
// =============================================================================
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { CartTable } from "../components/CartTable.jsx";
import { CartSummary } from "../components/CartSummary.jsx";

export function CartPage() {
  const { cart, clearCart } = useCart();

  const handleClear = () => {
    if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
      clearCart();
    }
  };

  return (
    <section className="cart-view-container">
      <h1 style={{ fontSize: "2rem", marginBottom: "24px" }}>Tu Carrito Tech</h1>

      {cart.length === 0 ? (
        <div className="state-feedback">
          <p>Tu carrito está vacío actualmente.</p>
          <Link to="/" className="btn-primary" style={{ display: "inline-block", marginTop: "16px" }}>
            Ver Catálogo
          </Link>
        </div>
      ) : (
        <div>
          <CartTable items={cart} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <button
              type="button"
              className="btn-secondary"
              onClick={handleClear}
              style={{ color: "#f87171", borderColor: "rgba(248,113,113,0.3)" }}
            >
              Vaciar Carrito
            </button>

            <CartSummary />
          </div>
        </div>
      )}
    </section>
  );
}

// ✅ PASO 6 TERMINADO → probá: carrito vacío · + / − (en 1 lo saca) · tope de stock
//    · 🗑️ · envío Gratis/≥100.000 · Vaciar con confirm · F5 conserva
//    commit: git commit -m "feat: carrito con tabla, cantidades, envio y resumen"
// ➡️ SIGUIENTE (PASO 7): revisar GUIA-PARCIAL.md → checklist final, limpiar, push.
