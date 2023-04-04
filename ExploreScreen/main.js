let selector = document.getElementById("selector");
let home = document.getElementById("home");
let exp = document.getElementById("explore");

function resetPos() {
	selector.style.marginLeft = "52.5%";
	selector.style.width = "33.5%";

	activateClass();
}
function resetClass() {
	if (exp.classList.contains("is-activated") == true) {
		exp.classList.remove("is-activated");
		exp.classList.add("isnt-activated");
	}
}
function activateClass() {
	if (exp.classList.contains("isnt-activated") == true) {
		exp.classList.add("is-activated");
		exp.classList.remove("isnt-activated");
	}
}
resetPos();
home.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "11.5%";
	selector.style.width = "32%";
	resetClass();

});
home.addEventListener("mouseleave", resetPos);

exp.addEventListener("mouseenter", resetPos);
exp.addEventListener("mouseleave", resetPos);
