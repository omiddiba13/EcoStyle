function category() {
	let cards = document.getElementById("ProductCard");
	cards.innerHTML = `
       
        <div class="category no-select">
            <a onclick="jewelery()">jewelery</a>
            <a onclick="womanCategory()">woman</a>
            <a onclick="mansCategory()">man</a>
        </div>
		<div class="half-border"></div>
    `;
}

function mansCategory() {
	// واکشی داده‌های دسته‌بندی لباس مردانه
	fetch("https://fakestoreapi.com/products/category/men's clothing")
		.then((res) => res.json())
		.then((json) => {
			ProductCards(json); // ارسال داده‌های API به تابع ProductCards
		});
}

function womanCategory() {
	fetch("https://fakestoreapi.com/products/category/women's clothing")
		.then((res) => res.json())
		.then((json) => {
			ProductCards(json);
		});
}

function jewelery() {
	fetch("https://fakestoreapi.com/products/category/jewelery")
		.then((res) => res.json())
		.then((json) => {
			ProductCards(json);
		});
}
womanCategory();
