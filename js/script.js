// MAP

const mapL = document.querySelector(".map-left");
const mapR = document.querySelector(".map-right");
const map = document.querySelector(".map");
const pinAmazon = document.querySelector(".pin-amazon");

mapL.addEventListener("click", addMapLeft);
mapR.addEventListener("click", addMapRight);

function addMapLeft() {
    if(map.classList.contains("center")) {
        map.classList.remove("center");
        map.classList.add("left");
        mapL.classList.add("dn");
        mapR.classList.remove("dn");
        pinAmazon.classList.add("dl");
        pinAmazon.classList.remove("dn");
    } else {
        map.classList.remove("right");
        map.classList.add("center");
        mapL.classList.remove("dn");
        mapR.classList.remove("dn");
        pinAmazon.classList.remove("dl");
        pinAmazon.classList.add("dn");
    }
}

function addMapRight() {
    if(map.classList.contains("center")) {
        map.classList.remove("center");
        map.classList.add("right");
        mapR.classList.add("dn");
        mapL.classList.remove("dn");
        pinAmazon.classList.remove("dl");
        pinAmazon.classList.add("dn");
    } else {
        map.classList.remove("left");
        map.classList.add("center");
        mapR.classList.remove("dn");
        mapL.classList.remove("dn");
        pinAmazon.classList.remove("dl");
        pinAmazon.classList.add("dn");
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

// PINS

const video = document.getElementById('video-yt');
const button = document.getElementById('play-video');
const close = document.getElementById('modalId');
const myAmazon = document.getElementById('myAmazon');

button.addEventListener("click", addFullscreen);
myAmazon.addEventListener("click", addClose);
close.addEventListener("click", addClose);

function addFullscreen(e) {
    var isPause = video.src.indexOf('autoplay=0') != -1;
    video.src = isPause ? video.src.replace('autoplay=0', 'autoplay=1') :
        video.src.replace('autoplay=1', 'autoplay=0');
}

function addClose(e) {
    var isPause = video.src.indexOf('autoplay=1') != 1;
    video.src = isPause ? video.src.replace('autoplay=1', 'autoplay=0') :
        video.src.replace('autoplay=0', 'autoplay=1');
}