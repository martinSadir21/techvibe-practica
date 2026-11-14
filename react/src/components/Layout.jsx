import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";

// Layout principal de la app.
// Incluye cabecera, navegación básica y pie de página.
//
// MUY IMPORTANTE:
// - Este componente está SOLO esbozado.
// - Debes integrar la navegación con <Link> y mostrar el contador de unidades
//   del carrito consumiendo el contexto correspondiente.

export function Layout({ children }) {
  const currentYear = new Date().getFullYear();

  // para el badge/contador
  const { cart } = useCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const claseLink = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <div className="store-container">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechVibe</span>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end className={claseLink}>Catálogo</NavLink>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>
        <div className="nav-actions">
          <NavLink
              to="/carrito"
              className="btn-cart"
            >
              🛒 Carrito <span className="cart-badge">{totalCount}</span>
            </NavLink>
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
