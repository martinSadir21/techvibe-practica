// =============================================================================
// PASO 1 · components/Layout.jsx — el marco fijo de todas las páginas
// -----------------------------------------------------------------------------
//   ┌ Navbar ┐   ← igual en los 3 .html (por eso va acá, una sola vez)
//   │children│   ← la página actual (la elige App.jsx según la URL)
//   └ footer ┘
// La rúbrica nombra `Navbar` → el <header> está separado en Navbar.jsx.
// El footer ya venía traducido en el esqueleto: no se tocó.
// =============================================================================
import { Navbar } from "./Navbar.jsx";

export function Layout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="store-container">
      <Navbar />

      <main>{children}</main>

      <footer className="footer">
        <hr className="footer-divider" />
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon">⚡</span>
            <span className="footer-logo-text">TechVibe Store</span>
          </div>
          <p className="footer-copy">© {currentYear} TechVibe Inc. - Examen de Migración a React</p>
        </div>
      </footer>
    </div>
  );
}
