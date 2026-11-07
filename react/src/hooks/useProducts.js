import { useEffect, useState } from "react";

// Custom hook para cargar los productos desde la API.
//
// MUY IMPORTANTE:
// - Aquí solo se define la estructura básica del hook.
// - La lógica real de llamada a la API, manejo de errores y estados
//   debe ser implementada por el alumno.

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO:
    // - Llamar aquí a GET /api/productos.
    // - Actualizar `loading`, `error` y `products` según el resultado.
  }, []);

  return {
    products,
    loading,
    error,
    setProducts,
    setLoading,
    setError,
  };
}
