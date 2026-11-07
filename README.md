## Examen Práctico - React TechVibe

**Objetivo general**  
Migrar la tienda online de tecnología "TechVibe" (desarrollada en JavaScript vanilla) a una **Single Page Application (SPA) en React**, consumiendo una API local y ofreciendo una experiencia fluida de comercio electrónico con carrito interactivo.

---

### 1. Qué hay en el repo

- **Versión de referencia (NO modificar)**: `index.html` (portada y catálogo general), `producto.html` (ficha de producto), `carrito.html` (carrito de compras y resumen), `css/` y `js/`.
- **API Mock en Express**: Carpeta `server/` que expone el catálogo de gadgets desde `data/productos.json` en el puerto `3000`.
- **Proyecto React base**: Carpeta `react/` con un entorno inicial basado en Vite y React 18+.
- **Integración de estilos CSS**: Los estilos de la versión de referencia ya están incluidos e importados en el proyecto base (`react/src/index.css`), por lo que tu aplicación React contará desde el inicio con la misma apariencia visual sin requerir pasos de configuración adicionales.

Tu tarea es recrear la experiencia de usuario de la versión vanilla en el entorno React, manteniendo el diseño estético pero abstrayendo la arquitectura en componentes, rutas y estado global.

---

### 2. Qué debe tener tu app React

- **Routing (React Router)**
  - `/` -> Catálogo inicial con sección Hero, cuadrícula de productos destacados, precios, categorías y badges de estado.
  - `/productos/:id` -> Vista de detalle paramétrica con imagen ampliada, especificaciones técnicas detalladas, stock disponible y botón para añadir al carrito.
  - `/carrito` -> Vista completa del carrito con la tabla de ítems seleccionados, selector de cantidades y desglose de costos.
  - Ruta wildcard (`*`) -> Página de error 404 personalizada con enlace de retorno a la tienda.

- **Consumo de API (fetch asíncrono)**
  - Listado de productos: `GET http://localhost:3000/api/productos`
  - Detalle por ID: `GET http://localhost:3000/api/productos/:id`
  - **Manejo de estados**: Es obligatorio reflejar explícitamente en la interfaz los tres estados de cualquier petición: carga (`loading`), éxito (`data`) y fallo (`error`).

- **Característica Especial: Carrito de Compras (Context API + LocalStorage)**
  - Implementar un contexto global (`CartContext`) para gestionar el estado de compra en toda la aplicación.
  - **Reglas de negocio**:
    - **Control de cantidades y stock**: Si el producto ya se encuentra en el carrito, al agregarlo se incrementa su cantidad sin superar el número de unidades disponibles (`stock`).
    - **Modificación interactiva y vaciado**: Posibilidad de incrementar (+), decrementar (-), eliminar un ítem específico (🗑️) o vaciar el carrito por completo mediante el botón "Vaciar Carrito".
    - **Comportamiento al decrementar (-)**: Al presionar (-) cuando la cantidad de un ítem es 1, debe eliminarse el producto del carrito (o alternativamente deshabilitar el botón (-) en 1 dejando la eliminación al botón 🗑️, pero nunca permitir cantidades 0 o negativas dentro de la lista).
    - **Cálculo de envíos y totales (Edge cases)**: La vista del carrito debe calcular reactivamente el **subtotal**, determinar el costo de **envío** (Gratis si el subtotal es igual o mayor a $100.000, o $4.500 si es menor, siempre que haya productos en el carrito; si el carrito está vacío, subtotal, envío y total deben ser $0) y calcular el **total final** a pagar.
    - **Badge permanente en Navbar**: El contador de unidades totales en el carrito debe estar visible y sincronizado en la barra de navegación en todo momento.
    - **Persistencia**: La lista del carrito debe guardarse y mantenerse en `localStorage` ante recargas o cierres del navegador.

---

### 3. React: piezas mínimas esperadas

- **Hooks fundamentales**: `useState`, `useEffect`, `useContext` y `useParams` (React Router).
- **Componentes de navegación**: `<Link>`, `<Routes>`, `<Route>`, y opcionalmente `useNavigate`.
- **Custom Hooks**:
  - `useProducts` (o `useFetch`) para modularizar la obtención de datos de la API.
  - `useCart` para consumir fácilmente el estado y las operaciones del carrito.
- **Context**: `CartContext` con su respectivo `CartProvider`.
- **Estructura de plantilla incluida en `react/src/`** (con esqueletos mínimos listos para completar):
  - `src/main.jsx`, `src/App.jsx`, `src/api/client.js`.
  - `src/components/Layout.jsx`, `src/components/ProductCard.jsx`.
  - `src/pages/HomePage.jsx`, `src/pages/ProductDetailPage.jsx`, `src/pages/CartPage.jsx`.
  - `src/context/CartContext.jsx`.
  - `src/hooks/useProducts.js`, `src/hooks/useCart.js`.

Puedes crear componentes o hooks adicionales si lo consideras necesario.

---

### 4. Cómo ejecutar todo

1. **Iniciar el servidor Mock (Backend)**
   ```bash
   cd server
   npm install
   npm run dev
   # El servidor estará activo en http://localhost:3000
   ```

2. **Iniciar el cliente React (Frontend)**
   ```bash
   cd react
   npm install
   npm run dev
   # La aplicación estará disponible en http://localhost:5173
   ```

---

### 5. Reglas básicas del examen

1. **La versión vanilla es intocable**: Los archivos fuera de `react/` sirven como especificación funcional y visual; no deben modificarse.
2. **Cero manipulación directa del DOM**: Queda prohibido el uso de `document.getElementById`, `querySelector`, `innerHTML` o similares dentro de React.
3. **Criterios de corrección**: Tu trabajo se evaluará siguiendo puntillosamente los criterios definidos en `rubricas.md`.
4. **Libertad de arquitectura interna**: Tienes plena autonomía para estructurar el árbol de carpetas dentro de `react/src/` bajo principios de código limpio y separación de responsabilidades.