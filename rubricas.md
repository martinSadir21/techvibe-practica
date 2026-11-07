## Rúbrica de Evaluación - Examen React TechVibe

Puntaje total: **100 puntos**.  
Nota mínima de aprobación: **60 puntos** (cumpliendo además con los requisitos de no desaprobación automática).

---

### 1. Routing y SPA (20 pts)
- **Configuración de React Router (8 pts)**: Estructura clara de rutas en la aplicación (`/`, `/productos/:id`, `/carrito`). Empleo correcto de `BrowserRouter`, `Routes` y `Route`.
- **Navegación fluida sin recargas (6 pts)**: Uso exclusivo de `<Link>` y/o `useNavigate` para navegar entre el catálogo, detalle y carrito sin recargar la página.
- **Ruta paramétrica (4 pts)**: Extracción limpia del parámetro dinámico `id` mediante el hook `useParams` en la vista de detalle de producto.
- **Ruta 404 Not Found (2 pts)**: Implementación de una ruta wildcard (`path="*"`) que captura rutas desconocidas y ofrece navegación de regreso.

---

### 2. Consumo de API y Estado (20 pts)
- **Integración con Endpoints REST (7 pts)**: Peticiones asíncronas correctas mediante `fetch` a `http://localhost:3000/api/productos` y `http://localhost:3000/api/productos/:id`.
- **Manejo del ciclo de vida asíncrono (5 pts)**: Ejecución controlada dentro de `useEffect` con dependencias correctas para evitar renders infinitos.
- **Manejo de los tres estados de red (8 pts)**:
  - Renderizado explícito de spinner o mensaje de carga (`loading`).
  - Renderizado exitoso de los productos al completarse la petición (`data`).
  - Manejo adecuado de excepciones y feedback visual de error ante fallos de conexión (`error`).

---

### 3. Páginas y Componentes Principales (20 pts)
- **Modularización y Reutilización (8 pts)**: División de la interfaz en componentes claros (`Navbar`, `HeroSection`, `ProductCard`, `CartTable`, `CartSummary`, etc.).
- **Fidelidad con la versión vanilla (6 pts)**: Respeto de la disposición visual, tarjetas de producto, botones de acción y tipografía de referencia.
- **Renderizado condicional y de listas (6 pts)**: Uso adecuado de `.map()`, prop `key` única y renderizado condicional seguro (ej. tabla de carrito vs. aviso amigable de carrito vacío).

---

### 4. Característica Especial: Carrito de Compras / Context API (25 pts)
- **Arquitectura de Contexto (8 pts)**: Implementación de `CartContext` y `CartProvider` proveyendo estado y funciones mutadoras sin acoplamiento indebido.
- **Lógica de negocio y casos borde validados (9 pts)**:
  - Capacidad de agregar productos acumulando cantidades sin superar el stock disponible.
  - Modificación interactiva de cantidades (+ / -) con control para evitar cantidades ≤ 0, eliminación por ítem y botón de vaciar carrito completo.
  - Manejo estricto de casos borde en totales: subtotal, envío condicional (gratis ≥ $100.000, $4.500 si es menor) y $0 total cuando el carrito está vacío.
  - Sincronización en tiempo real del badge numérico en la Navbar.
- **Sincronización con LocalStorage (8 pts)**: Carga inicial segura del carrito desde `localStorage` y persistencia automática ante cualquier alteración del estado global.

---

### 5. Custom Hooks y Código Limpio (15 pts)
- **Extracción a Custom Hooks (8 pts)**: Modularización de lógica asíncrona o de negocio en hooks personalizados (ej. `useProducts`, `useFetch`, `useCart`).
- **Buenas prácticas y legibilidad (5 pts)**: Nombres de variables y funciones semánticos, prolijidad de código, estructura ordenada en `src/`.
- **Ausencia de manipulación imperativa del DOM (2 pts)**: Prohibición total de `document.getElementById`, `querySelector` o similares dentro del ecosistema React.

---

### 6. Criterios de Desaprobación Automática (Orientativa)
El examen se considerará **no aprobado** si se comete alguna de las siguientes faltas críticas:
- La aplicación no compila o la consola de desarrollo reporta errores fatales al ejecutar `npm run dev`.
- La aplicación realiza recargas completas de ventana al navegar (no funciona como SPA).
- No se realiza consumo asíncrono a la API y en su lugar se importan los datos de forma estática directamente en el código de React.
- Se detecta manipulación directa del DOM de JavaScript tradicional en los componentes de React.
- Modificar o suprimir los archivos de la versión Vanilla JS entregada como referencia.