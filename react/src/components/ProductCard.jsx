import { Link } from "react-router-dom";

// Tarjeta de producto.
// Debe reflejar la card de la versión JS vanilla (js/app.js).
//
// MUY IMPORTANTE:
// - Este componente está SOLO esbozado.
// - La estructura y el mapeo de datos reales desde `product`
//   deben ser IMPLEMENTADOS POR EL ALUMNO.

export function ProductCard({ product }) {
  // TODO:
  //  - Leer de `product` las propiedades necesarias:
  //      id, name, category, tag, price, image, description...
  //  - Construir a partir de esos datos el contenido de la tarjeta.
  //  - Incluir el enlace a la ruta de detalle `/productos/:id`.
  //
  // Pista:
  //  - Inspírate en `js/app.js` (función `loadCatalog`) para usar las mismas clases CSS.

  return (
    <article className="product-card">
      {/* TODO:
          - Reemplazar este comentario por el JSX definitivo de la tarjeta.
      */}
    </article>
  );
}
