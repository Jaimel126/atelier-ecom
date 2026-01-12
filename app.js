// Load Brand Configuration
fetch("data/brand.json")
  .then(response => response.json())
  .then(brand => {
    // Brand name
    document.querySelectorAll("[data-brand-name]")
      .forEach(el => el.textContent = brand.brandName);

    // Tagline
    const taglineEl = document.querySelector("[data-brand-tagline]");
    if (taglineEl) taglineEl.textContent = brand.tagline;

    // Footer
    const footerEl = document.querySelector("[data-footer]");
    if (footerEl) footerEl.textContent = brand.footerText;

    // Theme colors (CSS variables)
    document.documentElement.style.setProperty("--primary", brand.colors.primary);
    document.documentElement.style.setProperty("--secondary", brand.colors.secondary);
    document.documentElement.style.setProperty("--accent", brand.colors.accent);
  })
  .catch(error => {
    console.error("Brand config failed to load:", error);
  });
let PRODUCTS = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    PRODUCTS = data;
    renderProducts(PRODUCTS);
  })
  .catch(err => console.error("Failed to load products:", err));

function renderProducts(products) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}.00</p>

        ${
          product.sizes.length
            ? `<select class="size-select">
                <option value="">Size</option>
                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
              </select>`
            : ""
        }

        <button class="add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });
}
