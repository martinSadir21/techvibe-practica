// =============================================================================
// PASO 2 · api/client.js — el cliente de la API (copiar y pegar, 2 minutos)
// -----------------------------------------------------------------------------
// apiFetch: hace el fetch, y si la respuesta NO es ok (404, 500) tira un Error
//   con el mensaje del servidor → los hooks lo atrapan en el catch.
// formatPrice: la vanilla muestra precios con `$${x.toLocaleString('es-AR')}`
//   → esta función hace exactamente eso. Se usa en tarjeta, detalle y carrito.
// =============================================================================
export const API_BASE_URL = "http://localhost:3000/api";

export async function apiFetch(path, options = {}) {
  const { method = "GET", body } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const error = new Error(data.error || data.message || `Error ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export const formatPrice = (value) => `$${value.toLocaleString("es-AR")}`;

// ✅ PASO 2 TERMINADO → commit: git commit -m "feat: cliente api"
// ➡️ SIGUIENTE (PASO 3): hooks/useProducts.js
