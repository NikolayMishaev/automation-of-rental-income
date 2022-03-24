const headerCity = document.querySelector(".header__city");
const modalWidow = document.querySelector(".modal");
const signInButton = document.querySelectorAll(".menu__link");
const menuLinks = document.querySelector(".menu__links");
const menuProfile = document.querySelector(".menu__profile");
const modalCloseMain = document.querySelector(".modal__close-btn");

const controlPanelBtns = document.querySelectorAll(".main-btn");
const btnList = document.querySelector("#btn-list");
const btnMap = document.querySelector("#btn-map");

const cardsContainer = document.querySelector(".main__cards-container");
const mapContainer = document.querySelector(".main__map");

headerCity.addEventListener("click", (e) => {
    modalWidow.style.opacity = "1";
    modalWidow.style.zIndex = "0";
    modalWidow.style.transform = "scale(1)";
});

modalWidow.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closePopup();
    }
});

modalCloseMain.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn")) {
        closePopup();
    }
});

signInButton.forEach((i) =>
    i.addEventListener("click", (e) => {
        menuLinks.style.display = "none";
        menuProfile.style.display = "flex";
    })
);

controlPanelBtns.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.ariaLabel === "map") {
            btnList.classList.remove("main-btn_active");
            btnMap.classList.add("main-btn_active");
            cardsContainer.style.display = "none";
            mapContainer.style.display = "block";
        } else {
            btnList.classList.add("main-btn_active");
            btnMap.classList.remove("main-btn_active");
            cardsContainer.style.display = "block";
            mapContainer.style.display = "none";
        }
    })
);

function closePopup() {
    modalWidow.style.opacity = "0";
    modalWidow.style.zIndex = "-1";
    modalWidow.style.transform = "scale(4)";
}
