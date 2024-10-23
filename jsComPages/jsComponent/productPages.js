// تابع برای نمایش جزئیات بیشتر محصول
function showProductDetails(product) {
	let productDetails = `
        <div class="custom-product-details-overlay"></div> <!-- اضافه کردن یک لایه تیره پشت جزئیات -->
        <div class="custom-product-details">
            <img src="${product.image}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <p class="custom-description">${product.description}</p>
            <p class="custom-price">Price: $${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="custom-close-details">Close</button>
        </div>
    `;

	// افزودن جزئیات محصول به یک بخش مشخص
	let detailsContainer = document.getElementById("productPage");
	detailsContainer.innerHTML = productDetails;
	detailsContainer.style.display = "block"; // نمایش بخش جزئیات

	// جلوگیری از بسته شدن جزئیات هنگام کلیک داخل آن
	let productDetailsDiv = document.querySelector(".custom-product-details");
	productDetailsDiv.addEventListener("click", function (event) {
		event.stopPropagation(); // جلوگیری از رسیدن کلیک به سند (document)
	});

	// افزودن رویداد برای بستن جزئیات با کلیک روی دکمه بستن
	let closeButton = document.querySelector(".custom-close-details");
	closeButton.addEventListener("click", () => {
		detailsContainer.style.display = "none"; // بستن بخش جزئیات
	});

	// افزودن رویداد برای بستن جزئیات با کلیک روی لایه تیره
	let overlay = document.querySelector(".custom-product-details-overlay");
	overlay.addEventListener("click", () => {
		detailsContainer.style.display = "none"; // بستن بخش جزئیات
	});

	// رویداد برای اضافه کردن به سبد خرید از صفحه جزئیات محصول
	let addToCartButton = document.querySelector(
		".custom-product-details .add-to-cart",
	);
	addToCartButton.addEventListener("click", (event) => {
		event.stopPropagation(); // جلوگیری از اجرای رویداد کلیک روی سایر عناصر
		addToBasket(product); // محصول را به سبد خرید اضافه می‌کنیم
		renderBasket(); // نمایش به‌روزرسانی‌شده سبد خرید
	});
}
