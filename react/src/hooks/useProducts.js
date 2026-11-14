// =============================================================================
// PASO 3 · hooks/useProducts.js — trae TODOS los productos
// -----------------------------------------------------------------------------
// Las 3 preguntas → "¿de dónde vienen los datos?" → el fetch de app.js → este hook.
// ⚠️ El esqueleto traía loading en false → va en TRUE (la página arranca cargando).
// [] al final del useEffect = se ejecuta UNA vez, al entrar a la página.
// =============================================================================
import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

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
        setLoading(false); // termina bien o mal → deja de cargar
      }
    };
    getData();
  }, []);

  return { products, loading, error, setProducts, setLoading, setError };
}

// ➡️ SIGUIENTE: components/ProductCard.jsx
