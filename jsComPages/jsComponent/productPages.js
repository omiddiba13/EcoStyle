async function showProductDetails(productId) {
	// URL برای دریافت اطلاعات محصول
	const productUrl = `https://fakestoreapi.com/products/${productId}`;

	try {
		const response = await fetch(productUrl);
		const product = await response.json();

		let productDetails = `
			<div class="custom-product-details-overlay"></div>
			<div class="custom-product-details">
				<img src="${product.image}" alt="${product.title}" />
				<h2>${product.title}</h2>
				<p class="custom-description">${product.description}</p>
				<p class="custom-price">Price: $${product.price}</p>
				<button class="add-to-cart">Add to Cart</button>
				<button class="custom-close-details">Close</button>
			</div>
		`;

		let detailsContainer = document.getElementById("productPage");
		detailsContainer.innerHTML = productDetails;
		detailsContainer.style.display = "block";

		let productDetailsDiv = document.querySelector(".custom-product-details");
		productDetailsDiv.addEventListener("click", function (event) {
			event.stopPropagation(); // جلوگیری از رسیدن کلیک به سند
		});

		let closeButton = document.querySelector(".custom-close-details");
		closeButton.addEventListener("click", () => {
			detailsContainer.style.display = "none"; // بستن بخش جزئیات
		});

		let overlay = document.querySelector(".custom-product-details-overlay");
		overlay.addEventListener("click", () => {
			detailsContainer.style.display = "none"; // بستن بخش جزئیات
		});

		let addToCartButton = document.querySelector(
			".custom-product-details .add-to-cart",
		);
		addToCartButton.addEventListener("click", (event) => {
			event.stopPropagation();
			addToBasket(product); // محصول را به سبد خرید اضافه می‌کنیم
			renderBasket(); // نمایش به‌روزرسانی‌شده سبد خرید
		});
	} catch (error) {
		console.error("Error fetching product details:", error);
		alert("Failed to load product details. Please try again later.");
	}
}
