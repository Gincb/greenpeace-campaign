const mapL = document.querySelector(".map-left");
const mapR = document.querySelector(".map-right");
const map = document.querySelector(".map");


mapL.addEventListener("click", addMapLeft);
mapR.addEventListener("click", addMapRight);

function addMapLeft() {
    if(map.classList.contains("center")) {
        map.classList.remove("center");
        map.classList.add("left");
    } else {
        map.classList.remove("right");
        map.classList.add("center");
    }
}

function addMapRight() {
    if(map.classList.contains("center")) {
        map.classList.remove("center");
        map.classList.add("right");
    } else {
        map.classList.remove("left");
        map.classList.add("center");
    }
}

const newTab1 = document.getElementById("Url1");
newTab1.addEventListener("click", openUrl1);
function openUrl1(){
    window.open("https://www.graesrod.org/", "_blank");
}


const newTab2 = document.getElementById("Url2");
newTab2.addEventListener("click", openUrl2);
function openUrl2(){
    window.open("https://www.greenpeace.org/international/", "_blank");
}
