// =============================================================================
// PASO 3 · components/NewsletterSection.jsx — bloque fijo (opcional, prolijo)
// -----------------------------------------------------------------------------
// De dónde sale: <section id="contacto" class="newsletter-section"> de index.html.
// Trampa: onsubmit="event.preventDefault(); alert(...)" del HTML →
//   onSubmit={(e) => { e.preventDefault(); alert(...); }}
//   (eventos en camelCase + función entre llaves; preventDefault = no recarga)
// El input no se lee en el .js (no hay `.value`) → va simple, sin useState.
// El id="contacto" se deja: el link "Contacto" de la navbar salta acá.
// =============================================================================
export function NewsletterSection() {
  return (
    <section id="contacto" className="newsletter-section">
      <div className="newsletter-box">
        <h2 className="newsletter-title">Unite a la Comunidad TechVibe</h2>
        <p className="newsletter-subtitle">
          Recibí novedades y descuentos exclusivos directamente en tu bandeja de entrada.
        </p>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Gracias por suscribirte!");
          }}
        >
          <div className="form-group">
            <input type="email" className="form-input" placeholder="tu-email@dominio.com" required />
          </div>
          <button type="submit" className="btn-submit">Suscribirme</button>
        </form>
      </div>
    </section>
  );
}

// ➡️ SIGUIENTE: pages/HomePage.jsx (juntar todo)
