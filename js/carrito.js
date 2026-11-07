const STORAGE_KEY = 'techvibe_cart';
const FREE_SHIPPING_THRESHOLD = 100000;
const SHIPPING_COST = 4500;

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cart = getStoredCart();
  const counterEl = document.getElementById('cart-counter');
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (counterEl) counterEl.textContent = totalCount;

  const emptyEl = document.getElementById('cart-empty');
  const contentEl = document.getElementById('cart-content');
  const tbodyEl = document.getElementById('cart-items-body');

  if (cart.length === 0) {
    emptyEl.style.display = 'block';
    contentEl.style.display = 'none';
    tbodyEl.innerHTML = '';
    return;
  }

  emptyEl.style.display = 'none';
  contentEl.style.display = 'block';
  tbodyEl.innerHTML = '';

  let subtotal = 0;

  cart.forEach((item) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="display: flex; align-items: center; gap: 12px;">
        <img src="${item.image}" alt="${item.name}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 6px;">
        <div>
          <div style="font-weight: 600;">${item.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${item.category}</div>
        </div>
      </td>
      <td>$${item.price.toLocaleString('es-AR')}</td>
      <td>
        <div class="quantity-controls">
          <button class="btn-qty btn-minus" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="btn-qty btn-plus" data-id="${item.id}">+</button>
        </div>
      </td>
      <td style="font-weight: 600;">$${itemSubtotal.toLocaleString('es-AR')}</td>
      <td>
        <button class="btn-remove-item" data-id="${item.id}" style="background: transparent; border: none; color: #f87171; cursor: pointer; font-size: 1.1rem;">🗑️</button>
      </td>
    `;
    tbodyEl.appendChild(tr);
  });

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  document.getElementById('summary-subtotal').textContent = `$${subtotal.toLocaleString('es-AR')}`;
  document.getElementById('summary-shipping').textContent = shipping === 0 ? 'Gratis' : `$${shipping.toLocaleString('es-AR')}`;
  document.getElementById('summary-shipping').style.color = shipping === 0 ? '#34d399' : 'var(--text-main)';
  document.getElementById('summary-total').textContent = `$${total.toLocaleString('es-AR')}`;

  // Event handlers
  tbodyEl.querySelectorAll('.btn-minus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id, 10);
      let updatedCart = getStoredCart();
      const target = updatedCart.find((it) => it.id === id);
      if (target) {
        if (target.quantity > 1) {
          target.quantity -= 1;
        } else {
          updatedCart = updatedCart.filter((it) => it.id !== id);
        }
        saveCart(updatedCart);
      }
    });
  });

  tbodyEl.querySelectorAll('.btn-plus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id, 10);
      const updatedCart = getStoredCart();
      const target = updatedCart.find((it) => it.id === id);
      if (target) {
        if (target.quantity < target.stock) {
          target.quantity += 1;
          saveCart(updatedCart);
        } else {
          alert(`Stock máximo disponible alcanzado (${target.stock} unidades).`);
        }
      }
    });
  });

  tbodyEl.querySelectorAll('.btn-remove-item').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id, 10);
      const updatedCart = getStoredCart().filter((it) => it.id !== id);
      saveCart(updatedCart);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  const btnEmpty = document.getElementById('btn-empty-cart');
  if (btnEmpty) {
    btnEmpty.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        saveCart([]);
      }
    });
  }
});
