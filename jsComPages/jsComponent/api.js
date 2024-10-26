// لینک‌های API
const apiLinks = {
	jewelery: "https://fakestoreapi.com/products/category/jewelery",
	womenClothing:
		"https://fakestoreapi.com/products/category/women's%20clothing",
	menClothing: "https://fakestoreapi.com/products/category/men's%20clothing",
};

// تابع برای دریافت داده‌های جواهرات
async function fetchJewelery() {
	const response = await fetch(apiLinks.jewelery);
	if (!response.ok) {
		throw new Error("خطا در دریافت داده‌های جواهرات");
	}
	return response.json();
}
// تابع برای دریافت داده‌های لباس زنانه
async function fetchWomenClothing() {
	const response = await fetch(apiLinks.womenClothing);
	if (!response.ok) {
		throw new Error("خطا در دریافت داده‌های لباس زنانه");
	}
	return response.json(); // اطمینان حاصل کنید که این خط به درستی کار می‌کند
}

// تابع برای دریافت داده‌های لباس مردانه
async function fetchMenClothing() {
	const response = await fetch(apiLinks.menClothing);
	if (!response.ok) {
		throw new Error("خطا در دریافت داده‌های لباس مردانه");
	}
	return response.json(); // اطمینان حاصل کنید که این خط به درستی کار می‌کند
}

// تابع برای دریافت تمام محصولات
async function fetchAllProducts() {
	try {
		const [jeweleryData, womenClothingData, menClothingData] =
			await Promise.all([
				fetchJewelery(),
				fetchWomenClothing(),
				fetchMenClothing(),
			]);

		console.log("Fetched products:", [
			...jeweleryData,
			...womenClothingData,
			...menClothingData,
		]);

		return [...jeweleryData, ...womenClothingData, ...menClothingData];
	} catch (error) {
		console.error("Error fetching products:", error);
		return []; // برگرداندن آرایه خالی در صورت خطا
	}
}
