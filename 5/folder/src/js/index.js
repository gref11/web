document.querySelector("#logo").addEventListener("click", clickLogo);
let menu = document.querySelector("#menu");
let menuList = document.querySelector("#menu-list");
let cardList = document.querySelectorAll('input[name="r"]')
let numb = document.querySelector("#numb")
let price = document.querySelector("#price")
let priceForm = document.querySelector("#price-form")

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

function calcPrice(e) {
    e.preventDefault();
    let num = numb.value;
    let pr1 = e.currentTarget.r.value;
    if (pr1 == ''){
        alert("Выберите товар");
        return;
    }
    if (!/^[0-9]+$/.test(num)){
        alert("Введите корректное количество");
        return;
    }

    price.innerHTML = Number(pr1) * Number(num);
}

document.addEventListener("click", hideMenu);
menu.addEventListener("click", clickMenu);
priceForm.addEventListener("submit", calcPrice);