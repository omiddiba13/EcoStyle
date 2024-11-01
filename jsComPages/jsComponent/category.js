function category() {
	let cards = document.getElementById("ProductCard");
	cards.innerHTML = `
        <div class="category no-select">
            <a onclick="fetchJewelery()">jewelery</a>
            <a onclick="fetchWomenClothing()">woman</a>
            <a onclick="fetchMenClothing()">man</a>
        </div>
        <div class="half-border"></div>
    `;
}

// تابع برای نمایش محصولات
function ProductCards(products) {
	const cardsContainer = document.getElementById("ProductCard");
	cardsContainer.innerHTML += products
		.map(
			(product) => `
        <div class="product-card">
            <h3>${product.title}</h3>
            <p>قیمت: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" width="100">
        </div>
    `,
		)
		.join("");
}

// تابع برای دریافت داده‌های جواهرات
async function fetchJewelery() {
	loadShow();
	const response = await fetch(apiLinks.jewelery);
	const data = await response.json();
	ProductCards(data);
	loadHide();
}

// تابع برای دریافت داده‌های لباس زنانه
async function fetchWomenClothing() {
	loadShow();
	const response = await fetch(apiLinks.womenClothing);
	const data = await response.json();
	ProductCards(data);
	loadHide();
}

// تابع برای دریافت داده‌های لباس مردانه
async function fetchMenClothing() {
	loadShow();
	const response = await fetch(apiLinks.menClothing);
	const data = await response.json();
	ProductCards(data);
	loadHide();
}

// بارگذاری دسته‌بندی لباس زنانه به‌صورت پیش‌فرض
fetchWomenClothing();
