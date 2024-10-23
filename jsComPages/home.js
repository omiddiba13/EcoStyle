function home() {
	// دریافت المان‌های DOM
	const aboutSection = document.getElementById("aboutSction");
	const contactPage = document.getElementById("contactPage");
	const shopPage = document.getElementById("shopPage");
	const controls = document.getElementById("controls");
	const productCard = document.getElementById("ProductCard");

	// مخفی کردن سایر بخش‌ها
	if (aboutSection) {
		aboutSection.style.display = "none";
	}
	if (contactPage) {
		contactPage.style.display = "none";
	}
	if (shopPage) {
		shopPage.style.display = "none";
	}
	if (controls) {
		controls.style.display = "none";
	}
	if (productCard) {
		productCard.style.display = "block";
	}

	// اجرای توابع مربوط به صفحه اصلی
	swiper();
	category();
	womanCategory();
	ProductCards();
	showProductDetails(product);

	// اعمال تغییر زبان بر اساس زبان ذخیره‌شده
	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}

// استفاده از DOMContentLoaded برای اجرای تابع home
document.addEventListener("DOMContentLoaded", function () {
	home();
});
