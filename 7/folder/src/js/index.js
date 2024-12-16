document.querySelector("#logo").addEventListener("click", clickLogo);
const menu = document.querySelector("#menu");
const menuList = document.querySelector("#menu-list");
const numb = document.querySelector(".numb");
const seedForm = document.querySelector("#seed-form");
const buildingForm = document.querySelector("#building-form");
const coopTypeInput = document.querySelector("#coop-type");
const shedBigInput = document.querySelector("#shed-big");
const gallery = document.querySelector('.gallery-images');

let currentIndex = 0;
let totalImages = 8;
let imagesPerPage = 3;

let media = window.matchMedia("(max-width: 800px)");

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
        menu.querySelector("span").innerHTML = "Меню ∨";
    else
        menu.querySelector("span").innerHTML = "Меню ∧";
}

function hideMenu(e) {
    if (e.target.id == "menu" || e.target.parentElement && e.target.parentElement.id == "menu" || menuList.classList.contains("hidden"))
        return;
    clickMenu();
}

function calcSeedPrice(e) {
    e.preventDefault();
    let num = numb.value;
    let pr1 = e.currentTarget.seed.value;
    if (pr1 == ''){
        alert("Выберите товар");
        return;
    }
    if (!/^[0-9]+$/.test(num)){
        alert("Введите корректное количество");
        return;
    }

    e.target.querySelector(".price").innerHTML = 
        Number(pr1) * Number(num);
}

function calcBuildingPrice(e) {
    e.preventDefault();
    let pr1 = e.currentTarget.building.value;
    let numb = Number(e.currentTarget.numb.value);

    if (numb < 0){
        alert("Введите корректное значение");
        e.currentTarget.numb.value = 0;
        numb = 0;
    }

    let res = 0;
    if (pr1 == ''){
        return;
    }
    switch (pr1){
        case '1':
            res = 1000;
            if (!shedBigInput.classList.contains("none"))
                shedBigInput.classList.add("none");
            if (!coopTypeInput.classList.contains("none"))
                coopTypeInput.classList.add("none");
            break;
        case '2':
            if (coopTypeInput.classList.contains("none"))
                coopTypeInput.classList.remove("none");
            if (!shedBigInput.classList.contains("none"))
                shedBigInput.classList.add("none");
            res = Number(e.currentTarget.cooptype.value);
            break;
        case '3':
            res = 15000;
            if (!coopTypeInput.classList.contains("none"))
                coopTypeInput.classList.add("none");
            if (shedBigInput.classList.contains("none"))
                shedBigInput.classList.remove("none");
            if (e.currentTarget.bigshed.checked)
                res += 5000;
    }

    e.currentTarget.querySelector(".price").innerHTML = 
        res * Number(numb);
}

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalImages - imagesPerPage) {
        currentIndex = totalImages - imagesPerPage;
    }

    let offset = currentIndex * (100 / imagesPerPage);
    gallery.style.transform = `translateX(calc(-${offset}% - ${currentIndex / 2.0}em))`;

    document.getElementById('currentPage').textContent = currentIndex + 1;
}

function mediaQuery(media){
    if (media.matches)
        imagesPerPage = 1;
    else
        imagesPerPage = 3;
    moveSlide(0);
}

document.addEventListener("click", hideMenu);
menu.addEventListener("click", clickMenu);
seedForm.addEventListener("submit", calcSeedPrice);
buildingForm.addEventListener("input", calcBuildingPrice);
media.addEventListener("change", mediaQuery);