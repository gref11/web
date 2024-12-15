document.querySelector("#logo").addEventListener("click", clickLogo);
menu = document.querySelector("#menu");
menuList = document.querySelector("#menu-list");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function clickLogo(e) {
    e.target.src=`src/img/logo${getRandomInt(2, 4)}.png`;
    e.target.removeEventListener("click", clickLogo);
}

function clickMenu() {
    menuList.classList.toggle("hidden");
    if (menuList.classList.contains("hidden"))
        menu.querySelector("span").innerHTML = "Меню ∨"
    else
        menu.querySelector("span").innerHTML = "Меню ∧"
}

function hideMenu(e) {
    if (e.target.id == "menu" || e.target.parentElement && e.target.parentElement.id == "menu" || menuList.classList.contains("hidden"))
        return;
    clickMenu();
}

function footerScroll(e) {
    // console.log(window.scrollY);
}

document.addEventListener("click", hideMenu);
menu.addEventListener("click", clickMenu);

window.addEventListener("scroll", footerScroll);
// window.addEventListener("click", function(e) {
//     console.log(e.pageX, e.pageY);
// })