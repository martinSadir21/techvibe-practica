import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

// Custom hook para cargar los productos desde la API.
//
// MUY IMPORTANTE:
// - Aquí solo se define la estructura básica del hook.
// - La lógica real de llamada a la API, manejo de errores y estados
//   debe ser implementada por el alumno.

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiFetch("/productos");
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
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
