
export function NewsletterSection(){
    return(
            <section id="contacto" className="newsletter-section">
      <div className="newsletter-box">
        <h2 className="newsletter-title">Unite a la Comunidad TechVibe</h2>
        <p className="newsletter-subtitle">Recibí novedades y descuentos exclusivos directamente en tu bandeja de entrada.</p>
        <form className="newsletter-form" onsubmit="event.preventDefault(); alert('¡Gracias por suscribirte!');">
          <div className="form-group">
            <input type="email" className="form-input" placeholder="tu-email@dominio.com" required/>
          </div>
          <button type="submit" className="btn-submit">Suscribirme</button>
        </form>
      </div>
    </section>
    );
}