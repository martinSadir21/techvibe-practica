import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";

// Componente raíz de la SPA.
// AQUÍ debes definir las rutas principales usando React Router.
export default function App() {
  return (
    <Layout>
      {/*
        Ejemplo:

        // 1) Ruta principal de catálogo:
        //    - path: "/"
        //    - componente: HomePage
        //
        // 2) Ruta de detalle de producto:
        //    - path: "/productos/:id"
        //    - componente: ProductDetailPage
        //
        // 3) Ruta del carrito de compras:
        //    - path: "/carrito"
        //    - componente: CartPage
        //
        // 4) Ruta comodín para 404:
        //    - path: "*"
        //    - componente: página de "no encontrado"

        Sustituye este comentario por tu propia configuración de rutas.
      */}
    </Layout>
  );
}
