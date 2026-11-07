import { Link } from "react-router-dom";

// Layout principal de la app.
// Incluye cabecera, navegación básica y pie de página.
//
// MUY IMPORTANTE:
// - Este componente está SOLO esbozado.
// - Debes integrar la navegación con <Link> y mostrar el contador de unidades
//   del carrito consumiendo el contexto correspondiente.

export function Layout({ children }) {
  const currentYear = new Date().getFullYear();

  // TODO:
  // - Consumir el contexto del carrito (`useCart`) para obtener y mostrar
  //   la cantidad total de unidades en el badge de la barra de navegación.

  return (
    <div className="store-container">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechVibe</span>
        </div>
        <nav className="nav-links">
          {/* TODO: Agregar enlaces de navegación con <Link> */}
        </nav>
        <div className="nav-actions">
          {/* TODO: Agregar enlace a "/carrito" mostrando el badge con la cantidad total */}
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <hr className="footer-divider" />
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon">⚡</span>
            <span className="footer-logo-text">TechVibe Store</span>
          </div>
          <p className="footer-copy">
            © {currentYear} TechVibe Inc. - Examen de Migración a React
          </p>
        </div>
      </footer>
    </div>
  );
}
