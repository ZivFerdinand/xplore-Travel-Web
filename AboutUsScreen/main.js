let selector = document.getElementById("selector");
let home = document.getElementById("home");
let exp = document.getElementById("explore");

function resetPos() {
	selector.style.marginLeft = "0";
	selector.style.width = "0";

}
resetPos();
home.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "11.5%";
	selector.style.width = "32%";
});
home.addEventListener("mouseleave", resetPos);

exp.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "52.5%";
	selector.style.width = "33.5%";
	resetClass();
});
exp.addEventListener("mouseleave", resetPos);
