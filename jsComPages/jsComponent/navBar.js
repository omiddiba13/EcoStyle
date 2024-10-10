"use strict";

let navbar = document.getElementById("navbarMain");

navbar.innerHTML = `
<nav id="navbar">
    <ul class="SYnav">
        <li><a href="#" id="home" onclick="home()"></a></li>
        <li><a href="#" id="about" onclick="About()"></a></li>
        <li><a href="#" id="contact" onclick="contactUsPage()"></a></li>
        <li><a href="#" id="shop"></a></li>
    </ul>
</nav>

<nav id="mobile-nav" class="mobile-nav"onclick="toggleMenu()">
    <button class="menu-icon" >&#9776;</button>
    <ul id="mobile-menu" class="hidden">
        <li><a href="home.html" id="home-mobile" onclick="home()">Home</a></li>
        <li><a href="#" id="about-mobile" onclick="About()">About</a></li>
        <li><a href="#" id="contact-mobile" onclick="contactUsPage()">Contact</a></li>
        <li><a href="#" id="shop-mobile">Shop</a></li>
    </ul>
</nav>

`;
// بعد از اینکه HTML اضافه شد، باید دوباره تابع changeLanguage را فراخوانی کنید
let currentLang = localStorage.getItem("selectedLanguage") || "en";
changeLanguage(currentLang); // فراخوانی تابع تغییر زبان برای تنظیم ترجمه‌ها

function toggleMenu() {
	const menu = document.getElementById("mobile-menu");
	menu.classList.toggle("hidden");
	menu.classList.toggle("open");
}