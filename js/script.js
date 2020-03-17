const menu = document.querySelector(".menu")

function myFunction(x) {
  x.classList.toggle("change");

    if(menu.classList[0] ==("expand")){
        menu.classList = "";
        menu.classList.add("retract");}
    else {
        menu.classList = "";
        menu.classList.add("expand");
    }
    }
