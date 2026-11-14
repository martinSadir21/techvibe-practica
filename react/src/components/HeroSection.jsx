// =============================================================================
// PASO 3 · components/HeroSection.jsx — bloque fijo (la rúbrica lo nombra)
// -----------------------------------------------------------------------------
// De dónde sale: <section class="hero-section"> de index.html, pegado y traducido.
// Se copia DESDE la etiqueta que envuelve todo (la <section>): un return
// devuelve UNA sola etiqueta de afuera.
// Trampas: <br> → <br /> · <img ...> → <img ... /> · href="#catalogo" queda <a>.
// =============================================================================
export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="badge">Novedades 2026</span>
        <h1 className="hero-title">Tecnología inteligente para tu día a día</h1>
        <p className="hero-subtitle">
          Descubrí los accesorios más innovadores con envío gratis superando los $100.000.
          <br />
          Diseño premium, máximo rendimiento y garantía oficial.
        </p>
        <div className="hero-buttons">
          <a href="#catalogo" className="btn-primary">Explorar Colección</a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80"
          alt="Auriculares Tech Pro inalámbricos"
          className="hero-img"
        />
      </div>
    </section>
  );
}
