import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO:
    // - Obtener el producto por `id` desde `/api/productos/${id}`.
    // - Actualizar `product`, `loading` y `error` según corresponda.
    console.warn(
      "TODO: implementar carga de detalle de producto en ProductDetailPage",
    );
  }, [id]);

  return (
    <section className="detail-view-container">
      <h1>Detalle de producto (React)</h1>
      <p>
        Página de detalle para el producto con id: <strong>{id}</strong>
      </p>

      {/* TODO:
          - Sustituir este bloque por la vista completa que muestre:
            * Imagen, tag, categoría, nombre, precio, rating, descripción y stock.
            * Lista de especificaciones técnicas (`product.specs`).
            * Botón para agregar al carrito usando `useCart()`.
          - Manejar visualmente los casos de `loading`, `error` y `product === null`.
      */}

      <pre
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <code>
          {`// Ejemplo de estructura de datos esperada:
// {
//   "id": 1,
//   "name": "VibePods Studio Pro",
//   "category": "Audio Hi-Fi",
//   "tag": "Bestseller",
//   "price": 89990,
//   "image": "...",
//   "description": "...",
//   "rating": 4.9,
//   "stock": 12,
//   "specs": { "conectividad": "...", "bateria": "...", "peso": "...", "garantia": "..." }
// }`}
        </code>
      </pre>
    </section>
  );
}
