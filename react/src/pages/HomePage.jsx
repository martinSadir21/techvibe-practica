// =============================================================================
// PASO 3 · pages/HomePage.jsx — la página principal (tipo 1: VARIOS de la API)
// -----------------------------------------------------------------------------
// Las 3 preguntas → "¿cómo se junta?" → el <main> de index.html.
// Estructura (lo fijo AFUERA de los estados, igual que en index.html):
//   <HeroSection />                    ← fijo
//   <hr className="divider" />         ← fijo
//   <section id="catalogo">            ← título fijo + los 4 estados
//   <NewsletterSection />              ← fijo
//
// Los 4 estados (NO cambian nunca, solo cambian clases y textos):
//   <div id="loading" class="state-feedback">          → {loading && ...}
//   <div id="error" class="state-feedback state-error-msg"> → {error && ...}
//   (no está en la vanilla, lo pide la rúbrica)         → vacío
//   <div id="products-grid" class="products-grid">     → {... && (map)}
// Texto del error: el catch de app.js. Grilla: el forEach de app.js → .map.
// ⚠️ NUNCA `if (loading) return ...` acá: taparía el hero y el newsletter.
// ⚠️ Se borró el <div className="products-grid"></div> vacío que traía el esqueleto.
// =============================================================================
import { useProducts } from "../hooks/useProducts.js";
import { ProductCard } from "../components/ProductCard.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { NewsletterSection } from "../components/NewsletterSection.jsx";

export function HomePage() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <HeroSection />

      <hr className="divider" />

      <section id="catalogo" className="catalog-section">
        <div className="section-header">
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-description">
            Selección exclusiva de los gadgets más elegidos por nuestra comunidad tech.
          </p>
        </div>

        {loading && <div className="state-feedback">Cargando productos de la tienda...</div>}

        {error && (
          <div className="state-feedback state-error-msg">
            No se pudieron cargar los productos: {error.message}. Verifica que el servidor mock esté
            corriendo en http://localhost:3000.
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="state-feedback">No hay productos disponibles por ahora.</div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <NewsletterSection />
    </>
  );
}

// ✅ PASO 3 TERMINADO → probá: "Cargando..." → 8 tarjetas → apagá el server y F5 → error
//    commit: git commit -m "feat: catalogo con hero, estados y tarjetas"
// ➡️ SIGUIENTE (PASO 4): context/CartContext.jsx (25 pts, el que más pesa)
