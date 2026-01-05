// shop.js
let allProducts = [];

fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    allProducts = products;
    renderProducts(products);
  })
  .catch(err => console.error("Failed to load products:", err));

const container = document.getElementById("products-container");

function renderProducts(products) {
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "border p-4 rounded-xl shadow hover:shadow-2xl transition-transform transform hover:-translate-y-1";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg mb-4">
      <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
      <p class="text-gray-700 mb-4">$${product.price}</p>
      <button class="bg-black text-white px-4 py-2 uppercase text-sm hover:bg-gray-800 rounded-lg transition-colors"
        onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if(category === "All") renderProducts(allProducts);
    else renderProducts(allProducts.filter(p => p.category === category));
  });
});

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if(!product) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItem = cart.find(item => item.id === id);
  if(cartItem){
    cartItem.quantity = (cartItem.quantity || 1) + 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
