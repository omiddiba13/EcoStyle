function About() {
	innerHTML = "";
	const about = document.getElementById("aboutSction");
	const swiper = document.getElementById("swiperSection");
	swiper.style.display = "none";

	document.getElementById("contactPage").style.display = "none";
	// برای نمایش بخش "درباره ما"
	about.style.display = "block"; // استفاده از 'block' به جای 'show'

	about.innerHTML = `
<section class="aboutCont">
    <div class="aboutContent">
        <h2 id="aboutUsH2">درباره ما</h2>
        <p id="aboutUsText"></p>
        <img src="https://ibolak.com/storage/image/2023/12/1701842323-5IgVR5VQjqZVZ9t3.jpg" alt="Fashion Image" class="about-image">
    </div>
</section>


        
    `;

	const currentLang = localStorage.getItem("selectedLanguage") || "en";
	changeLanguage(currentLang);
}
