const footerElement = document.getElementById("footer");

footerElement.innerHTML = `
    <footer>
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
        <div class="social-links">
            <a href="https://github.com/omiddiba13/EcoStyle" aria-label="">
                <i class="fab fa-github"></i>
            </a>
            <a href="#" id="emailLink" aria-label="Email">
	            <i class="fa-regular fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/omid-norollahi-diba/" aria-label="linkedin">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </footer>
`;

document
	.getElementById("emailLink")
	.addEventListener("click", function (event) {
		event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
		const email = "Omiddiba13@gmail.com";

		// کپی کردن ایمیل به کلیپ‌بورد
		navigator.clipboard.writeText(email).then(
			function () {
				alert("copied " + email);
			},
			function () {
				alert("Could not copy");
			},
		);
	});
