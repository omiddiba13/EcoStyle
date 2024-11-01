document
	.getElementById("showSignupButton")
	.addEventListener("click", createSignupPage);
document
	.getElementById("showLoginButton")
	.addEventListener("click", createLoginPage);

function createSignupPage() {
	const signupPage = document.getElementById("signup");
	const signupBackground = document.getElementById("signupBackground");

	if (signupPage.childNodes.length > 0) {
		signupBackground.style.display = "flex";
		return;
	}

	signupBackground.style.display = "flex";

	signupPage.innerHTML = `
		<h2>Sign Up</h2>
		<form id="signupForm">
			<label for="signupUsername">Username:</label>
			<input type="text" id="signupUsername" required />
			<br />
			<label for="signupPassword">Password:</label>
			<input type="password" id="signupPassword" required />
			<br />
			<button type="submit">Sign Up</button>
		</form>
		<p id="signupMessage"></p>
	`;

	const signupForm = document.getElementById("signupForm");
	const signupMessage = document.getElementById("signupMessage");

	signupForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const username = document.getElementById("signupUsername").value;
		const password = document.getElementById("signupPassword").value;

		// ذخیره اطلاعات در کوکی
		document.cookie = `username=${username};path=/`;
		document.cookie = `password=${password};path=/`;

		signupMessage.textContent = "Sign up successful!";
		signupMessage.style.color = "green";
	});

	signupBackground.addEventListener("click", function (event) {
		if (event.target === signupBackground) {
			signupPage.innerHTML = "";
			signupBackground.style.display = "none";
		}
	});
}

function createLoginPage() {
	const loginPage = document.getElementById("login");
	const loginBackground = document.getElementById("loginBackground");

	if (loginPage.childNodes.length > 0) {
		loginBackground.style.display = "flex";
		return;
	}

	loginBackground.style.display = "flex";

	loginPage.innerHTML = `
		<h2>Login</h2>
		<form id="loginForm">
			<label for="username">Username:</label>
			<input type="text" id="username" required />
			<br />
			<label for="password">Password:</label>
			<input type="password" id="password" required />
			<br />
			<button type="submit">Login</button>
		</form>
		<p id="loginMessage"></p>
	`;

	const loginForm = document.getElementById("loginForm");
	const loginMessage = document.getElementById("loginMessage");

	// دریافت اطلاعات ذخیره‌شده در کوکی
	const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
		const [key, value] = cookie.split("=");
		acc[key.trim()] = value ? value.trim() : value;
		return acc;
	}, {});

	if (username === cookies.username && password === cookies.password) {
		loginMessage.textContent = "Login successful!";
		loginMessage.style.color = "green";
		setTimeout(() => {
			window.location.href = "/EcoStyle/dashboard.html";
			loadHide(); // پنهان کردن loader پس از انتقال به صفحه جدید
		}, 1000);
	} else {
		loginMessage.textContent = "Invalid username or password.";
		loginMessage.style.color = "red";
	}

	loginBackground.addEventListener("click", function (event) {
		if (event.target === loginBackground) {
			loginPage.innerHTML = "";
			loginBackground.style.display = "none";
		}
	});
}
