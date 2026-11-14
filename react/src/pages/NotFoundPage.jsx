import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="catalog-section">
      <div className="state-feedback">
        <h1>404</h1>
        <p>La página que buscás no existe.</p>
        <Link to="/" className="btn-submit">Volver al inicio</Link>
      </div>
    </section>
  );
}