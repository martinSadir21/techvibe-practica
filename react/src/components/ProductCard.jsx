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
      <div className="card-media">
          <span className="product-tag">{product.tag}</span>
          <img src={product.image} alt={product.name} className="card-img"/>
        </div>
        <div className="card-body">
          <span className="card-category">{product.category}</span>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">{product.description}</p>
          <div className="card-footer">
            <span className="price">{product.price.toLocaleString('es-AR')}</span>
            <Link to={`/productos/${product.id}`} className="btn-add">Ver Detalle</Link>
          </div>
        </div>
    </article>
  );
}
