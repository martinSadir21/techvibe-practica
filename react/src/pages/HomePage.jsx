import { useProducts } from "../hooks/useProducts.js";
import { ProductCard } from "../components/ProductCard.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { NewsLetter } from "../components/NewSletter.jsx";

// Página principal: catálogo de productos.
// Inspírate en la estructura de `index.html` y la lógica de `js/app.js` (versión vanilla).

export function HomePage() {
  const { products, loading, error } = useProducts();

  // TODO:
  // - Manejar los estados de `loading`, `error` y lista vacía.
  // - Renderizar la sección Hero y la grilla de productos (`.products-grid`)
  //   utilizando el componente `ProductCard`.

  return (
    <>

    <HeroSection/>
    <section className="catalog-section">
      <div className="section-header">
        <h2 className="section-title">Productos Destacados</h2>
        <p className="section-description">
          Reimplementación en React de la tienda TechVibe.
        </p>
      </div>

      {loading && <div className="state-feedback">Cargando productos de la tienda...</div>}

      {error && (
        <div className="state-feedback state-error-msg">No se pudieron cargar los productos: {error.message}</div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="state-feedback">No hay productos disponibles.</div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="products-grid"></div>
    </section>
    <NewsLetter/>

    </>
  );
}
