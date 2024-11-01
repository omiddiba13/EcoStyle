function About() {
	// پاک کردن محتوای فعلی
	const about = document.getElementById("aboutSction");
	const swiper = document.getElementById("swiperSection");
	const productCard = document.getElementById("ProductCard");
	const contactPage = document.getElementById("contactPage");
	const shopPage = document.getElementById("shopPage");
	const controls = document.getElementById("controls");

	// اطمینان از وجود المان‌ها قبل از اعمال تغییرات
	if (productCard) {
		productCard.style.display = "none";
	}

	if (swiper) {
		swiper.style.display = "none";
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

	// برای نمایش بخش "درباره ما"
	if (about) {
		about.style.display = "block";
		about.innerHTML = `
            <section class="aboutCont">
                <div class="aboutContent">
                    <h2 id="aboutUsH2">درباره ما</h2>
                    <p id="aboutUsText"></p>
                </div>
            </section>
        `;
	}

	// مخفی کردن shopPage و controls اگر وجود دارند

	// اعمال تغییر زبان براساس زبان ذخیره‌شده در localStorage
	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}
