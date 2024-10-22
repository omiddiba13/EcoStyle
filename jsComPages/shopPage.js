async function fetchCategoryProducts(categoryUrl) {
	try {
		const response = await fetch(categoryUrl);
		const products = await response.json();
		return products;
	} catch (error) {
		console.error("Error fetching category products:", error);
		return [];
	}
}

async function fetchAllCategories() {
	const categories = [
		"https://fakestoreapi.com/products/category/men's clothing",
		"https://fakestoreapi.com/products/category/women's clothing",
		"https://fakestoreapi.com/products/category/jewelery",
	];

	const allProducts = [];
	for (const categoryUrl of categories) {
		const categoryProducts = await fetchCategoryProducts(categoryUrl);
		allProducts.push(...categoryProducts);
	}

	return allProducts;
}

let shopPage = document.getElementById("shopPage");
let shoplist = document.getElementById("shoplists");

function shop(products) {
	shopPage.style.display = "block"; // نمایش فروشگاه
	let productCards = "";

	products.forEach((product, index) => {
		let productCard = `
            <div class="product-card" data-index="${index}">
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
		productCards += productCard;
	});

	shoplist.innerHTML = productCards;
}

function sortDescending(products) {
	const sortedProducts = [...products].sort((a, b) => b.price - a.price);
	shop(sortedProducts);
}

function sortAscending(products) {
	const sortedProducts = [...products].sort((a, b) => a.price - b.price);
	shop(sortedProducts);
}

async function initializeApp() {
	const products = await fetchAllCategories();

	// بررسی وجود کنترل‌ها قبل از اضافه کردن
	if (!document.getElementById("controls")) {
		shopPage.insertAdjacentHTML(
			"beforebegin",
			`
            <div id="controls">
                <button id="sortDesc">low price</button>
                <button id="sortAsc">high price</button>
            </div>
        `,
		);

		document.getElementById("sortDesc").onclick = () =>
			sortDescending(products);
		document.getElementById("sortAsc").onclick = () => sortAscending(products);
	} else if (
		(document.getElementById("controls").style.display = "block flex")
	) {
	}

	shop(products); // نمایش فروشگاه
}

// تابعی که هر زمان بخواهید می‌توانید آن را فراخوانی کنید
async function startShop() {
	const contactPage = document.getElementById("contactPage");
	const about = document.getElementById("aboutSction");
	const swiper = document.getElementById("swiperSection");
	const productCard = document.getElementById("ProductCard");
	if (about) {
		about.style.display = "none";
	}
	if (swiper) {
		swiper.style.display = "none";
	}
	if (productCard) {
		productCard.style.display = "none";
	}
	if (contactPage) {
		contactPage.style.display = "none";
	}
	// مخفی کردن بخش دلخواه یا اجرای هر تنظیم اولیه‌ای که نیاز دارید
	await initializeApp();
}
