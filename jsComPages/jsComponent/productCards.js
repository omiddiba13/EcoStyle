function ProductCards(products) {
	let cards = document.getElementById("ProductCard");
	innerHTML = "";
	category();
	// فقط محتوای کارت‌ها را پاک می‌کنیم
	let productContainer = `<div class="product-container"></div>`;
	cards.innerHTML += productContainer; // دکمه‌های کتگوری حفظ می‌شوند

	// انتخاب container برای کارت‌ها
	let container = document.querySelector(".product-container");

	// حلقه روی محصولات و ساخت کارت‌ها
	products.forEach((product) => {
		let productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
		// افزودن کارت‌ها به container
		container.innerHTML += productCard; // فقط کارت‌ها را به container اضافه می‌کنیم
	});
}
