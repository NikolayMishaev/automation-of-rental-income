export { addClassElement, removeClassElement, switchButtons };

// общие функции
function addClassElement(element, className) {
    element.classList.add(className);
}

function removeClassElement(element, className) {
    element.classList.remove(className);
}

function switchButtons(
    eventTarget,
    arrayButtons,
    arrayContent,
    activeClassButton,
    notActiveClassContent
) {
    if (eventTarget.closest(`.${activeClassButton}`)) {
        return;
    }
    arrayButtons.forEach((i) => removeClassElement(i, activeClassButton));
    addClassElement(eventTarget, activeClassButton);
    arrayContent.forEach((i) => {
        if (i.ariaLabel === eventTarget.ariaLabel) {
            removeClassElement(i, notActiveClassContent);
        } else {
            addClassElement(i, notActiveClassContent);
        }
    });
}

// логика авторизации по клику на "Регистрации" и "Вход" в Header, пока не готовы попапы регистрации
const linkSignIn = document.querySelector("#link-signIn");
const buttonClosePopup = document.querySelector("#button-close-popup-sign-in");
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

// логика открытия всех попапов
// 1__добавить уникальное значение в атрибут aria-label кнопки
// 2__добавить id попапу с тем же значением aria-label
// 3__добавить кнопке класс "button-open-popup"

const buttonsOpenPopup = document.querySelectorAll(".button-open-popup");

buttonsOpenPopup.forEach((i) =>
    i.addEventListener("click", (e) => {
        document
            .querySelector(`#${i.ariaLabel}`)
            .classList.add("mix-visible-scale");
    })
);

// логика закрытия всех попапов по оверлею или крестику

const overlaysPopup = document.querySelectorAll(".main-popup");

overlaysPopup.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("main-popup") ||
            e.target.classList.contains("main-popup__close") ||
            e.target.classList.contains("button-close-popup")
        ) {
            removeClassElement(i, "mix-visible-scale");
        }
    })
);
