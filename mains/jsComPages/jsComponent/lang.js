"use strict";
const translations = {
	fa: {
		navbar: {
			home: "خانه",
			about: "درباره ما",
			contact: "تماس با ما",
			shop: "فروشگاه",
		},
		aboutUsPage: {
			aboutUsH2: "درباره ما",
			aboutUsText:
				"این صفحه وب توسط امید دیبا طراحی و پیاده‌سازی شده است. هدف اصلی این پروژه، انجام تست‌ها و آزمایش‌های کد برای ارتقاء دانش فنی و بهبود مهارت‌های برنامه‌نویسی بوده است.",
		},
		contactUS: {
			contactUSh1: "تماس با ما",
			contactUSp: "سلام",
			contactNUM: "شماره تماس",
		},
	},
	en: {
		navbar: {
			home: "Home",
			about: "About Us",
			contact: "Contact Us",
			shop: "Shop",
		},
		aboutUsPage: {
			aboutUsH2: "about us",
			aboutUsText:
				"This web page was designed and developed by Omid Diba. The primary purpose of this project was to conduct code testing and experiments to enhance technical knowledge and improve programming skills.",
		},
		contactUS: {
			contactUSh1: "contact Us",
			contactUSp: "hello",
			contactNUM: "number:",
		},
	},
};

function changeLanguage(lang) {
	// به‌روزرسانی متن‌های دسکتاپ
	if (document.getElementById("home")) {
		document.getElementById("home").innerText = translations[lang].navbar.home;
	}
	if (document.getElementById("about")) {
		document.getElementById("about").innerText =
			translations[lang].navbar.about;
	}
	if (document.getElementById("contact")) {
		document.getElementById("contact").innerText =
			translations[lang].navbar.contact;
	}
	if (document.getElementById("shop")) {
		document.getElementById("shop").innerText = translations[lang].navbar.shop;
	}

	// به‌روزرسانی متن‌های موبایل
	if (document.getElementById("home-mobile")) {
		document.getElementById("home-mobile").innerText =
			translations[lang].navbar.home;
	}
	if (document.getElementById("about-mobile")) {
		document.getElementById("about-mobile").innerText =
			translations[lang].navbar.about;
	}
	if (document.getElementById("contact-mobile")) {
		document.getElementById("contact-mobile").innerText =
			translations[lang].navbar.contact;
	}
	if (document.getElementById("shop-mobile")) {
		document.getElementById("shop-mobile").innerText =
			translations[lang].navbar.shop;
	}

	// about us
	if (document.getElementById("aboutUsH2")) {
		document.getElementById("aboutUsH2").innerText =
			translations[lang].aboutUsPage.aboutUsH2;
	}
	if (document.getElementById("aboutUsText")) {
		document.getElementById("aboutUsText").innerText =
			translations[lang].aboutUsPage.aboutUsText;
	}

	// contact us
	if (document.getElementById("contactUSh1")) {
		document.getElementById("contactUSh1").innerText =
			translations[lang].contactUS.contactUSh1;
	}
	if (document.getElementById("contactUSp")) {
		document.getElementById("contactUSp").innerText =
			translations[lang].contactUS.contactUSp;
	}
	if (document.getElementById("contactNUM")) {
		document.getElementById("contactNUM").innerText =
			translations[lang].contactUS.contactNUM;
	}

	// ذخیره زبان انتخابی در localStorage
	localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", function () {
	// مقدار اولیه زبان را دریافت و تنظیم می‌کنیم
	let previousLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(previousLang); // اجرا هنگام بارگذاری

	// هر 1 ثانیه یک بار زبان را بررسی می‌کنیم
	setInterval(function () {
		let currentLang = localStorage.getItem("selectedLanguage") || "en";
		if (currentLang !== previousLang) {
			changeLanguage(currentLang); // در صورت تغییر، زبان جدید اعمال می‌شود
			previousLang = currentLang; // به‌روزرسانی مقدار قبلی
		}
	}, 1000); // اجرا هر 1 ثانیه (1000 میلی‌ثانیه)
});
