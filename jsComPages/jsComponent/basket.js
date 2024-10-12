let basket = JSON.parse(localStorage.getItem("basket")) || [];
let basketIcon = document.getElementById("basket-icon");
let basketPopup = document.getElementById("basket-popup");
let basketItemsElement = document.getElementById("basket-items");
let totalPriceElement = document.getElementById("total-price");
let basketCountElement = document.getElementById("basket-count");

// به‌روزرسانی سبد خرید در صفحه
function renderBasket() {
	basketItemsElement.innerHTML = ``;
	let total = 0;

	if (basket.length === 0) {
		basketItemsElement.innerHTML = "<p>Your basket is empty.</p>";
	} else {
		basket.forEach((item, index) => {
			total += item.price * item.quantity;
			basketItemsElement.innerHTML += `
                <div class="basket-item">
                    <span> <img class="imgBasket" src="${item.image}" alt=""> <h4>${item.title} </h4> (${item.quantity} x $${item.price})</span>
                    <div class="btnBasket">
                        <button onclick="increaseQuantity(${index})"><i class="fa-solid fa-plus"></i></button>
                        <button onclick="decreaseQuantity(${index})"><i class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            `;
		});
	}

	totalPriceElement.innerText = total.toFixed(2); // جمع کل قیمت‌ها
	basketCountElement.innerText = basket.length; // تعداد کل محصولات در کنار آیکون سبد خرید

	// ذخیره سبد خرید در LocalStorage
	localStorage.setItem("basket", JSON.stringify(basket));
}

// افزودن محصول به سبد خرید
function addToBasket(product) {
	const existingProductIndex = basket.findIndex(
		(item) => item.title === product.title,
	);

	if (existingProductIndex !== -1) {
		basket[existingProductIndex].quantity += 1;
	} else {
		basket.push({ ...product, quantity: 1 });
	}

	renderBasket();
}

// افزایش تعداد محصول
function increaseQuantity(index) {
	basket[index].quantity += 1;
	renderBasket();
}

// کاهش تعداد محصول
function decreaseQuantity(index) {
	if (basket[index].quantity > 1) {
		basket[index].quantity -= 1;
	} else {
		basket.splice(index, 1);
	}
	renderBasket();
}

// نمایش یا پنهان کردن پاپ‌آپ سبد خرید
basketIcon.addEventListener("click", () => {
	basketPopup.style.display =
		basketPopup.style.display === "none" ? "block" : "none";
});

// بستن سبد خرید
document.getElementById("close-basket").addEventListener("click", () => {
	basketPopup.style.display = "none";
});

// اولین بار سبد خرید را رندر کنیم
renderBasket();
