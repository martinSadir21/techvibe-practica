// =============================================================================
// PASO 5 · components/SpecsList.jsx — especificaciones técnicas (opcional, prolijo)
// -----------------------------------------------------------------------------
// De dónde sale: en producto.js
//   Object.entries(product.specs).forEach(([key, val]) => {
//     li.innerHTML = `<strong>${key.toUpperCase()}:</strong> <span>${val}</span>`;
//   });
// specs es un OBJETO ({ conectividad: "...", bateria: "..." }), no un arreglo →
// Object.entries lo convierte en pares [clave, valor] para poder hacer .map.
// Protección: si no hay specs → mensaje (rúbrica: "renderizado condicional seguro").
// =============================================================================
export function SpecsList({ specs }) {
  if (!specs || Object.keys(specs).length === 0) {
    return <p>Sin especificaciones disponibles.</p>;
  }

  return (
    <ul className="specs-list">
      {Object.entries(specs).map(([key, val]) => (
        <li key={key}>
          <strong>{key.toUpperCase()}:</strong> <span>{val}</span>
        </li>
      ))}
    </ul>
  );
}

// ➡️ SIGUIENTE: pages/ProductDetailPage.jsx
