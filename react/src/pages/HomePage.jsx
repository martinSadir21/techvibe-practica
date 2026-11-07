import { useProducts } from "../hooks/useProducts.js";
import { ProductCard } from "../components/ProductCard.jsx";

// Página principal: catálogo de productos.
// Inspírate en la estructura de `index.html` y la lógica de `js/app.js` (versión vanilla).

export function HomePage() {
  const { products, loading, error } = useProducts();

  // TODO:
  // - Manejar los estados de `loading`, `error` y lista vacía.
  // - Renderizar la sección Hero y la grilla de productos (`.products-grid`)
  //   utilizando el componente `ProductCard`.

  return (
    <section className="catalog-section">
      <div className="section-header">
        <h2 className="section-title">Productos Destacados</h2>
        <p className="section-description">
          Reimplementación en React de la tienda TechVibe.
        </p>
      </div>

      {/* TODO:
          - Mostrar estado de carga, error o mapear `products` con <ProductCard />.
      */}
      <div className="products-grid"></div>
    </section>
  );
}
