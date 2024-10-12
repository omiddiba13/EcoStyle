function About() {
	innerHTML = "";
	const about = document.getElementById("aboutSction");
	const swiper = document.getElementById("swiperSection");
	document.getElementById("ProductCard").style.display = "none";
	swiper.style.display = "none";

	document.getElementById("contactPage").style.display = "none";
	// برای نمایش بخش "درباره ما"
	about.style.display = "block"; // استفاده از 'block' به جای 'show'

	about.innerHTML = `
<section class="aboutCont">
    <div class="aboutContent">
        <h2 id="aboutUsH2">درباره ما</h2>
        <p id="aboutUsText"></p>
    </div>
</section>


        
    `;

	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}
