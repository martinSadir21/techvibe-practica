// =============================================================================
// PASO 3 · components/ProductCard.jsx — UNA tarjeta (la página la repite con .map)
// -----------------------------------------------------------------------------
// Las 3 preguntas → "¿qué se repite?" → el forEach de app.js → esta tarjeta.
// De dónde sale:
//   const card = document.createElement('article'); card.className = 'product-card';
//     → <article className="product-card">
//   card.innerHTML = `...`  → lo de adentro, traducido:
//     class → className · ${p.x} → {product.x} · <img ...> → <img ... />
//     src="${p.image}" → src={product.image} (sin comillas)
//     $${p.price.toLocaleString('es-AR')} → {formatPrice(product.price)}
//     <a href="producto.html?id=${p.id}"> → <Link to={`/productos/${product.id}`}>
//     style="..." → borrado
// ⚠️ `product` es el nombre de la prop: la página tiene que mandar product={product}.
// =============================================================================
import { Link } from "react-router-dom";
import { formatPrice } from "../api/client.js";

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="card-media">
        <span className="product-tag">{product.tag}</span>
        <img src={product.image} alt={product.name} className="card-img" />
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-description">{product.description}</p>
        <div className="card-footer">
          <span className="price">{formatPrice(product.price)}</span>
          <Link
            to={`/productos/${product.id}`}
            className="btn-add"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </article>
  );
}

// ➡️ SIGUIENTE: components/HeroSection.jsx y NewsletterSection.jsx (lo fijo de la home)
