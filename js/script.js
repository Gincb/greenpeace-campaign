const mapL = document.querySelector(".map-left");
const mapR = document.querySelector(".map-right");
const map = document.querySelector(".map");

console.log(mapL)

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