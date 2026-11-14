import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

// Componente raíz de la SPA.
// AQUÍ debes definir las rutas principales usando React Router.
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
