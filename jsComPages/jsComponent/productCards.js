function ProductCards(products) {
	loadShow(); // نمایش لودر هنگام شروع بارگذاری محصولات

	let cards = document.getElementById("ProductCard");
	cards.innerHTML = ""; // پاک کردن محتوای قبلی
	category(); // فراخوانی تابع category

	let productContainer = `<div class="product-container"></div>`;
	cards.innerHTML += productContainer; // دکمه‌های کتگوری حفظ می‌شوند

	// انتخاب container برای کارت‌ها
	let container = document.querySelector(".product-container");

	// حلقه روی محصولات و ساخت کارت‌ها
	products.forEach((product, index) => {
		let productCard = `
            <div class="product-card" data-index="${index}">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
		// افزودن کارت‌ها به container
		container.innerHTML += productCard;
	});

	// product page
	let productCards = document.querySelectorAll(".product-card");
	productCards.forEach((card, index) => {
		card.addEventListener("click", () => {
			showProductDetails(products[index].id); // نمایش اطلاعات بیشتر محصول با استفاده از ID
		});
	});

	let addToCartButtons = document.querySelectorAll(".add-to-cart");
	addToCartButtons.forEach((button, index) => {
		button.addEventListener("click", (event) => {
			event.stopPropagation(); // جلوگیری از اجرای رویداد کلیک روی کارت
			addToBasket(products[index]); // محصول را به سبد خرید اضافه می‌کنیم
		});
	});

	loadHide(); // مخفی کردن لودر پس از اتمام بارگذاری محصولات
}
