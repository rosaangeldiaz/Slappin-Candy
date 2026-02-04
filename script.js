// Load cart from localStorage or start empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  alert(name + " added to cart!");
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

// Display cart items (for cart.html)
function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (!cartItemsContainer || !totalEl) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
    total += item.price;
  });

  totalEl.textContent = "Total: $" + total.toFixed(2);
}

// Display cart summary (for checkout.html)
function displayCheckoutCart() {
  const summary = document.getElementById("order-summary");
  const totalEl = document.getElementById("checkout-total");

  if (!summary || !totalEl) return;

  summary.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    summary.appendChild(p);
    total += item.price;
  });

  totalEl.textContent = "Order Total: $" + total.toFixed(2);
}