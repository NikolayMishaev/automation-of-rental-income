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

// логика работы попапа выбора города

const formChangeCity = document.querySelector("#form-change-city");
const inputChangeCity = document.querySelector("#input-change-city");
const containersCityName = document.querySelectorAll(
    ".popup-change-city__list"
);
const popupChangeCity = document.querySelector(".main-popup_type_change-city");
const itemsCity = document.querySelectorAll(".popup-change-city__item");
const headerCityName = document.querySelector(".header__city-name");

containersCityName.forEach((i) => {
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            itemsCity.forEach((i) =>
                removeClassElement(i, "popup-change-city__item_type_active")
            );
            addClassElement(e.target, "popup-change-city__item_type_active");
            headerCityName.textContent = e.target.textContent.trim();
            inputChangeCity.value = e.target.id;
            formChangeCity.submit();
            removeClassElement(popupChangeCity, "mix-visible-scale");
        }
    });
});

containersCityName.forEach((i) =>
    i.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            inputChangeCity.value = e.target.textContent.trim();
        }
    })
);
