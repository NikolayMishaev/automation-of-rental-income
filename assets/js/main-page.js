import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// стейты

const state = {
    formMainSubmit: true,
    currentOpenSubmenu: null,
    currentOpenSubmenuSelectClassType: null,
    cursorsSelect: {
        "main-page-desktop": document.querySelector(
            "#cursor-main-page-desktop"
        ),
        "main-sort": document.querySelector("#cursor-main-sort"),
        "main-page-mobile": document.querySelector("#cursor-main-page-mobile"),
        "main-city": document.querySelector("#cursor-main-city"),
        "main-street": document.querySelector("#cursor-main-street"),
        "main-underground": document.querySelector("#cursor-main-underground"),
    },
    submenuSelect: {
        "main-page-desktop": document.querySelector(
            "#submenu-main-page-desktop"
        ),
        "main-sort": document.querySelector("#submenu-main-sort"),
        "main-page-mobile": document.querySelector("#submenu-main-page-mobile"),
        "main-city": document.querySelector("#submenu-main-city"),
        "main-street": document.querySelector("#submenu-main-street"),
        "main-underground": document.querySelector("#submenu-main-underground"),
    },
    inputsSelect: {
        "main-page-desktop": document.querySelector("#input-main-page-desktop"),
        "main-sort": document.querySelector("#input-main-sort"),
        "main-page-mobile": document.querySelector("#input-main-page-mobile"),
        "main-city": document.querySelector("#input-main-city"),
        "main-street": document.querySelector("#input-main-street"),
        "main-underground": document.querySelector("#input-main-underground"),
    },
    submenuListPage: document.querySelectorAll(".main-submenu__list_type_page"),
};

// логика переключения кнопок "Список", "Карта"

const mainButtons = document.querySelectorAll(".main-btn");
const contentCards = document.querySelector(".main__cards-container");
const contentMap = document.querySelector(".main__map");
const controlPanelLeft = document.querySelector(
    ".main__control-panel-desktop-left"
);
const blockPagination = document.querySelector(".main__pagination");
const selectChangePage = document.querySelector(".main__change-page");

mainButtons.forEach((i) => {
    i.addEventListener("click", (e) => {
        switchButtons(
            e.target,
            mainButtons,
            [contentCards, contentMap],
            "main-btn_active",
            "mix-display-none"
        );
        if (contentCards.classList.contains("mix-display-none")) {
            addClassElement(controlPanelLeft, "mix-display-none");
            addClassElement(blockPagination, "mix-display-none");
            addClassElement(selectChangePage, "mix-display-none");
            minimizeFiltersPanel();
        } else {
            removeClassElement(controlPanelLeft, "mix-display-none");
            removeClassElement(blockPagination, "mix-display-none");
            removeClassElement(selectChangePage, "mix-display-none");
            expandFiltersPanel();
        }
    });
});

// логика по сворачиванию панели фильтров

const mainContainerFilters = document.querySelector(".main__container");
const AllFiltersPanel = document.querySelector(".main-form__wrapper-fields");
const buttonMinimizeFiltersPanel = document.querySelector(
    ".main-form__button_type_minimize"
);

function minimizeFiltersPanel() {
    removeClassElement(AllFiltersPanel, "main-form__wrapper-fields_active");
    buttonMinimizeFiltersPanel.textContent = "Все фильтры";
    mainContainerFilters.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// логика по развертыванию панели фильтров

function expandFiltersPanel() {
    addClassElement(AllFiltersPanel, "main-form__wrapper-fields_active");
    buttonMinimizeFiltersPanel.textContent = "Свернуть фильтры";
    mainContainerFilters.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// логика работы кнопки по сворачиванию и развертыванию панили фильтров

buttonMinimizeFiltersPanel.addEventListener("click", () => {
    if (buttonMinimizeFiltersPanel.textContent === "Все фильтры") {
        expandFiltersPanel();
    } else {
        minimizeFiltersPanel();
    }
});

// // логика кнопки фильтров по клику на иконку с фильтрами в мобильной версии
const iconFilters = document.querySelector(".main__control-panel-icon_filters");
const leftMainColumnPrice = document.querySelector(".main__column_type_price");
const rightMainColumnFilters = document.querySelector(
    ".main__column_type_filters"
);

iconFilters.addEventListener("click", (e) => {
    if (
        !iconFilters.classList.contains(
            "main__control-panel-icon_filters-active"
        )
    ) {
        leftMainColumnPrice.style.display = "none";
        rightMainColumnFilters.style.display = "block";
        iconFilters.classList.add("main__control-panel-icon_filters-active");
    } else {
        leftMainColumnPrice.style.display = "block";
        rightMainColumnFilters.style.display = "none";
        iconFilters.classList.remove("main__control-panel-icon_filters-active");
    }
});

// логика при ресайзе

window.addEventListener("resize", function (e) {
    if (
        e.target.innerWidth > 1280 &&
        iconFilters.classList.contains(
            "main__control-panel-icon_filters-active"
        )
    ) {
        leftMainColumnPrice.style.display = "block";
    } else if (
        e.target.innerWidth < 1280 &&
        iconFilters.classList.contains(
            "main__control-panel-icon_filters-active"
        )
    ) {
        leftMainColumnPrice.style.display = "none";
    }
    if (e.target.innerWidth > 1280) {
        rightMainColumnFilters.style.display = "block";
    } else if (
        e.target.innerWidth < 1280 &&
        !iconFilters.classList.contains(
            "main__control-panel-icon_filters-active"
        )
    ) {
        rightMainColumnFilters.style.display = "none";
    }
});

// отправка AJAX запроса на лайк карточки
const mainCardsContainer = document.querySelector(".main__cards-container");

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie("csrftoken");

mainCardsContainer.addEventListener("click", (e) => {
    const currentTargetLike = e.target.classList.contains("card-price__like");
    if (currentTargetLike) {
        const currentLike = e.target.classList.contains(
            "card-price__like_active"
        );
        const data = { is_like: !currentLike };
        fetch(e.target.getAttribute("data-url"), {
            method: "POST",
            credentials: "same-origin",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": csrftoken,
            },
        }).then((response) => {
            if (response.ok) {
                if (currentLike) {
                    removeClassElement(e.target, "card-price__like_active");
                } else {
                    addClassElement(e.target, "card-price__like_active");
                }
            }
        });
    }
});

// логика аккордеона адреса
const containerFiltersAdress = document.querySelector(
    "#container-filters-full-adress"
);

const cursorAdressMainForm = document.querySelector("#main-form-cursor-adress");
const submenuAdressMainForm = document.querySelector(".main-form__adress");

cursorAdressMainForm.addEventListener("click", (e) => {
    if (e.target.classList.contains("main-form__cursor")) {
        if (submenuAdressMainForm.closest(".main-form__adress_active")) {
            removeClassElement(
                submenuAdressMainForm,
                "main-form__adress_active"
            );
            removeClassElement(
                cursorAdressMainForm,
                "main-form__cursor_active"
            );
            removeClassElement(containerFiltersAdress, "mix-overflow-unset");
        } else {
            addClassElement(submenuAdressMainForm, "main-form__adress_active");
            addClassElement(cursorAdressMainForm, "main-form__cursor_active");
            addClassElement(containerFiltersAdress, "mix-overflow-unset");
        }
    }
});

// логика работы всплывающего меню по клику на курсор в фильтре "тип помещения"
const cursorChangeTypeMainForm = document.querySelector(
    "#main-form-cursor-change-type"
);

const wrapperInputChangeType = document.querySelector(
    ".main-form__wrapper-input_type_change-type"
);

const submenuFilterChangeType = document.querySelector(
    ".main-submenu_style_main-form-change-type"
);

wrapperInputChangeType.addEventListener("click", () => {
    toggleActiveClass(submenuFilterChangeType, cursorChangeTypeMainForm);
});

function toggleActiveClass(submenu, cursor) {
    if (submenu.closest(".mix-visible")) {
        submenu.classList.remove("mix-visible");
        cursor.classList.remove("main-form__cursor_active");
        document.removeEventListener("click", checkClickOutsideSelect);
    } else {
        submenu.classList.add("mix-visible");
        cursor.classList.add("main-form__cursor_active");
        setListenerClickOutsideSelect();
        if (
            state.currentOpenSubmenuSelectClassType &&
            state.currentOpenSubmenuSelectClassType.submenu !== submenu
        ) {
            state.currentOpenSubmenuSelectClassType.submenu.classList.remove(
                "mix-visible"
            );
            state.currentOpenSubmenuSelectClassType.cursor.classList.remove(
                "main-form__cursor_active"
            );
        }
        state.currentOpenSubmenuSelectClassType = {
            submenu: submenu,
            cursor: cursor,
        };
    }
}

// изменение значения value инпута после клика по значению поля селекта в фильтре "тип помещения"
const labelSelectChangeType = document.querySelectorAll(".select-change-type");

const inputChangeType = document.querySelector(
    "#main-form-filter-input-change-type"
);

changeValueInputSelect(labelSelectChangeType, inputChangeType);

function changeValueInputSelect(items, valueInput) {
    items.forEach((i) =>
        i.addEventListener("click", (e) => {
            if (
                e.target.classList.contains("main-form__label-checkbox") ||
                e.target.classList.contains("main-form__visible-input")
            ) {
                return;
            }
            if (i.classList.contains("custom-select-active")) {
                i.classList.remove("custom-select-active");
            } else {
                i.classList.add("custom-select-active");
            }
            let countActiveItmes = 0;
            items.forEach((j) => {
                if (j.closest(".custom-select-active")) {
                    countActiveItmes += 1;
                    valueInput.value = j.textContent;
                }
                if (countActiveItmes > 1) {
                    valueInput.value = "Выбрано несколько значений";
                }
                if (countActiveItmes === 0) {
                    valueInput.value = "";
                }
            });
        })
    );
}

// логика работы всплывающего меню по клику на курсор в фильтре "классификация помещения"
const cursorChangeClassMainForm = document.querySelector(
    "#main-form-cursor-change-class"
);

const wrapperInputChangeClass = document.querySelector(
    ".main-form__wrapper-input_type_change-class"
);

const submenuFilterChangeClass = document.querySelector(
    ".main-submenu_style_main-form-change-class"
);

wrapperInputChangeClass.addEventListener("click", () => {
    toggleActiveClass(submenuFilterChangeClass, cursorChangeClassMainForm);
    setListenerClickOutsideSelect();
});

// изменение значения value инпута после клика по значению поля селекта в фильтре "классификация помещения"
const labelSelectChangeClass = document.querySelectorAll(
    ".select-change-class"
);
const InputChangeClass = document.querySelector(
    "#main-form-filter-input-change-class"
);

changeValueInputSelect(labelSelectChangeClass, InputChangeClass);

// логика перехода по клику на карточку на страницу с карточками
const cardPriceContainerBigCards = document.querySelector(
    ".main__cards-container"
);
cardPriceContainerBigCards.addEventListener("click", (e) => {
    e.preventDefault();
    const currentLink = e.target.closest(".card-price__link").href;
    if (e.target.closest(".card-price__like")) {
        return;
    }
    if (
        e.target.classList.contains("swiper-button-next") ||
        e.target.classList.contains("swiper-button-prev")
    ) {
        return;
    }
    if (e.target.closest(".card-price_style_main")) {
        location.href = currentLink;
    }
});

// логика закрытия подменю селектов выбора типа помещения и классификация помещения по кнопке "Выбрать"

const buttonConfirmChangeType = document.querySelector(
    "#button-filter-confirm-change-type"
);
const buttonConfirmChangeClass = document.querySelector(
    "#button-filter-confirm-change-class"
);

buttonConfirmChangeType.addEventListener("click", (e) => {
    toggleActiveClass(submenuFilterChangeType, cursorChangeTypeMainForm);
});

buttonConfirmChangeClass.addEventListener("click", (e) => {
    toggleActiveClass(submenuFilterChangeClass, cursorChangeClassMainForm);
});

// сброс активных классов у кастомных селектов

const buttonReset = document.querySelector(".main-form__button_type_reset");

buttonReset.addEventListener("click", () => {
    const inputsSelectActive = document.querySelectorAll(
        ".custom-select-active"
    );
    inputsSelectActive.forEach((i) =>
        i.classList.remove("custom-select-active")
    );
});

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

// логика по работе селектов

// проверить, где сработал клик, если за пределами тела селекта, то запустить ф-ию для скрытия текущего открытого подменю
const checkClickOutsideSelect = (e) => {
    // если клик произошел за пределами селекта(label)
    if (!e.target.closest(".prof-control-panel__select-label")) {
        // скрыть текущее подменю
        hideCurrentSubmenu(state.currentOpenSubmenu, true);
    }
    if (!e.target.closest(".main-form__label_type_select")) {
        // скрыть текущее подменю
        if (state.currentOpenSubmenuSelectClassType) {
            state.currentOpenSubmenuSelectClassType.submenu.classList.remove(
                "mix-visible"
            );
            state.currentOpenSubmenuSelectClassType.cursor.classList.remove(
                "main-form__cursor_active"
            );
            document.removeEventListener("click", checkClickOutsideSelect);
        }
    }
};

function setInputValueByValueActiveCheckbox() {
    if (
        state.inputsSelect["checkbox-free"].checked &&
        state.inputsSelect["checkbox-free-soon"].checked
    ) {
        state.inputsSelect["objects-status"].value = "Выбрано несколько";
    } else if (state.inputsSelect["checkbox-free"].checked) {
        state.inputsSelect["objects-status"].value = "Свободен";
    } else if (state.inputsSelect["checkbox-free-soon"].checked) {
        state.inputsSelect["objects-status"].value = "Скоро освободится";
    } else {
        state.inputsSelect["objects-status"].value = "Все";
    }
}

function toggleVisibleSubmenuSecondLevel(currentLabel) {
    if (
        !currentLabel.classList.contains(
            "prof-control-panel__select-label_active"
        )
    ) {
        addClassElement(
            state.submenuSelect[currentLabel.ariaLabel],
            "mix-visible"
        );
        addClassElement(
            currentLabel,
            "prof-control-panel__select-label_active"
        );
        state.currentOpenSubmenuSecondLevel =
            state.submenuSelect[currentLabel.ariaLabel];
        if (state.cursorsSelect[currentLabel.ariaLabel]) {
            addClassElement(
                state.cursorsSelect[currentLabel.ariaLabel],
                "prof-control-panel__cursor_active"
            );
        }
    } else {
        hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, false);
    }
}

// установить слушатель клика на весь документ и отслеживать клик вне тела селекта
function setListenerClickOutsideSelect() {
    document.addEventListener("click", checkClickOutsideSelect);
}

// скрыть текущее открытое подменю селекта
function hideCurrentSubmenu(submenu, deleteListenerOverlay) {
    // если в стейте есть текущее открытое подменю
    if (submenu) {
        // найти по подменю текущий селект
        const currentSelectLabel = submenu.closest(
            ".prof-control-panel__select-label"
        );
        // удалить активный класс у текущего селекта
        removeClassElement(
            currentSelectLabel,
            "prof-control-panel__select-label_active"
        );
        // удалить активный класс у текущего курсора
        if (state.cursorsSelect[currentSelectLabel.ariaLabel]) {
            removeClassElement(
                state.cursorsSelect[currentSelectLabel.ariaLabel],
                "prof-control-panel__cursor_active"
            );
        }
        // скрыть текущее открытое подменю
        removeClassElement(submenu, "mix-visible");
        // удалить текущий селект из стейта
        state.currentOpenSubmenu = null;
        if (deleteListenerOverlay) {
            // удалить слушатель document, т.к. все селекты закрыты
            document.removeEventListener("click", checkClickOutsideSelect);
        }
    }
}

const buttonsSelect = document.querySelectorAll(".button-toggle-select");

buttonsSelect.forEach((i) =>
    i.addEventListener("click", (e) => {
        const currentLabel = e.target.closest(
            ".prof-control-panel__select-label"
        );
        if (
            e.target.classList.contains(
                "prof-control-panel__select-input_type_main"
            )
        ) {
            return;
        }
        if (
            e.target.closest(".label-checkbox") &&
            e.target.closest(".label-checkbox").ariaLabel === "checkbox"
        ) {
            setInputValueByValueActiveCheckbox();
            return;
        }
        if (e.target.ariaLabel === "linked") {
            const currentValue = e.target.textContent.trim();
            state.inputsSelect["main-page-desktop"].value = currentValue;
            state.inputsSelect["main-page-mobile"].value = currentValue;
            replaceActiveClass(state.submenuListPage, currentValue);
            hideCurrentSubmenu(state.currentOpenSubmenu, true);
            return;
        }
        if (e.target.ariaLabel === "item") {
            state.inputsSelect[currentLabel.ariaLabel].value =
                e.target.textContent.trim();
            Array.from(
                e.target.closest(".main-submenu__list").children
            ).forEach((i) =>
                removeClassElement(i, "main-submenu__item_active")
            );
            addClassElement(
                e.target.closest(".main-submenu__item"),
                "main-submenu__item_active"
            );
            hideCurrentSubmenu(state.currentOpenSubmenu, true);
            return;
        }
        if (e.target.classList.contains("prof-control-panel__button")) {
            hideCurrentSubmenu(state.currentOpenSubmenu, true);
            return;
        }
        if (e.target.closest(".main-submenu")) {
            const currentLabelSecondLevel = e.target.closest(
                ".prof-control-panel__select-label"
            );
            if (
                currentLabelSecondLevel &&
                currentLabelSecondLevel.ariaLabel.includes("division")
            ) {
                toggleVisibleSubmenuSecondLevel(currentLabelSecondLevel);
            }
            return;
        }
        if (currentLabel) {
            if (
                !currentLabel.classList.contains(
                    "prof-control-panel__select-label_active"
                )
            ) {
                hideCurrentSubmenu(state.currentOpenSubmenu, true);
                addClassElement(
                    state.submenuSelect[currentLabel.ariaLabel],
                    "mix-visible"
                );
                state.currentOpenSubmenu =
                    state.submenuSelect[currentLabel.ariaLabel];
                setListenerClickOutsideSelect();
                addClassElement(
                    currentLabel,
                    "prof-control-panel__select-label_active"
                );
                if (state.cursorsSelect[currentLabel.ariaLabel]) {
                    addClassElement(
                        state.cursorsSelect[currentLabel.ariaLabel],
                        "prof-control-panel__cursor_active"
                    );
                }
            } else {
                hideCurrentSubmenu(state.currentOpenSubmenu, true);
            }
        }
    })
);

function replaceActiveClass(array, currentValue) {
    array.forEach((i) =>
        Array.from(i.children).forEach((j) => {
            removeClassElement(j, "main-submenu__item_active");
            if (j.textContent.trim() === currentValue) {
                addClassElement(j, "main-submenu__item_active");
            }
        })
    );
}

// логика работы селекта Сортировать, установка значения в инпут при загрузке страницы по активному классу

const fieldsSort = document.querySelectorAll(
    ".main-submenu__item_style_prof-control-panel-sort"
);

fieldsSort.forEach((i) => {
    if (i.classList.contains("main-submenu__item_active")) {
        state.inputsSelect["main-sort"].value =
            i.children[0].textContent.trim();
    }
});

// логика регистрации

const inputPassword = document.querySelector(".input-register-password");
const captionInputPassword = document.querySelector("#caption-error-password");

const inputEmail = document.querySelector("#input-registraion-login");
const captionInputEmail = document.querySelector("#caption-error-register");

inputPassword.addEventListener("input", () => {
    if (inputPassword.value.length < 8) {
        inputPassword.classList.add("custom-text-input__error-border");
        captionInputPassword.classList.add("custom-text-input__caption_active");
    } else {
        inputPassword.classList.remove("custom-text-input__error-border");
        captionInputPassword.classList.remove(
            "custom-text-input__caption_active"
        );
    }
});

// логика работы модального окна Регистрации, валидация полей

const inputRegistrationLogin = document.querySelector(
    "#input-registraion-login"
);

inputRegistrationLogin.addEventListener("input", () => {
    inputEmail.classList.remove("custom-text-input__error-border");
    captionInputEmail.classList.remove("custom-text-input__caption_active");
});

inputRegistrationLogin.addEventListener("blur", () => {
    state.formMainSubmit = true;
    const data = { "register-email": inputRegistrationLogin.value };
    fetch(inputRegistrationLogin.getAttribute("data-url"), {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": csrftoken,
        },
    })
        .then((response) => {
            if (!response.ok) {
                state.formMainSubmit = false;
                inputEmail.classList.add("custom-text-input__error-border");
                captionInputEmail.textContent =
                    "такой пользователь уже существует";
                captionInputEmail.classList.add(
                    "custom-text-input__caption_active"
                );
            } else {
                inputEmail.classList.remove("custom-text-input__error-border");
                captionInputEmail.classList.remove(
                    "custom-text-input__caption_active"
                );
            }
        })
        .catch(() => {
            state.formMainSubmit = false;
            inputEmail.classList.add("custom-text-input__error-border");
            captionInputEmail.textContent =
                "произошла ошибка, повторите запрос";
            captionInputEmail.classList.add(
                "custom-text-input__caption_active"
            );
        });
});

// если запрос по проверке почты вернул ошибку, т.е. пользователь с таким email уже есть в базе, тогда не делать сабмит

const formMain = document.querySelector(".main-form");

formMain.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.formMainSubmit) {
        formMain.submit();
    }
});
