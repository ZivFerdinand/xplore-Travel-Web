let a = document.querySelector(".to-Change");
let b = document.querySelector(".to-Change2");

a.addEventListener("mousedown", () => {
    if (a.innerHTML == "EN")
        a.innerHTML = "IN";
    
    if (a.innerHTML == "IN") a.innerHTML = "EN";
});
b.addEventListener("mousedown", () => {
    
    if (a.innerHTML == "SGD") a.innerHTML = "IDR";
    
    if (a.innerHTML == "IDR") a.innerHTML = "SGD";
});
