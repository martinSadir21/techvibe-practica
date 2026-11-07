const API_URL = 'http://localhost:3000/api/productos';
const STORAGE_KEY = 'techvibe_cart';

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function updateCartBadge() {
  const cart = getStoredCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const badge = document.getElementById('cart-counter');
  if (badge) badge.textContent = totalCount;
}

// hook
async function loadCatalog() {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const gridEl = document.getElementById('products-grid');

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
    const products = await res.json();

    loadingEl.style.display = 'none';
    gridEl.style.display = 'grid';
    gridEl.innerHTML = '';

    products.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="card-media">
          <span class="product-tag">${p.tag}</span>
          <img src="${p.image}" alt="${p.name}" class="card-img">
        </div>
        <div class="card-body">
          <span class="card-category">${p.category}</span>
          <h3 class="card-title">${p.name}</h3>
          <p class="card-description">${p.description}</p>
          <div class="card-footer">
            <span class="price">$${p.price.toLocaleString('es-AR')}</span>
            <a href="producto.html?id=${p.id}" class="btn-add" style="text-align: center; text-decoration: none;">Ver Detalle</a>
          </div>
        </div>
      `;
      gridEl.appendChild(card);
    });
  } catch (err) {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    errorEl.textContent = `No se pudieron cargar los productos: ${err.message}. Verifica que el servidor mock esté corriendo en http://localhost:3000.`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  loadCatalog();
});
