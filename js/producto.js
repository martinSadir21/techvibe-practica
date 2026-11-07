const API_URL = 'http://localhost:3000/api/productos';
const STORAGE_KEY = 'techvibe_cart';

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getStoredCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const badge = document.getElementById('cart-counter');
  if (badge) badge.textContent = totalCount;
}

async function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const detailEl = document.getElementById('product-detail');

  if (!id) {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    errorEl.textContent = 'Parámetro de producto no provisto.';
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error(`Producto no encontrado (${res.status})`);
    const product = await res.json();

    loadingEl.style.display = 'none';
    detailEl.style.display = 'grid';

    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-img').alt = product.name;
    document.getElementById('detail-tag').textContent = product.tag;
    document.getElementById('detail-category').textContent = `Categoría: ${product.category}`;
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-price').textContent = `$${product.price.toLocaleString('es-AR')}`;
    document.getElementById('detail-rating').textContent = `★ ${product.rating} / 5`;
    document.getElementById('detail-desc').textContent = product.description;
    document.getElementById('detail-stock').textContent = `${product.stock} unidades en stock`;

    const specsList = document.getElementById('detail-specs');
    specsList.innerHTML = '';
    if (product.specs) {
      Object.entries(product.specs).forEach(([key, val]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key.toUpperCase()}:</strong> <span>${val}</span>`;
        specsList.appendChild(li);
      });
    }

    const btnAdd = document.getElementById('btn-add-cart');
    btnAdd.addEventListener('click', () => {
      const cart = getStoredCart();
      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        if (existing.quantity >= product.stock) {
          alert('Has alcanzado el límite de stock disponible para este producto.');
          return;
        }
        existing.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          stock: product.stock,
          quantity: 1
        });
      }

      saveCart(cart);
      alert(`¡"${product.name}" agregado al carrito!`);
    });
  } catch (err) {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    errorEl.textContent = `Error: ${err.message}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  loadProductDetail();
});
