// =============================================================================
// PASO 1 · pages/NotFoundPage.jsx — la 404 (2 pts, máximo 2 minutos)
// -----------------------------------------------------------------------------
// No está en la vanilla: se arma con clases que YA existen en el CSS
//   - contenedor de una página (detail-view-container)
//   - la del "Cargando..." (state-feedback)
//   - la de un botón (btn-primary)
// =============================================================================
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="detail-view-container">
      <div className="state-feedback">
        <h1 style={{ fontSize: "3rem", marginBottom: "8px" }}>404</h1>
        <p>La página que buscás no existe o fue movida.</p>
        <Link to="/" className="btn-primary" style={{ display: "inline-block", marginTop: "16px" }}>
          Volver a la Tienda
        </Link>
      </div>
    </section>
  );
}

// ✅ PASO 1 TERMINADO → commit: git commit -m "feat: rutas, navbar con NavLink y 404"
// ➡️ SIGUIENTE (PASO 2): api/client.js
