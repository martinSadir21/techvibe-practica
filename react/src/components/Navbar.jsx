// =============================================================================
// PASO 1 · components/Navbar.jsx — la barra de navegación (la nombra la rúbrica)
// -----------------------------------------------------------------------------
// De dónde sale: el <header class="navbar"> de index.html, traducido.
//
// ¿NavLink o Link? → Ctrl+F "active" en los .html:
//   - "Catálogo" tiene `active` en index.html y NO en producto/carrito.html
//     → cambia según la página → NavLink (+ `end`, porque es "/").
//   - Logo y Carrito → van a otra página pero nunca tienen `active` → Link.
//   - "Contacto" → href="#contacto" salta dentro de la misma página → queda <a>.
//
// Badge: Ctrl+F "cart-counter" en app.js → la vanilla calcula
//   cart.reduce((acc, item) => acc + item.quantity, 0)   ← UNIDADES, no productos
//   → se copia tal cual. Funciona recién cuando el context (PASO 4) está hecho.
// =============================================================================
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";

export function Navbar() {
  const { cart } = useCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-icon">⚡</span>
        <Link to="/" className="logo-text">TechVibe</Link>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Catálogo
        </NavLink>
        <a href="#contacto" className="nav-link">Contacto</a>
      </nav>

      <div className="nav-actions">
        <Link to="/carrito" className="btn-cart">
          🛒 Carrito <span className="cart-badge">{totalCount}</span>
        </Link>
      </div>
    </header>
  );
}
