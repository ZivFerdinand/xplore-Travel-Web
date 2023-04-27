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
});
exp.addEventListener("mouseleave", resetPos);

// Tanda Tanya

const search = document.querySelector(".search");
const askUs = document.querySelector(".row-line h1");

search.addEventListener("mouseover", () => {
  search.style.color = "#d48c00";
  askUs.style.transform = "scale(0.5)";
  askUs.style.opacity = "0";
  askUs.style.color = "#d48c00";
  //   rowLine.style.transform = "rotate(90deg)";
});

search.addEventListener("mouseleave", () => {
  askUs.style.transform = "scale(1)";
  askUs.style.opacity = "1";
  askUs.style.color = "#f9a43d";
  //   rowLine.style.transform = "rotate(0deg)";
});
