export { addClassElement, removeClassElement, switchButtons };

// стейты

const state = {
    "popup-city": document.querySelector("#popup-city"),
    "popup-notify": document.querySelector("#popup-notify"),
};

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

// логика открытия всех попапов
// 1__добавить уникальное значение в атрибут aria-label кнопки
// 2__добавить id попапу с тем же значением aria-label
// 3__добавить кнопке класс "button-open-popup"

const buttonsOpenPopup = document.querySelectorAll(".button-open-popup");

buttonsOpenPopup.forEach((i) =>
    i.addEventListener("click", (e) => {
        state[i.ariaLabel].classList.add("mix-visible-scale");
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

// логика ввода значение в поля город улица адрес по клику в подменю

const sumbenuAdressContainers = document.querySelectorAll(
    ".main-submenu_style_filters-adress"
);
const inputCity = document.querySelector("#main-form-adress-city");
const inputStreet = document.querySelector("#main-form-adress-street");
const inputUndergound = document.querySelector("#main-form-adress-underground");

sumbenuAdressContainers.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("main-submenu__item")) {
            if (e.target.ariaLabel === "city") {
                inputCity.value = e.target.textContent.trim();
            }
            if (e.target.ariaLabel === "street") {
                inputStreet.value = e.target.textContent.trim();
            }
            if (e.target.ariaLabel === "underground") {
                inputUndergound.value = e.target.textContent.trim();
            }
            e.target
                .closest(".main-submenu_style_filters-adress")
                .classList.remove("mix-visible");
        }
    })
);

const inputCityNamePopup = document.querySelector("#inputCityNamePopup");
const containersCityName = document.querySelectorAll(
    ".popup-change-city__list"
);
const popupChangeCity = document.querySelector(".main-popup_type_change-city");
containersCityName.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            setTimeout(() => {
                popupChangeCity.classList.remove("mix-visible-scale");
            }, 100);
        }
    })
);

containersCityName.forEach((i) =>
    i.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            inputCityNamePopup.value = e.target.textContent.trim();
        }
    })
);

const cityPopupAll = document.querySelectorAll(
    ".popup-change-city__item-popup"
);

cityPopupAll.forEach((i) =>
    i.addEventListener("click", (e) => {
        cityPopupAll.forEach((i) =>
            i.classList.remove("popup-change-city__item_type_active")
        );
        e.target.classList.add("popup-change-city__item_type_active");
        document.querySelector("#link-your-city").textContent =
            e.target.textContent.trim();
    })
);
