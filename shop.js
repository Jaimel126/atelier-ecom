<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop | COODE</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">

    <nav class="flex items-center justify-between px-8 py-6 border-b bg-white sticky top-0 z-50">
        <a href="index.html" class="text-2xl font-bold tracking-tighter">COODE</a>
        <div class="space-x-8 flex items-center">
            <a href="index.html">Home</a>
            <a href="shop.html" class="font-bold border-b-2 border-black">Shop</a>
            <a href="cart.html">Cart</a>
            <a href="about.html">About</a>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-8 py-12">
        <h1 class="text-3xl font-bold mb-10">Our Collection</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <script>
                const products = [
                    { id: 1, name: "Signature White Tee 01", color: "white", img: "https://placehold.co/400x500/ffffff/000000?text=COODE+on+Arm" },
                    { id: 2, name: "Signature White Tee 02", color: "white", img: "https://placehold.co/400x500/ffffff/000000?text=COODE+on+Arm" },
                    { id: 3, name: "Signature White Tee 03", color: "white", img: "https://placehold.co/400x500/ffffff/000000?text=COODE+on+Arm" },
                    { id: 4, name: "Signature White Tee 04", color: "white", img: "https://placehold.co/400x500/ffffff/000000?text=COODE+on+Arm" },
                    { id: 5, name: "Signature White Tee 05", color: "white", img: "https://placehold.co/400x500/ffffff/000000?text=COODE+on+Arm" },
                    { id: 6, name: "Essential Black Tee 01", color: "black", img: "https://placehold.co/400x500/000000/ffffff?text=COODE+on+Arm" },
                    { id: 7, name: "Essential Black Tee 02", color: "black", img: "https://placehold.co/400x500/000000/ffffff?text=COODE+on+Arm" },
                    { id: 8, name: "Essential Black Tee 03", color: "black", img: "https://placehold.co/400x500/000000/ffffff?text=COODE+on+Arm" },
                    { id: 9, name: "Essential Black Tee 04", color: "black", img: "https://placehold.co/400x500/000000/ffffff?text=COODE+on+Arm" },
                    { id: 10, name: "Essential Black Tee 05", color: "black", img: "https://placehold.co/400x500/000000/ffffff?text=COODE+on+Arm" },
                ];

                document.write(products.map(p => `
                    <div class="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-80 object-cover">
                        <div class="p-4">
                            <h3 class="font-medium text-gray-900">${p.name}</h3>
                            <p class="text-gray-500 mt-1">$9.99</p>
                        </div>
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button onclick="addToCart('${p.name}', 9.99)" class="bg-black text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">Add to Cart</button>
                        </div>
                    </div>
                `).join(''));

                function addToCart(name, price) {
                    let cart = JSON.parse(localStorage.getItem('coode_cart')) || [];
                    const index = cart.findIndex(item => item.name === name);
                    if(index > -1) {
                        cart[index].qty += 1;
                    } else {
                        cart.push({ name, price, qty: 1 });
                    }
                    localStorage.setItem('coode_cart', JSON.stringify(cart));
                    alert('Added to cart!');
                }
            </script>
        </div>
    </main>
</body>
</html>
