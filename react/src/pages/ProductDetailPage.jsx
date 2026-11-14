// =============================================================================
// PASO 5 · pages/ProductDetailPage.jsx — detalle (tipo 2: UNO de la API)
// -----------------------------------------------------------------------------
// Dos trabajos separados:
//   1) Molde de 3 estados (de memoria): loading · error · !loading && !error && product
//      (sin "vacío": si el id no existe, la API da 404 y eso es `error`)
//   2) Contenido: pegar el <article id="product-detail"> de producto.html adentro
//      del 3er estado, traducir y LLENAR cada etiqueta vacía:
//      id → Ctrl+F en producto.js → lo que está a la derecha del "=" va adentro.
//        detail-img      .src = product.image / .alt = product.name
//        detail-tag      .textContent = product.tag
//        detail-category .textContent = `Categoría: ${product.category}`
//        detail-title    .textContent = product.name
//        detail-price    `$${product.price.toLocaleString('es-AR')}` → formatPrice
//        detail-rating   `★ ${product.rating} / 5`
//        detail-desc     product.description
//        detail-stock    `${product.stock} unidades en stock`
//        detail-specs    forEach de Object.entries → <SpecsList />
// ⚠️ El esqueleto traía useState/useEffect acá adentro → BORRADOS: lo hace el hook.
// ⚠️ Borrado el relleno: <h1>Detalle de producto (React)</h1>, el <p> del id y el <pre>.
// Los style="..." de la vanilla → style={{ }} (camelCase, valores entre comillas).
// =============================================================================
import { Link, useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail.js";
import { useCart } from "../hooks/useCart.js";
import { formatPrice } from "../api/client.js";
import { SpecsList } from "../components/SpecsList.jsx";

export function ProductDetailPage() {
  const { id } = useParams(); // producto.html?id=3 → /productos/3 → id = "3"
  const { product, loading, error } = useProductDetail(id);
  const { addToCart } = useCart();

  return (
    <section className="detail-view-container">
      <Link to="/" className="btn-secondary" style={{ display: "inline-block", marginBottom: "24px" }}>
        &larr; Volver a la Tienda
      </Link>

      {loading && <div className="state-feedback">Cargando detalles del gadget...</div>}

      {error && <div className="state-feedback state-error-msg">Error: {error.message}</div>}

      {!loading && !error && product && (
        <article className="detail-layout">
          <div className="detail-image-box">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-info">
            <div>
              <span className="badge">{product.tag}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginLeft: "8px" }}>
                Categoría: {product.category}
              </span>
            </div>

            <h1 style={{ fontSize: "2rem" }}>{product.name}</h1>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--accent-color)" }}>
                {formatPrice(product.price)}
              </span>
              <span style={{ color: "#fbbf24", fontWeight: 600 }}>★ {product.rating} / 5</span>
            </div>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{product.description}</p>

            <div style={{ fontSize: "0.9rem" }}>
              <strong>Disponibilidad: </strong>
              <span style={{ color: "#34d399" }}>{product.stock} unidades en stock</span>
            </div>

            <div>
              <h3 style={{ fontSize: "1rem", marginBottom: "8px" }}>Especificaciones Técnicas:</h3>
              <SpecsList specs={product.specs} />
            </div>

            <div style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
              {/* Conexión con el context: los alerts (stock / agregado) están en addToCart */}
              <button type="button" className="btn-primary" style={{ flex: 1 }} onClick={() => addToCart(product)}>
                Agregar al Carrito 🛒
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

// ✅ PASO 5 TERMINADO → probá: /productos/1 completo · "Agregar" → alert y badge 1
//    · F5 → sigue en 1 · /productos/999 → "Error: ..."
//    commit: git commit -m "feat: detalle de producto y agregar al carrito"
// ➡️ SIGUIENTE (PASO 6): components/CartTable.jsx
