function loadShow() {
	const loader = document.getElementById("loader");
	loader.style.display = "flex"; // نمایش به صورت فلکس
	loader.style.justifyContent = "center"; // مرکز‌چین کردن محتوا
	loader.style.alignItems = "center"; // مرکز‌چین کردن عمودی محتوا
}

function loadHide() {
	document.getElementById("loader").style.display = "none";
}
