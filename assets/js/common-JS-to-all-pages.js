export { addClassElement, removeClassElement, switchButtons };

// добавление класса анимации для бегущей строки горящих предложений при загрузке страницы
const containerHotPrice = document.querySelector(".hot-price__wrapper");

onload = function () {
    if (containerHotPrice) {
        addClassElement(containerHotPrice, "hot-price__animation");
    }
};

// стейты

const state = {
    currentOpenPopup: null,
    "popup-city": document.querySelector("#popup-city"),
    "popup-notify": document.querySelector("#popup-notify"),
    "modal-reset-password": document.querySelector("#modal-reset-password"),
    "popup-docs": document.querySelector("#popup-docs"),
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
const inputChangeCity = document.querySelector("#input-change-city");
const modalLogin = document.querySelector(".modal-login");

buttonsOpenPopup.forEach((i) =>
    i.addEventListener("click", (e) => {
        document.addEventListener("keydown", handleEscClose);
        inputChangeCity.value = "";
        if (state.currentOpenPopup) {
            addClassElement(state.currentOpenPopup, "mix-display-none");
        }
        state.currentOpenPopup = state[i.ariaLabel];
        removeClassElement(state[i.ariaLabel], "mix-display-none");
        if (i.ariaLabel === "modal-reset-password") {
            modalLogin.style = "none";
        }
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
            addClassElement(i, "mix-display-none");
            state.currentOpenPopup = null;
        }
    })
);
if (state["modal-reset-password"]) {
    state["modal-reset-password"].addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal") ||
            e.target.classList.contains("modal__cancel-btn") ||
            e.target.closest(".modal__close-btn")
        ) {
            addClassElement(state["modal-reset-password"], "mix-display-none");
            state.currentOpenPopup = null;
        }
    });
}

// логика работы попапа выбора города

const formChangeCity = document.querySelector("#form-change-city");
const containersCityName = document.querySelectorAll(
    ".popup-change-city__list"
);
const popupChangeCity = document.querySelector(".main-popup_type_change-city");
const itemsCity = document.querySelectorAll(".popup-change-city__item");
const headerCityName = document.querySelector(".header__city-name");
const captionErrorInputCity = document.querySelector(
    ".popup-change-city__error"
);
const labelErrorInputCity = document.querySelector(".popup-change-city__label");

containersCityName.forEach((i) => {
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            itemsCity.forEach((i) =>
                removeClassElement(i, "popup-change-city__item_type_active")
            );
            addClassElement(e.target, "popup-change-city__item_type_active");
            sendRequest(e.target);
        }
    });
});

// containersCityName.forEach((i) =>
//     i.addEventListener("mouseover", (e) => {
//         if (e.target.classList.contains("popup-change-city__item")) {
//             inputChangeCity.value = e.target.textContent.trim();
//         }
//     })
// );

function checkAvailabilityCity() {
    return Array.from(itemsCity).find(
        (i) =>
            i.textContent.toLocaleLowerCase().trim() ===
            inputChangeCity.value.toLocaleLowerCase().trim()
    );
}

formChangeCity.addEventListener("submit", (e) => {
    e.preventDefault();
    sendRequest(checkAvailabilityCity());
});

inputChangeCity.addEventListener("input", () => {
    hideInputError();
});

function showInputError() {
    addClassElement(captionErrorInputCity, "popup-change-city__error_active");
    addClassElement(labelErrorInputCity, "popup-change-city__label_error");
    addClassElement(inputChangeCity, "popup-change-city__input_error");
}

function hideInputError() {
    removeClassElement(
        captionErrorInputCity,
        "popup-change-city__error_active"
    );
    removeClassElement(labelErrorInputCity, "popup-change-city__label_error");
    removeClassElement(inputChangeCity, "popup-change-city__input_error");
}

function sendRequest(target) {
    if (target) {
        inputChangeCity.value = target.id;
        if (headerCityName) {
            headerCityName.textContent = target.textContent.trim();
        }
        formChangeCity.submit();
        addClassElement(popupChangeCity, "mix-display-none");
    } else {
        showInputError();
    }
}

// логика закрытия модалок по оверлею

const modalAll = document.querySelectorAll(".modal");

modalAll.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal") ||
            e.target.classList.contains("modal__cancel-btn") ||
            e.target.closest(".modal__close-btn")
        ) {
            e.target.style.display = "none";
        }
    })
);

function handleEscClose(e) {
    if (e.key === "Escape") {
        if (state.currentOpenPopup) {
            addClassElement(state.currentOpenPopup, "mix-display-none");
            state.currentOpenPopup = null;
            document.removeEventListener("keydown", handleEscClose);
        }
    }
}

// логика перехода в модальное окно регистрации из модального окна Входа

const linkRegister = document.querySelector(".modal-login__registration-link");
const modalRegistration = document.querySelector(".modal-registration");
const formRegistration = document.querySelector("#form-registration");

if (linkRegister) {
    linkRegister.addEventListener("click", (e) => {
        e.target.closest(".modal").style.display = "none";
        modalRegistration.style.display = "flex";
        formRegistration.reset();
    });
}
