# TechVibe resuelto — guía para seguir el código

Abrí los archivos **en este orden**. Cada uno arranca con un comentario `PASO N` (qué es y de dónde sale de la vanilla) y termina con `➡️ SIGUIENTE`, que te dice cuál abrir después.

## Mapa del proyecto (lo que se arma en los primeros 5 minutos)
| Vanilla | Página React | Hook | Componentes |
|---|---|---|---|
| `index.html` + `js/app.js` | `HomePage` (`/`) | `useProducts` (fetch lista) | `HeroSection`, `ProductCard` (forEach), `NewsletterSection` |
| `producto.html` + `js/producto.js` | `ProductDetailPage` (`/productos/:id`) | `useProductDetail` (fetch uno) | `SpecsList` (forEach de specs) |
| `carrito.html` + `js/carrito.js` | `CartPage` (`/carrito`) | — (lee del context) | `CartTable` (forEach de filas), `CartSummary` |
| — | `NotFoundPage` (`*`) | — | — |
| `localStorage` en producto.js y carrito.js | `CartContext` + `useCart` | | |
| `<header>` / `<footer>` iguales en los 3 .html | `Layout` + `Navbar` | | |

## Orden de los pasos
| Paso | Archivos (en orden) | Commit |
|---|---|---|
| 1 · Rutas y marco | `main.jsx` → `App.jsx` → `components/Layout.jsx` → `components/Navbar.jsx` → `pages/NotFoundPage.jsx` | `feat: rutas, navbar con NavLink y 404` |
| 2 · Cliente API | `api/client.js` | `feat: cliente api` |
| 3 · Catálogo | `hooks/useProducts.js` → `components/ProductCard.jsx` → `components/HeroSection.jsx` → `components/NewsletterSection.jsx` → `pages/HomePage.jsx` | `feat: catalogo con hero, estados y tarjetas` |
| 4 · Context (25 pts) | `context/CartContext.jsx` → `hooks/useCart.js` | `feat: context del carrito con stock, envio y localStorage` |
| 5 · Detalle | `hooks/useProductDetail.js` → `components/SpecsList.jsx` → `pages/ProductDetailPage.jsx` | `feat: detalle de producto y agregar al carrito` |
| 6 · Carrito | `components/CartTable.jsx` → `components/CartSummary.jsx` → `pages/CartPage.jsx` | `feat: carrito con tabla, cantidades, envio y resumen` |
| 7 · Cierre | checklist de abajo | `chore: limpieza final` + `git push` |

## Qué te faltaba o estaba mal en tu versión (para no repetirlo)
| Dónde | Problema | Arreglo |
|---|---|---|
| `HomePage.jsx` | importaba `NewSletter.jsx` pero el archivo era `NewsLetter.jsx` | En Windows anda, en Linux (o en la compu del profe) **no compila**. Los nombres tienen que ser idénticos, mayúsculas incluidas. Renombrado a `NewsletterSection.jsx`. |
| `HomePage.jsx` | `<div className="products-grid"></div>` vacío del esqueleto, subtítulo del esqueleto, faltaban `<hr className="divider" />` e `id="catalogo"` | Borrado / copiado de `index.html`. |
| `CartContext.jsx` | `addToCart` no controlaba el stock ni mostraba los alerts | Copiado del click de `producto.js`: tope de stock + `alert` de "agregado". |
| `ProductDetailPage.jsx` | faltaban `detail-image-box` / `detail-info` (las dos columnas), tag, categoría y rating; badge con `badgeVariant` (eso era de DevCourses) | Pegado el `<article>` de `producto.html` y llenado id por id. |
| `CartPage.jsx` | vacío | Tabla + resumen + vaciar (`CartTable`, `CartSummary`: los nombra la rúbrica). |
| `Layout.jsx` | la rúbrica nombra `Navbar` | `<header>` separado en `Navbar.jsx`. Logo con `Link`. |
| Terminal | `git commit "msg"` sin `-m` → error y el commit no se hace | `git commit -m "msg"`. |

## Checklist final (paso 7)
- [ ] `npm run dev` compila y la consola (F12) no tiene rojo
- [ ] `git status`: ningún archivo de la vanilla modificado
- [ ] "Catálogo" se marca solo en `/` · el badge suma unidades
- [ ] Home: cargando → 8 tarjetas · con el server apagado → error
- [ ] Detalle: todo completo · "Agregar" suma (y frena en el stock) · `/productos/999` → error
- [ ] Carrito: vacío · + / − (en 1 lo saca) · 🗑️ · envío "Gratis" desde $100.000, $4.500 si es menos · Vaciar con confirm
- [ ] F5 en cualquier página → el carrito sigue
- [ ] `/cualquier-cosa` → 404
- [ ] Tabla de conexiones del context: todo usado (está al final de `CartContext.jsx`)
- [ ] Sin TODO, `console.warn`, `<pre>`, código comentado ni imports sin usar
- [ ] Shift+Alt+F en cada archivo · `git commit -m "..."` · `git push`
