// CHANGE MENU BACKGROUND ON SCROLL

document.addEventListener("scroll", () => {
	let scroll_position = window.scrollY;

	if (scroll_position > 250) {
		header.style.backgroundColor = "#1b1b1b";
	} else {
		header.style.backgroundColor = "transparent";
	}
});

// TYPEWRITER EFFECT ON HERO

let i = 0;
let txt = document.querySelector(".hero div p").innerText;
document.querySelector(".hero div p").innerText = "";
let speed = 300; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("type").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
setTimeout(() => {
	typeWriter();
}, 4000);
