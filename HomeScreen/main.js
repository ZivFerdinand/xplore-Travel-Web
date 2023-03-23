let selector = document.getElementById("selector");
let home = document.getElementById("home");
let exp = document.getElementById("explore");

function resetPos() {
	selector.style.marginLeft = "11.5%";
	selector.style.width = "32%";

	activateClass();
}
function resetClass() {
	if (home.classList.contains("is-activated") == true) {
		home.classList.remove("is-activated");
		home.classList.add("isnt-activated");
	}
}
function activateClass() {
	if (home.classList.contains("isnt-activated") == true) {
		home.classList.add("is-activated");
		home.classList.remove("isnt-activated");
	}
}
resetPos();
home.addEventListener("mouseenter", resetPos);
home.addEventListener("mouseleave", resetPos);

exp.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "52.5%";
	selector.style.width = "33.5%";
	resetClass();
});
exp.addEventListener("mouseleave", resetPos);
