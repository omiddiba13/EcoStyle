document
	.getElementById("showLoginButton")
	.addEventListener("click", createLoginPage);

function createLoginPage() {
	const loginPage = document.getElementById("login");
	const loginBackground = document.getElementById("loginBackground");

	// اطمینان از اینکه صفحه لاگین فقط یک بار اضافه شود
	if (loginPage.childNodes.length > 0) {
		loginBackground.style.display = "flex"; // نمایش پس‌زمینه
		return; // اگر قبلاً فرم وجود دارد، از ایجاد دوباره جلوگیری می‌کند
	}

	// نمایش پس‌زمینه
	loginBackground.style.display = "flex";

	// عنوان صفحه لاگین
	const heading = document.createElement("h2");
	heading.textContent = "Login";
	loginPage.appendChild(heading);

	// فرم لاگین
	const form = document.createElement("form");
	form.id = "loginForm";

	// فیلد نام کاربری
	const usernameLabel = document.createElement("label");
	usernameLabel.setAttribute("for", "username");
	usernameLabel.textContent = "Username:";
	form.appendChild(usernameLabel);

	const usernameInput = document.createElement("input");
	usernameInput.type = "text";
	usernameInput.id = "username";
	usernameInput.required = true;
	form.appendChild(usernameInput);
	form.appendChild(document.createElement("br"));

	// فیلد رمز عبور
	const passwordLabel = document.createElement("label");
	passwordLabel.setAttribute("for", "password");
	passwordLabel.textContent = "Password:";
	form.appendChild(passwordLabel);

	const passwordInput = document.createElement("input");
	passwordInput.type = "password";
	passwordInput.id = "password";
	passwordInput.required = true;
	form.appendChild(passwordInput);
	form.appendChild(document.createElement("br"));

	// دکمه ورود
	const loginButton = document.createElement("button");
	loginButton.type = "submit";
	loginButton.textContent = "Login";
	form.appendChild(loginButton);

	// اضافه کردن فرم به بدنه صفحه
	loginPage.appendChild(form);

	// پیام خطا یا موفقیت
	const message = document.createElement("p");
	message.id = "message";
	loginPage.appendChild(message);

	// رویداد ارسال فرم
	form.addEventListener("submit", function (event) {
		event.preventDefault(); // جلوگیری از ارسال فرم

		// دریافت نام کاربری و رمز عبور
		const username = usernameInput.value;
		const password = passwordInput.value;

		// خواندن فایل JSON با استفاده از fetch
		fetch("users.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to load JSON file");
				}
				return response.json();
			})
			.then((users) => {
				console.log(users); // لاگ گرفتن از محتویات فایل JSON

				// جستجو برای تطبیق نام کاربری و رمز عبور
				const user = users.find(
					(u) => u.username === username && u.password === password,
				);

				if (user) {
					message.textContent = "Login successful!";
					message.style.color = "green";
					// انتقال کاربر به بخش‌های دیگر
					window.location.href = "/EcoStyle/dashboard.html"; // به صفحه بعدی منتقل می‌شود
				} else {
					message.textContent = "Invalid username or password.";
					message.style.color = "red";
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				message.textContent = "An error occurred. Please try again later.";
				message.style.color = "red";
			});
	});

	// بستن فرم با کلیک روی پس‌زمینه
	loginBackground.addEventListener("click", function (event) {
		if (event.target === loginBackground) {
			loginPage.innerHTML = ""; // پاک کردن محتویات فرم
			loginBackground.style.display = "none"; // مخفی کردن پس‌زمینه
		}
	});
}
