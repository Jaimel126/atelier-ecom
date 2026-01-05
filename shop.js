// Shop.js
fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products-container");
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "border p-4 rounded shadow hover:shadow-lg transition";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4 rounded">
        <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
        <p class="text-gray-700 mb-2">$${product.price}</p>
        <button class="bg-black text-white px-4 py-2 uppercase text-sm hover:bg-gray-800"
  onclick="addToCart(${product.id})">
  Add to Cart
</button>

      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load products:", err));

function addToCart(id) {
  fetch("data/products.json")
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === id);
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
    });
}
