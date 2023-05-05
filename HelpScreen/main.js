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
const imgQues = document.querySelector(".questionMark img");
const submitbtn = document.querySelector(".search_submit");
const inputan = document.getElementById("idsearch");
var clicked = false;

search.addEventListener("mouseover", () => {
  askUs.style.color = "#d48c00";
  imgQues.src = "../Assets/Icon/questionMarkDark.png";
});

search.addEventListener("mouseout", () => {
  askUs.style.color = "#f9a43d";
  imgQues.src = "../Assets/Icon/questionMark.png";
});

search.addEventListener("focus", () => {
  search.classList.add("extended");
  imgQues.style.transform = "rotate(-24deg)";
  askUs.style.transform = "scale(0.5)";
  askUs.style.opacity = "0";
  clicked = true;
});

// search.addEventListener("blur", () => {
// });

search.addEventListener("focusout", () => {
  search.classList.remove("extended");
  const textInput = inputan.value;
  if (textInput.length != 0) {
    var textItal = "PROCESSING YOUR QUESTION...";
    askUs.innerHTML = textItal.italics();
    search.value = "";
    imgQues.style.transform = "rotate(0deg)";
    askUs.style.transform = "scale(1)";
    askUs.style.opacity = "1";
    setTimeout(() => {
      askUs.style.transform = "scale(0.9)";
      askUs.style.opacity = "0";
    }, 2500);
    setTimeout(() => {
      var textItal = "ASK US ANY QUESTIONS";
      askUs.innerHTML = textItal.italics();
      askUs.style.transform = "scale(1)";
      askUs.style.opacity = "1";
    }, 3000);
  } else {
    imgQues.style.transform = "rotate(0deg)";
    askUs.style.transform = "scale(1)";
    askUs.style.opacity = "1";
  }
  clicked = false;
});

document.addEventListener("keypress", function (e) {
  if (clicked) {
    var keynum = e.keyCode || e.which;
    if (keynum == 13) {
      search.classList.remove("extended");
      const textInput = inputan.value;
      if (textInput.length != 0) {
        var textItal = "PROCESSING YOUR QUESTION...";
        askUs.innerHTML = textItal.italics();
        search.value = "";
		search.blur();
        imgQues.style.transform = "rotate(0deg)";
        askUs.style.transform = "scale(1)";
        askUs.style.opacity = "1";
        setTimeout(() => {
          askUs.style.transform = "scale(0.9)";
          askUs.style.opacity = "0";
        }, 2500);
        setTimeout(() => {
          var textItal = "ASK US ANY QUESTIONS";
          askUs.innerHTML = textItal.italics();
          askUs.style.transform = "scale(1)";
          askUs.style.opacity = "1";
        }, 3000);
      } else {
		search.blur();
        imgQues.style.transform = "rotate(0deg)";
        askUs.style.transform = "scale(1)";
        askUs.style.opacity = "1";
      }
      clicked = false;
    }
  }
});
