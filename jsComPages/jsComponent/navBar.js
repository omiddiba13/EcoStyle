let navbar = document.getElementById("navbarMain");

navbar.innerHTML = `
    <nav id="navbar">
        <div class="logo">
            <h1 class="no-select" onclick="home()">EcoStyle</h1>
        </div>
        <ul class="SYnav">
            <li><a id="home" onclick="home()" href="/EcoStyle/index.html">Home</a></li>
            <li><a id="about" onclick="About()" href="/EcoStyle/index.html">About</a></li>
            <li><a id="contact" onclick="contactUsPage()" href="/EcoStyle/index.html">Contact</a></li>
            <li><a id="shop" href="/EcoStyle/shopPage.html">Shop</a></li>
        </ul>
    </nav>

    <nav id="mobile-nav" class="mobile-nav">
    <button class="menu-icon" onclick="toggleMenu()">&#9776;</button>
    <ul id="mobile-menu" class="hidden">
        <li><a id="home-mobile" href="/EcoStyle/index.html"  onclick="home()">Home</a></li>
        <li><a id="about-mobile" href="/EcoStyle/index.html"  onclick="About()">About</a></li>
        <li><a id="contact-mobile" href="/EcoStyle/index.html" onclick="contactUsPage()">Contact</a></li>
        <li><a id="shop-mobile" href="/EcoStyle/shopPage.html">Shop</a></li>
        <ul class="lan-MO">
            <li><a onclick="changeLanguage('fa')">FA</a></li>
            <li><a onclick="changeLanguage('en')">EN</a></li>
            <li id="authButtons">
              <li>  <a id="showLoginButton" onclick="createLoginPage()">LOGIN</a></li>
              <li> <a id="showSignupButton" onclick="createSignupPage()">SIGN UP</a></li>
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
