// стейты

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

const state = {
    blockSendForm: false,
    currentOpenSubmenu: null,
    currentNumberSelectedCities: [],
    cityCaptionError: document.querySelector(
        ".prof-control-panel__caption-error"
    ),
    cursorsSelect: {
        "main-city": document.querySelector("#cursor-main-city"),
        "objects-status": document.querySelector("#cursor-objects-status"),
        "objects-sort": document.querySelector("#cursor-objects-sort"),
        "objects-page": document.querySelector("#cursor-objects-page"),
    },
    submenuSelect: {
        "main-city": document.querySelector("#submenu-main-city"),
        "objects-status": document.querySelector("#submenu-objects-status"),
        "objects-sort": document.querySelector("#submenu-objects-sort"),
        "objects-page": document.querySelector("#submenu-objects-page"),
    },
    inputsSelect: {
        "main-city": document.querySelector("#input-main-city"),
        "objects-status": document.querySelector("#input-objects-status"),
        "objects-sort": document.querySelector("#input-objects-sort"),
        "checkbox-free": document.querySelector("#input-objects-checkobx-free"),
        "checkbox-free-soon": document.querySelector(
            "#input-objects-checkobx-free-soon"
        ),
        "objects-page": document.querySelector("#input-objects-page"),
    },
};

// логика по работе селектов

// проверить, где сработал клик, если за пределами тела селекта, то запустить ф-ию для скрытия текущего открытого подменю
const checkClickOutsideSelect = (e) => {
    // если клик произошел за пределами селекта(label)
    if (!e.target.closest(".prof-control-panel__select-label")) {
        // скрыть текущее подменю
        hideCurrentSubmenu(state.currentOpenSubmenu, true);
    }
};

function setInputValueByValueActiveCheckbox(currentInput) {
    const currentSelectValue = currentInput
        .closest(".prof-control-panel__label-custom")
        .textContent.trim();
    if (!currentInput.checked) {
        state.currentNumberSelectedCities.push(currentSelectValue);
        setGeneralInputValue();
    } else {
        state.currentNumberSelectedCities =
            state.currentNumberSelectedCities.filter(
                (i) => i !== currentSelectValue
            );
        setGeneralInputValue();
    }
}

function setGeneralInputValue() {
    state.blockSendForm = false;
    removeClassElement(
        state.cityCaptionError,
        "prof-control-panel__caption-error_active"
    );
    removeClassElement(
        state.inputsSelect["main-city"],
        "prof-control-panel__error"
    );
    if (!state.currentNumberSelectedCities.length) {
        state.inputsSelect["main-city"].value = "Город";
    } else if (state.currentNumberSelectedCities.length === 1) {
        state.inputsSelect["main-city"].value =
            state.currentNumberSelectedCities;
    } else if (state.currentNumberSelectedCities.length > 3) {
        state.blockSendForm = true;
        addClassElement(
            state.cityCaptionError,
            "prof-control-panel__caption-error_active"
        );
        addClassElement(
            state.inputsSelect["main-city"],
            "prof-control-panel__error"
        );
    } else {
        state.inputsSelect["main-city"].value = "Выбрано несколько";
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
        submenu = null;
        if (deleteListenerOverlay) {
            // удалить слушатель document, т.к. все селекты закрыты
            document.removeEventListener("click", checkClickOutsideSelect);
        }
    }
}

const buttonsSelect = document.querySelectorAll(".button-toggle-select");

buttonsSelect.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (
            e.target.classList.contains(
                "prof-control-panel__select-input_type_personal-offers"
            )
        ) {
            return;
        }
        const currentLabel = e.target.closest(
            ".prof-control-panel__select-label"
        );
        if (e.target.classList.contains("label-checkbox")) {
            setInputValueByValueActiveCheckbox(
                e.target.closest(".label-checkbox").children[0]
            );
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

// логика наведения на текст в списке

const listTable = document.querySelectorAll(
    ".prof-table__row-content.heading-h5"
);

listTable.forEach((i) =>
    i.addEventListener("mouseenter", (e) => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = `
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.6364 3.3636L8 4.76837e-07L3.49691e-07 -2.22545e-07L3.3636 3.3636C3.71508 3.71508 4.28492 3.71508 4.6364 3.3636Z" fill="#2A2E33"></path>
    </svg>

    <p class="tooltip__inner">${e.target.textContent}
    </p>`;
        e.target.prepend(tooltip);
    })
);

listTable.forEach((i) =>
    i.addEventListener("mouseleave", (e) => {
        const tooltip = e.target.querySelector(".tooltip");
        if (tooltip) tooltip.remove();
    })
);

// логика работы селекта Сортировать, установка значения в инпут при загрузке страницы по активному классу

const fieldsSort = document.querySelectorAll(
    ".main-submenu__item_style_prof-control-panel-sort"
);

fieldsSort.forEach((i) => {
    if (i.classList.contains("main-submenu__item_active")) {
        state.inputsSelect["objects-sort"].value =
            i.children[0].textContent.trim();
    }
});

// логика работы формы

const formObjects = document.querySelector("form.prof-control-panel");
const inputSearch = document.querySelector(".prof-control-panel__input-search");

inputSearch.addEventListener("blur", () => {
    if (!state.blockSendForm) {
        formObjects.submit();
    }
});

formObjects.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.blockSendForm) {
        formObjects.submit();
    }
});

const inputsNumber = document.querySelectorAll("input[type=number]");

inputsNumber.forEach((i) =>
    i.addEventListener("input", (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
    })
);

// логика работы вкладки "Персональные предложения"

const buttonEditPersonalOffers = document.querySelector(
    ".prof-control-panel__icon-save"
);
const overlaySettingsPersonalOffers = document.querySelector(
    ".prof-control-panel__overlay"
);

const buttonSubmitPersonalOffers = document.querySelector(
    ".prof-control-panel__button_type_personal-offers"
);

const tooltipButtonSubmitPersonalOffers = document.querySelector(
    ".tooltip__inner_type_personal-offers"
);

buttonEditPersonalOffers.addEventListener("click", () => {
    if (
        buttonEditPersonalOffers.classList.contains(
            "prof-control-panel__icon-save_active"
        )
    ) {
        removeClassElement(overlaySettingsPersonalOffers, "mix-display-none");
        removeClassElement(
            buttonEditPersonalOffers,
            "prof-control-panel__icon-save_active"
        );
    } else {
        addClassElement(overlaySettingsPersonalOffers, "mix-display-none");
        addClassElement(
            buttonEditPersonalOffers,
            "prof-control-panel__icon-save_active"
        );
    }
});

buttonSubmitPersonalOffers.addEventListener("click", (e) => {
    e.preventDefault();
    toggleStateButtonSumitPersonalOffers();
});

function toggleStateButtonSumitPersonalOffers() {
    if (buttonSubmitPersonalOffers.textContent.trim() === "Отключить") {
        buttonSubmitPersonalOffers.textContent = "Включить";
        tooltipButtonSubmitPersonalOffers.textContent =
            "Включить персональный поиск";
        removeClassElement(
            overlaySettingsPersonalOffers,
            "prof-control-panel__overlay_type_wide"
        );
    } else {
        if (
            overlaySettingsPersonalOffers.classList.contains("mix-display-none")
        ) {
            return;
        }
        buttonSubmitPersonalOffers.textContent = "Отключить";
        tooltipButtonSubmitPersonalOffers.textContent =
            "Отключить персональный поиск";
        addClassElement(
            overlaySettingsPersonalOffers,
            "prof-control-panel__overlay_type_wide"
        );
        formObjects.submit();
    }
}

if (buttonSubmitPersonalOffers.textContent.trim() === "Отключить") {
    tooltipButtonSubmitPersonalOffers.textContent =
        "Отлючить персональный поиск";
    addClassElement(
        overlaySettingsPersonalOffers,
        "prof-control-panel__overlay_type_wide"
    );
} else {
    tooltipButtonSubmitPersonalOffers.textContent =
        "Включить персональный поиск";
    removeClassElement(
        overlaySettingsPersonalOffers,
        "prof-control-panel__overlay_type_wide"
    );
}

// логика нажатия по значку глаза

const buttonsEye = document.querySelectorAll(".prof-marker_type_eye");

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

buttonsEye.forEach((i) =>
    i.addEventListener("click", () => {
        const viewed = i.classList.contains("prof-marker_type_eye-active");
        const data = { viewed: !viewed };
        fetch(i.getAttribute("data-url"), {
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
                if (viewed) {
                    removeClassElement(i, "prof-marker_type_eye-active");
                } else {
                    addClassElement(i, "prof-marker_type_eye-active");
                }
            }
        });
    })
);
