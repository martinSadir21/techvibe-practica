import { useProducts } from "../hooks/useProducts.js";
import { ProductCard } from "../components/ProductCard.jsx";
import { Loader } from "../components/Loader.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { NewsletterSection } from "../components/NewsletterSection.jsx";

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
      {loading && <Loader text= "Cargando productos de la tienda"/>}
      {error && (<ErrorMessage message= "No se pudieron cargar los productos: ${error.message}"/>)}

      {!loading && !error && products.length === 0 && (
        <div>
          No hay productos disponibles
        </div> )}

      {!loading && !error && products.lenght > 0 && (
        <div>
          {products.map((product) => (
              <ProductCard key= {product.id} product={product} />
            ))
          },
          </div>      
      )}
</section>
    <NewsletterSection/>
</>
  );
}
