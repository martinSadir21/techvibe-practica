// =============================================================================
// PASO 5 · hooks/useProductDetail.js — trae UN producto por id (archivo NUEVO)
// -----------------------------------------------------------------------------
// Es useProducts con 4 cambios:
//   1) recibe `id`   2) useState(null) (es UNO, no una lista)
//   3) ruta con id   4) dependencias [id] (si cambia el id, vuelve a buscar)
// La rúbrica no lo nombra, pero pide "lógica asíncrona en hooks": cada fetch → un hook.
// Si el id no existe, la API devuelve 404 → apiFetch tira error → cae en el catch.
// =============================================================================
import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

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

  return { product, loading, error };
}

// ➡️ SIGUIENTE: components/SpecsList.jsx (la lista dentro del detalle)
