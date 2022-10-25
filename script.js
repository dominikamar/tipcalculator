const price = document.querySelector("#price");
const peopleNum = document.querySelector("#people");
const tip = document.querySelector("#tip");
const button = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");
const span = document.querySelector(".cost");

const check = () => {
	if (price.value == "" || peopleNum.value == "" || tip.value == 0) {
		error.textContent = "Uzupełnij wszystkie pola";
		costInfo.style.display = "none";
	} else {
		countTip();
	}
};

const countTip = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(peopleNum.value);
	const newTip = parseFloat(tip.value);

	const sum = (newPrice + newPrice * newTip) / newPeople;
	costInfo.style.display = "block";
	span.textContent = sum.toFixed(2);
	error.textContent = "";
};

button.addEventListener("click", check);
