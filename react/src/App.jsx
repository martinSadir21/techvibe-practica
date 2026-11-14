// =============================================================================
// PASO 1 · App.jsx — las rutas
// -----------------------------------------------------------------------------
// Una <Route> por cada .html de la vanilla + la 404:
//   index.html    → "/"               → HomePage
//   producto.html → "/productos/:id"  → ProductDetailPage   (producto.html?id=3 → /productos/3)
//   carrito.html  → "/carrito"        → CartPage
//   (no existe)   → "*"               → NotFoundPage (la pide la rúbrica)
// De dónde salen los paths: del comentario que traía este archivo y del README.
// Las <Routes> van ADENTRO de <Layout>: así la navbar y el footer se ven en
// todas las páginas, y la página actual ocupa el lugar de {children}.
// =============================================================================
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos/:id" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

// ➡️ SIGUIENTE: components/Layout.jsx y components/Navbar.jsx
