import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

// Custom hook para cargar los productos desde la API.
//
// MUY IMPORTANTE:
// - Aquí solo se define la estructura básica del hook.
// - La lógica real de llamada a la API, manejo de errores y estados
//   debe ser implementada por el alumno.

export function useProductDetail(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
        setLoading(true);
      setError(null);
      try {
        const data = await apiFetch(`/productos/${id}`);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}
