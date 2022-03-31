(function () {
    // логика открытия/закрытия попапа выбора городов "Ваш город"

    const popupOverlay = document.querySelector(".main-popup");

    const headerCity = document.querySelector(".header__city");
    const popupChangeCity = document.querySelector(
        ".main-popup_type_change-city"
    );

    popupOverlay.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("main-popup") ||
            e.target.classList.contains("main-popup__close")
        ) {
            popupChangeCity.classList.remove("mix-visible-scale");
        }
    });

    headerCity.addEventListener("click", (e) => {
        popupChangeCity.classList.add("mix-visible-scale");
    });

    // логика авторизации по клику на "Регистрации" и "Вход" в Header, пока не готовы попапы регистрации
    const linkSignIn = document.querySelector("#link-signIn");
    const buttonClosePopup = document.querySelector(
        "#button-close-popup-sign-in"
    );
    const formSignIn = document.querySelector("#form-sign-in");

    const menuLinks = document.querySelector(".menu__links");
    const menuProfile = document.querySelector(".menu__profile");
    const popupLogIn = document.querySelector(".modal-login");

    formSignIn.addEventListener("submit", (e) => {
        e.preventDefault();
        menuLinks.style.display = "none";
        menuProfile.style.display = "flex";
        popupLogIn.classList.remove("mix-display-flex");
    });

    buttonClosePopup.addEventListener("click", (e) => {
        if (e.target.closest(".modal__close-btn")) {
            popupLogIn.classList.remove("mix-display-flex");
        }
    });

    linkSignIn.addEventListener("click", (e) => {
        popupLogIn.classList.add("mix-display-flex");
    });
})();
