let navbar = document.getElementById("navbarMain");

navbar.innerHTML = `<nav id="navbar">
    <nav id="navbar">
    <div class="logo">
        <h1 class="no-select" onclick="home()">EcoStyle</h1>
    </div>
    <ul class="SYnav">
        <li><a id="home" onclick="navigateTo('home')" href="#">Home</a></li>
        <li><a id="about" onclick="navigateTo('about')" href="#">About</a></li>
        <li><a id="contact" onclick="navigateTo('contact')" href="#">Contact</a></li>
        <li><a id="shop" onclick="navigateTo('shop')" href="#">Shop</a></li>
    </ul>
</nav>

<nav id="mobile-nav" class="mobile-nav">
    <button class="menu-icon" onclick="toggleMenu()">&#9776;</button>
    <ul id="mobile-menu" class="hidden">
        <li><a id="home-mobile" onclick="navigateTo('home')" href="#">Home</a></li>
        <li><a id="about-mobile" onclick="navigateTo('about')" href="#">About</a></li>
        <li><a id="contact-mobile" onclick="navigateTo('contact')" href="#">Contact</a></li>
        <li><a id="shop-mobile" onclick="navigateTo('shop')" href="#">Shop</a></li>
        <ul class="lan-MO">
            <li><a onclick="changeLanguage('fa')">FA</a></li>
            <li><a onclick="changeLanguage('en')">EN</a></li>
            <li id="authButtons">
                <li><a id="showLoginButton" onclick="createLoginPage()">LOGIN</a></li>
                <li><a id="showSignupButton" onclick="createSignupPage()">SIGN UP</a></li>
            </li>
        </ul>
    </ul>
</nav>


`;

// بعد از اینکه HTML اضافه شد، باید دوباره تابع changeLanguage را فراخوانی کنید

function toggleMenu() {
	const menu = document.getElementById("mobile-menu");
	menu.classList.toggle("hidden");
	menu.classList.toggle("open");
}

let currentLang = localStorage.getItem("selectedLanguage") || "en";
changeLanguage(currentLang); // فراخوانی تابع تغییر زبان برای تنظیم ترجمه‌ها

function navigateTo(section) {
	switch (section) {
		case "home":
			home(); // اجرای تابع مربوط به خانه
			// اینجا می‌توانید کد لازم برای ناوبری به صفحه اصلی را اضافه کنید
			break;
		case "about":
			About(); // اجرای تابع مربوط به درباره ما
			// اینجا می‌توانید کد لازم برای ناوبری به صفحه درباره ما را اضافه کنید
			break;
		case "contact":
			contactUsPage(); // اجرای تابع مربوط به تماس با ما
			// اینجا می‌توانید کد لازم برای ناوبری به صفحه تماس با ما را اضافه کنید
			break;
		case "shop":
			// اگر نیاز به کد خاصی برای صفحه شاپ دارید، آن را اینجا قرار دهید
			window.location.href = "/EcoStyle/shopPage.html"; // ناوبری به صفحه شاپ
			break;
	}
}
