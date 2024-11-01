document
	.getElementById("showSignupButton")
	.addEventListener("click", createSignupPage);
document
	.getElementById("showLoginButton")
	.addEventListener("click", createLoginPage);

window.onload = checkLoginStatus;

function checkLoginStatus() {
	const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
		const [key, value] = cookie.split("=");
		acc[key.trim()] = value ? value.trim() : value;
		return acc;
	}, {});

	// بررسی ورود کاربر
	if (cookies.username && cookies.password) {
		showProfileButton();
	} else {
		showAuthButtons();
	}
}

function showAuthButtons() {
	document.getElementById("showSignupButton").style.display = "inline";
	document.getElementById("showLoginButton").style.display = "inline";
	document.getElementById("profileButton").style.display = "none";
}

function showProfileButton() {
	document.getElementById("showSignupButton").style.display = "none";
	document.getElementById("showLoginButton").style.display = "none";
	document.getElementById("profileButton").style.display = "inline";
}

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
			<label for="firstName">First Name:</label>
			<input type="text" id="firstName" required />
			<br />
			<label for="lastName">Last Name:</label>
			<input type="text" id="lastName" required />
			<br />
			<label for="age">Age:</label>
			<input type="number" id="age" required />
			<br />
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

		const firstName = document.getElementById("firstName").value;
		const lastName = document.getElementById("lastName").value;
		const age = document.getElementById("age").value;
		const username = document.getElementById("signupUsername").value;
		const password = document.getElementById("signupPassword").value;

		// ذخیره اطلاعات در کوکی
		document.cookie = `firstName=${firstName};path=/`;
		document.cookie = `lastName=${lastName};path=/`;
		document.cookie = `age=${age};path=/`;
		document.cookie = `username=${username};path=/`;
		document.cookie = `password=${password};path=/`;

		signupMessage.textContent = "Sign up successful!";
		signupMessage.style.color = "green";

		// نمایش دکمه پروفایل و هدایت به داشبورد
		showProfileButton();
		setTimeout(() => {
			window.location.href = "/EcoStyle/dashboard.html";
		}, 1000);
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

	loginForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		// دریافت اطلاعات ذخیره‌شده در کوکی
		const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
			const [key, value] = cookie.split("=");
			acc[key.trim()] = value ? value.trim() : value;
			return acc;
		}, {});

		// مقایسه اطلاعات ورودی با کوکی
		if (username === cookies.username && password === cookies.password) {
			loginMessage.textContent = "Login successful!";
			loginMessage.style.color = "green";
			showProfileButton();
			setTimeout(() => {
				window.location.href = "/EcoStyle/dashboard.html";
			}, 1000);
		} else {
			loginMessage.textContent = "Invalid username or password.";
			loginMessage.style.color = "red";
		}
	});

	loginBackground.addEventListener("click", function (event) {
		if (event.target === loginBackground) {
			loginPage.innerHTML = "";
			loginBackground.style.display = "none";
		}
	});
}
document.addEventListener("DOMContentLoaded", () => {
	const authButtons = document.getElementById("authButtons");
	const profileButton = document.getElementById("profileButton");

	const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
		const [key, value] = cookie.split("=");
		acc[key.trim()] = value ? value.trim() : value;
		return acc;
	}, {});

	if (cookies.username) {
		authButtons.classList.add("hidden");
		profileButton.classList.remove("hidden");
	} else {
		authButtons.classList.remove("hidden");
		profileButton.classList.add("hidden");
	}
});

function toggleMenu() {
	const menu = document.getElementById("mobile-menu");
	menu.classList.toggle("hidden");
}

function redirectToDashboard() {
	window.location.href = "/EcoStyle/dashboard.html";
}

// اضافه کردن دکمه پروفایل برای هدایت به داشبورد
document.getElementById("profileButton").addEventListener("click", function () {
	window.location.href = "/EcoStyle/dashboard.html";
});
