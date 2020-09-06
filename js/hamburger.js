const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header .navbar .nav-list ul");
const header = document.querySelector(".header.container");
let menuItem = document.querySelector(".header .navbar .nav-list ul li a");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
});

menuItem.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
	hamburger.classList.remove("active");
	menu.classList.remove("active");
	console.log("worked");
});
