scroll = document.getElementById("scroll");
window.onscroll = function () {
    scrollDisplay()
};

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






// MAP

const mapL = document.querySelector(".map-left");
const mapR = document.querySelector(".map-right");
const map = document.querySelector(".map");
const pinAmazon = document.querySelector(".pin-amazon");
const pinAmazon2 = document.querySelector(".pin-amazon2");
const pinArctic = document.querySelector(".pin-arctic");
const pinAntarctica = document.querySelector(".pin-antarctica");
const pinJapan = document.querySelector(".pin-japan");
const pinChina = document.querySelector(".pin-china");
const pinChina2 = document.querySelector(".pin-china2");
const pinTaiwan = document.querySelector(".pin-taiwan");

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
        pinAmazon2.classList.add("dni");
        pinAmazon2.classList.remove("dli");
        pinArctic.classList.add("dn");
        pinArctic.classList.remove("dl");
        pinAntarctica.classList.add("dn");
        pinAntarctica.classList.remove("dl");
        pinJapan.classList.add("dn");
        pinJapan.classList.remove("dl");
        pinChina.classList.add("dn");
        pinChina.classList.remove("dl");
        pinChina2.classList.add("dni");
        pinChina2.classList.remove("dli");
        pinTaiwan.classList.add("dn");
        pinTaiwan.classList.remove("dl");
    } else {
        map.classList.remove("right");
        map.classList.add("center");
        mapL.classList.remove("dn");
        mapR.classList.remove("dn");
        pinAmazon.classList.remove("dl");
        pinAmazon.classList.add("dn");
        pinAmazon2.classList.add("dli");
        pinAmazon2.classList.remove("dni");
        pinArctic.classList.add("dl");
        pinArctic.classList.remove("dn");
        pinAntarctica.classList.remove("dn");
        pinAntarctica.classList.add("dl");
        pinJapan.classList.add("dn");
        pinJapan.classList.remove("dl");
        pinChina.classList.add("dn");
        pinChina.classList.remove("dl");
        pinChina2.classList.add("dli");
        pinChina2.classList.remove("dni");
        pinTaiwan.classList.add("dn");
        pinTaiwan.classList.remove("dl");
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
        pinAmazon2.classList.add("dni");
        pinAmazon2.classList.remove("dli");
        pinArctic.classList.add("dn");
        pinArctic.classList.remove("dl");
        pinAntarctica.classList.add("dn");
        pinAntarctica.classList.remove("dl");
        pinJapan.classList.add("dl");
        pinJapan.classList.remove("dn");
        pinChina.classList.add("dl");
        pinChina.classList.remove("dn");
        pinChina2.classList.add("dni");
        pinChina2.classList.remove("dli");
        pinTaiwan.classList.add("dl");
        pinTaiwan.classList.remove("dn");
    } else {
        map.classList.remove("left");
        map.classList.add("center");
        mapR.classList.remove("dn");
        mapL.classList.remove("dn");
        pinAmazon.classList.remove("dl");
        pinAmazon.classList.add("dn");
        pinAmazon2.classList.add("dli");
        pinAmazon2.classList.remove("dni");
        pinArctic.classList.add("dl");
        pinArctic.classList.remove("dn");
        pinAntarctica.classList.remove("dn");
        pinAntarctica.classList.add("dl");
        pinJapan.classList.add("dn");
        pinJapan.classList.remove("dl");
        pinChina.classList.add("dn");
        pinChina.classList.remove("dl");
        pinChina2.classList.add("dli");
        pinChina2.classList.remove("dni");
        pinTaiwan.classList.add("dn");
        pinTaiwan.classList.remove("dl");
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
const button = document.querySelectorAll('#play-amazon');
const close = document.getElementById('modalId');
const myAmazon = document.getElementById('myAmazon');
const myArctic = document.getElementById('myArctic');
const myAntarctica = document.getElementById('myAmazon');

button.addEventListener("click", addFullscreen);
myAmazon.addEventListener("click", addClose);
myArctic.addEventListener("click", addClose);
myAntarctica.addEventListener("click", addClose);
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

