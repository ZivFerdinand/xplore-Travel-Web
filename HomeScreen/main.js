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


var indexValue = 0;
showImg(indexValue);
bgSlider(indexValue);

function slider(e){
    showImg(indexValue += e);
}

function bgSlider(e){
	showBg(indexValue += e);
}

function showImg(e){
    var i;
    const img = document.getElementsByClassName("subImgs");
    if(e > img.length){
        indexValue = 1;
    } else if(e < 1){
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

function showBg(e){
	var i;
    const img = document.getElementsByClassName("bgSlider");
    if(e > img.length){
        indexValue = 1;
    } else if(e < 1){
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}