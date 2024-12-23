let mobileHidden = document.querySelectorAll(".mobile-hidden")
let desktopHidden = document.querySelectorAll(".desktop-hidden")

let media = window.matchMedia("(max-width: 900px)");

function mediaQuery(media){
    if (media.matches && !mobileHidden[0].classList.contains("hidden")) {
        for (let i = 0; i < mobileHidden.length; i++)
            mobileHidden[i].classList.add("hidden");
        for (let i = 0; i < desktopHidden.length; i++)
            desktopHidden[i].classList.remove("hidden");
    } else if (!media.matches && mobileHidden[0].classList.contains("hidden")) {
        for (let i = 0; i < mobileHidden.length; i++)
            mobileHidden[i].classList.remove("hidden");
        for (let i = 0; i < desktopHidden.length; i++)
            desktopHidden[i].classList.add("hidden");
    }
}

media.addEventListener("change", mediaQuery);
mediaQuery(media);