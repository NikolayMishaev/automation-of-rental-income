const headerCity = document.querySelector(".header__city");
const modalWidow = document.querySelector(".modal");
const signInButton = document.querySelectorAll(".menu__link");
const menuLinks = document.querySelector(".menu__links");
const menuProfile = document.querySelector(".menu__profile");
const modalCloseMain = document.querySelector(".modal__close-btn");

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

function closePopup() {
    modalWidow.style.opacity = "0";
    modalWidow.style.zIndex = "-1";
    modalWidow.style.transform = "scale(4)";
}

signInButton.forEach((i) =>
    i.addEventListener("click", (e) => {
        menuLinks.style.display = "none";
        menuProfile.style.display = "flex";
    })
);
