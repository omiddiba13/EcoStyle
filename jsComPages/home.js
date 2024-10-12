function home() {
	document.getElementById("aboutSction").style.display = "none";
	document.getElementById("contactPage").style.display = "none";
	document.getElementById("ProductCard").style.display = "block";
	swiper();
	category();
	ProductCards();
	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}

// استفاده از DOMContentLoaded برای اجرای تابع home
document.addEventListener("DOMContentLoaded", function () {
	home();
});
