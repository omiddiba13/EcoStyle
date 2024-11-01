let navbar = document.getElementById("navbarMain");

navbar.innerHTML = `
    <nav id="navbar">
        <div class="logo">
            <h1 class="no-select" onclick="navigateTo('home')">EcoStyle</h1>
        </div>
        <ul class="SYnav">
            <li><a id="home" onclick="navigateTo('home')">Home</a></li>
            <li><a id="about" onclick="navigateTo('about')">About</a></li>
            <li><a id="contact"  onclick="navigateTo('contact')">Contact</a></li>
            <li><a id="shop"  onclick="navigateTo('shop')">Shop</a></li>
        </ul>
    </nav>

    <nav id="mobile-nav" class="mobile-nav">
        <button class="menu-icon" onclick="toggleMenu()">&#9776;</button>
        <ul id="mobile-menu" class="hidden">
            <li><a id="home-mobile"  onclick="navigateTo('home')">Home</a></li>
            <li><a id="about-mobile"  onclick="navigateTo('about')">About</a></li>
            <li><a id="contact-mobile"  onclick="navigateTo('contact')">Contact</a></li>
            <li><a id="shop-mobile" onclick="navigateTo('shop')">Shop</a></li>
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

// تابع برای مدیریت ناوبری
function navigateTo(section) {
	// اجرای تابع مربوطه و تغییر آدرس بدون بارگذاری مجدد صفحه
	switch (section) {
		case "home":
			home();
			history.pushState(null, "", "/EcoStyle/index.html"); // تغییر URL بدون بارگذاری مجدد
			break;
		case "about":
			About();
			history.pushState(null, "", "/EcoStyle/index.html"); // تغییر URL بدون بارگذاری مجدد
			break;
		case "contact":
			contactUsPage();
			history.pushState(null, "", "/EcoStyle/index.html"); // تغییر URL بدون بارگذاری مجدد
			break;
		case "shop":
			window.location.href = "/EcoStyle/shopPage.html"; // بارگذاری صفحه شاپ
			break;
	}
}

function toggleMenu() {
	const menu = document.getElementById("mobile-menu");
	menu.classList.toggle("hidden");
	menu.classList.toggle("open");
}

let currentLang = localStorage.getItem("selectedLanguage") || "en";
changeLanguage(currentLang); // فراخوانی تابع تغییر زبان برای تنظیم ترجمه‌ها
