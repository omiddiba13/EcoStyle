let slideInterval; // تعریف متغیر سراسری برای تایمر

function swiper() {
	const swiper = document.getElementById("swiperSection");
	swiper.style.display = "block";
	swiper.innerHTML = `
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f37b80582d26bb901d3e6c316233e9e75f8080fc_1725707388.jpg?x-oss-process=image/quality,q_95&web-developer-reload=1726608617712" alt="Image 1"></div>
                <div class="swiper-slide"><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/987d8e94fe8c1f443a456d53bc37db5a9d44a383_1726309510.jpg?x-oss-process=image/quality,q_95&web-developer-reload=1726608617713" alt="Image 2"></div>
                <div class="swiper-slide"><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/987d8e94fe8c1f443a456d53bc37db5a9d44a383_1726309510.jpg?x-oss-process=image/quality,q_95&web-developer-reload=1726608617713" alt="Image 3"></div>
            </div>
        </div>
    `;

	const swiperWrapper = document.querySelector(".swiper-wrapper");
	const slides = document.querySelectorAll(".swiper-slide");

	let currentIndex = 0;
	const totalSlides = slides.length;
	const slideIntervalDuration = 3000; // مدت زمان بین اسلایدها (بر حسب میلی‌ثانیه)

	function updateSlidePosition() { 
		const offset = -currentIndex * 100;
		swiperWrapper.style.transform = `translateX(${offset}%)`;
	}

	function goToNextSlide() {
		currentIndex = (currentIndex + 1) % totalSlides;
		updateSlidePosition();
	}

	// تغییر اسلایدها به طور خودکار با تایمر
	slideInterval = setInterval(goToNextSlide, slideIntervalDuration);

	// راه‌اندازی اولیه
	updateSlidePosition();
}
swiper();
