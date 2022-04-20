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
    currentOpenSubmenu: null,
    cursorsSelect: {
        "objects-status": document.querySelector("#cursor-objects-status"),
        "objects-sort": document.querySelector("#cursor-objects-sort"),
        "objects-page": document.querySelector("#cursor-objects-page"),
    },
    submenuSelect: {
        "objects-status": document.querySelector("#submenu-objects-status"),
        "objects-sort": document.querySelector("#submenu-objects-sort"),
        "objects-page": document.querySelector("#submenu-objects-page"),
    },
    inputsSelect: {
        "objects-status": document.querySelector("#input-objects-status"),
        "objects-sort": document.querySelector("#input-objects-sort"),
        "checkbox-free": document.querySelector("#input-objects-checkobx-free"),
        "checkbox-free-soon": document.querySelector(
            "#input-objects-checkobx-free-soon"
        ),
        "objects-page": document.querySelector("#input-objects-page"),
    },
};

// логика переключения табов: "Документы", "Избранные объекты", "О себе"

const tabButtons = document.querySelectorAll(".prof-general__button");

const generalContentDocuments = document.querySelector("#documents");
const generalContentFavourites = document.querySelector("#favourites");
const generalContentAboutMe = document.querySelector("#about-me");

const arrayGeneralContent = [
    generalContentDocuments,
    generalContentFavourites,
    generalContentAboutMe,
];

tabButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            tabButtons,
            arrayGeneralContent,
            "prof-general__button_active",
            "mix-display-none"
        )
    )
);

// логика переключения кнопок на вкладке "Документы": "Список", "Карточки"

const favouritesButtons = document.querySelectorAll(".favourites-button");

const contentTable = document.querySelector("#favourites-table");
const contentCards = document.querySelector("#favourites-cards");

favouritesButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            favouritesButtons,
            [contentTable, contentCards],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика действий при загрузе страницы на определенном разрешении

let interval = setInterval(() => {
    if (innerWidth > 300) {
        if (innerWidth < 981) {
            removeClassElement(contentCards, "mix-display-none");
        }
        clearInterval(interval);
    }
}, 1000);
// логика действий при ресайзе
// общие функции для этого блока логики

function resetActiveClassButton(arrayButtons) {
    arrayButtons.forEach((i) => {
        if (i.ariaLabel === "list") {
            removeClassElement(i, "prof-control-panel__button_active");
        } else {
            addClassElement(i, "prof-control-panel__button_active");
        }
    });
}

window.addEventListener("resize", function (e) {
    // если таблица скрыта, то ничего не делаем
    if (e.target.innerWidth < 981) {
        if (!contentTable.classList.contains("mix-display-none")) {
            // показываем карточки, скрываем таблицу, переключаем активную кнопку на карточки
            removeClassElement(contentCards, "mix-display-none");
            addClassElement(contentTable, "mix-display-none");
            resetActiveClassButton(favouritesButtons);
        }
    }
});

// логика по работе селектов

// проверить, где сработал клик, если за пределами тела селекта, то запустить ф-ию для скрытия текущего открытого подменю
const checkClickOutsideSelect = (e) => {
    // если клик произошел за пределами селекта(label)
    if (!e.target.closest(".prof-control-panel__select-label")) {
        // скрыть текущее подменю
        hideCurrentSubmenu(state.currentOpenSubmenu, true);
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
        const currentLabel = e.target.closest(
            ".prof-control-panel__select-label"
        );
        if (
            e.target.closest(".label-checkbox") &&
            e.target.closest(".label-checkbox").ariaLabel === "checkbox"
        ) {
            setInputValueByValueActiveCheckbox();
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
