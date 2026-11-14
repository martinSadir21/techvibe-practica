
import { Link, useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail.js";
import { useCart } from "../hooks/useCart.js";
import { formatPrice } from "../api/client.js";

// Página de detalle de un producto.
//
// MUY IMPORTANTE:
// - Aquí solo se deja la estructura de estados y el esqueleto visual.
// - Toda la lógica de:
//    * Llamar a la API para obtener el detalle (`/api/productos/:id`),
//    * Manejar estados de carga, error y producto no encontrado,
//    * Conectar el botón "Agregar al Carrito" con el `CartContext`,
//   debe ser IMPLEMENTADA POR EL ALUMNO.
//
// Pista:
// - Inspírate en `producto.html` y `js/producto.js` de la versión vanilla.

export function ProductDetailPage() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetail(id);
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <section className="detail-view-container">
      <Link to="/" className="btn-secondary">&larr; Volver</Link>

      {loading && <div className="state-feedback">Cargando detalles del gadget...</div>}

      {error && <div className="state-feedback state-error-msg">Error: {error.message}</div>}

      {!loading && !error && product && (
        <article className="detail-layout">
          <img src={product.image} alt={product.name} />
          <span className={`badge badge-${product.badgeVariant || "primary"}`}>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>{formatPrice(product.price)}</span>

          <div>
            <strong>Disponibilidad: </strong><span>{product.stock} unidades en stock</span>
          </div>

          <div>
            <h3>Especificaciones Técnicas:</h3>
            <ul className="specs-list">
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <li key={key}>
                    <strong>{key.toUpperCase()}:</strong> <span>{val}</span>
                  </li>
                ))}
              </ul>
          </div>

          <button className="btn-primary" onClick={() => addToCart(product)}>
            Agregar al Carrito
          </button>

        </article>
      )}
    </section>
  );
}
