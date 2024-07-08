const nav = document.querySelector("nav");
const header = document.querySelector("header");
const scrollToTop = document.querySelector(".scroll-to-top");
const ageSpan = document.querySelector("span.age");

window.onscroll = function () {
	if (window.scrollY >= 600) {
		scrollToTop.style.display = "block";
	} else {
		scrollToTop.style.display = "none";
	}
	if (window.scrollY >= 450) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
};
scrollToTop.onclick = function () {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};

// Update My Age

function calculateAge(birthDate) {
	// Parse the birthDate to create a Date object
	const birthDateObj = new Date(birthDate);

	// Get today's date
	const today = new Date();

	// Calculate the age
	let age = today.getFullYear() - birthDateObj.getFullYear();
	const monthDifference = today.getMonth() - birthDateObj.getMonth();

	// Adjust age if the birth date has not yet occurred this year
	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDateObj.getDate())
	) {
		age--;
	}

	return age;
}

ageSpan.textContent = calculateAge("1999-06-22");
