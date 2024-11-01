function contactUsPage() {
	loadShow();

	// دریافت المان‌های DOM
	const contactPage = document.getElementById("contactPage");
	const about = document.getElementById("aboutSection");
	const swiper = document.getElementById("swiperSection");
	const productCard = document.getElementById("ProductCard");
	const shopPage = document.getElementById("shopPage");
	const controls = document.getElementById("controls");

	// مخفی کردن سایر بخش‌ها
	[about, swiper, productCard, shopPage, controls].forEach((section) => {
		if (section) {
			section.style.display = "none";
		}
	});

	// نمایش صفحه تماس
	if (contactPage) {
		contactPage.style.display = "block";
		// اضافه کردن محتوای صفحه تماس
		contactPage.innerHTML = `
			<div class="contactMain"> 
				<div class="contactCONtent"> 
					<h1 id="contactUSh1"></h1>
					<hr /> 
					<p id="contactUSp"></p>
					<p><strong id="contactNUM"></strong> +123 456 7890</p>
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25917.204960451912!2d51.32120728013809!3d35.71021434777307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2suk!4v1726613311478!5m2!1sen!2suk" 
						width="400" 
						height="300" 
						style="border:0;" 
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</div>    
		`;
	}

	// اعمال تغییر زبان بر اساس زبان ذخیره‌شده
	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}
