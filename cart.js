let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * (item.quantity || 1);

    const div = document.createElement("div");
    div.className = "flex justify-between items-center border p-4 rounded shadow";
    div.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded">
        <div>
          <h3 class="font-semibold">${item.name}</h3>
          <p>$${item.price} x 
            <button class="bg-gray-300 px-2" onclick="decreaseQty(${index})">-</button>
            <span>${item.quantity || 1}</span>
            <button class="bg-gray-300 px-2" onclick="increaseQty(${index})">+</button>
          </p>
        </div>
      </div>
      <button class="bg-red-500 text-white px-4 py-2 rounded" onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Quantity functions
function increaseQty(index) {
  cart[index].quantity = (cart[index].quantity || 1) + 1;
  renderCart();
}

function decreaseQty(index) {
  if ((cart[index].quantity || 1) > 1) {
    cart[index].quantity -= 1;
  } else {
    removeItem(index);
    return;
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  alert(`Thank you for your order! Total: $${cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2)}`);
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
});

// Initial render
renderCart();
