import { addClassElement, removeClassElement } from "./../common functions.js";

// стейты

const state = {
    currentOpenPopup: null,
    currentOpenSubmenu: null,
    currentOpenSubmenuSecondLevel: null,
    cursorsSelect: {
        "analytics-period-ankets": document.querySelector(
            "#cursor-analytics-period-ankets"
        ),
        ankets: document.querySelector("#cursor-ankets"),
        "type-activity": document.querySelector("#cursor-type-activity"),
        "ankets-status": document.querySelector("#cursor-ankets-status"),
        "ankets-views": document.querySelector("#cursor-ankets-views"),
        "objects-status": document.querySelector("#cursor-objects-status"),
        "objects-sort": document.querySelector("#cursor-objects-sort"),
        "objects-page": document.querySelector("#cursor-objects-page"),
        // "agents-status": document.querySelector("#cursor-agents-status"),
        // "agents-period": document.querySelector("#cursor-agents-period"),
        "agents-page-actual": document.querySelector(
            "#cursor-agents-page-actual"
        ),
        // "agents-page-archive": document.querySelector(
        //     "#cursor-agents-page-archive"
        // ),
        "analytics-period-users": document.querySelector(
            "#cursor-analytics-period-users"
        ),
        "analytics-page-users": document.querySelector(
            "#cursor-analytics-page-users"
        ),
        "analytics-period-size": document.querySelector(
            "#cursor-analytics-period-size"
        ),
        "division-size": document.querySelector("#cursor-division-size"),
        "analytics-page-size": document.querySelector(
            "#cursor-analytics-page-size"
        ),
        "analytics-period-views": document.querySelector(
            "#cursor-analytics-period-views"
        ),
        "division-views": document.querySelector("#cursor-division-views"),
        "analytics-page-views": document.querySelector(
            "#cursor-analytics-page-views"
        ),
        "analytics-period-appeals": document.querySelector(
            "#cursor-analytics-period-appeals"
        ),
        "analytics-page-appeals": document.querySelector(
            "#cursor-analytics-page-appeals"
        ),
        "analytics-period-feedback": document.querySelector(
            "#cursor-analytics-period-feedback"
        ),
        "analytics-page-feedback": document.querySelector(
            "#cursor-analytics-page-feedback"
        ),
        "analytics-period-portal": document.querySelector(
            "#cursor-analytics-period-portal"
        ),
        "analytics-page-portal": document.querySelector(
            "#cursor-analytics-page-portal"
        ),
        "structure-offers": document.querySelector("#cursor-structure-offers"),
    },
    submenuSelect: {
        "analytics-period-ankets": document.querySelector(
            "#submenu-analytics-period-ankets"
        ),
        ankets: document.querySelector("#submenu-ankets"),
        "type-activity": document.querySelector("#submenu-type-activity"),
        "ankets-status": document.querySelector("#submenu-ankets-status"),
        "ankets-views": document.querySelector("#submenu-ankets-views"),
        "objects-status": document.querySelector("#submenu-objects-status"),
        "objects-sort": document.querySelector("#submenu-objects-sort"),
        "objects-page": document.querySelector("#submenu-objects-page"),
        // "agents-status": document.querySelector("#submenu-agents-status"),
        // "agents-period": document.querySelector("#submenu-agents-period"),
        "agents-page-actual": document.querySelector(
            "#submenu-agents-page-actual"
        ),
        // "agents-page-archive": document.querySelector(
        //     "#submenu-agents-page-archive"
        // ),
        "analytics-period-users": document.querySelector(
            "#submenu-analytics-period-users"
        ),
        "analytics-users": document.querySelector("#submenu-analytics-users"),
        "analytics-page-users": document.querySelector(
            "#submenu-analytics-page-users"
        ),
        "analytics-period-size": document.querySelector(
            "#submenu-analytics-period-size"
        ),
        "analytics-size": document.querySelector("#submenu-analytics-size"),
        "division-size": document.querySelector("#submenu-division-size"),
        "analytics-page-size": document.querySelector(
            "#submenu-analytics-page-size"
        ),
        "analytics-period-views": document.querySelector(
            "#submenu-analytics-period-views"
        ),
        "analytics-views": document.querySelector("#submenu-analytics-views"),
        "division-views": document.querySelector("#submenu-division-views"),
        "analytics-page-views": document.querySelector(
            "#submenu-analytics-page-views"
        ),
        "analytics-period-appeals": document.querySelector(
            "#submenu-analytics-period-appeals"
        ),
        "analytics-appeals": document.querySelector(
            "#submenu-analytics-appeals"
        ),
        "analytics-page-appeals": document.querySelector(
            "#submenu-analytics-page-appeals"
        ),
        "analytics-period-feedback": document.querySelector(
            "#submenu-analytics-period-feedback"
        ),
        "analytics-feedback": document.querySelector(
            "#submenu-analytics-feedback"
        ),
        "analytics-page-feedback": document.querySelector(
            "#submenu-analytics-page-feedback"
        ),
        "analytics-period-portal": document.querySelector(
            "#submenu-analytics-period-portal"
        ),
        "analytics-portal": document.querySelector("#submenu-analytics-portal"),
        "analytics-page-portal": document.querySelector(
            "#submenu-analytics-page-portal"
        ),
        "structure-offers": document.querySelector("#submenu-structure-offers"),
    },
    inputsSelect: {
        "analytics-period-ankets": document.querySelector(
            "#input-analytics-period-ankets"
        ),
        ankets: document.querySelector("#input-ankets"),
        "type-activity": document.querySelector("#input-type-activity"),
        "ankets-status": document.querySelector("#input-ankets-status"),
        "ankets-views": document.querySelector("#input-ankets-views"),
        "checkbox-free": document.querySelector("#input-objects-checkobx-free"),
        "checkbox-free-soon": document.querySelector(
            "#input-objects-checkobx-free-soon"
        ),
        "objects-status": document.querySelector("#input-objects-status"),
        "objects-sort": document.querySelector("#input-objects-sort"),
        "objects-page": document.querySelector("#input-objects-page"),
        // "agents-status": document.querySelector("#input-agents-status"),
        // "agents-period": document.querySelector("#input-agents-period"),
        "agents-page-actual": document.querySelector(
            "#input-agents-page-actual"
        ),
        // "agents-page-archive": document.querySelector(
        //     "#input-agents-page-archive"
        // ),
        "analytics-period-users": document.querySelector(
            "#input-analytics-period-users"
        ),
        "analytics-users": document.querySelector("#input-analytics-users"),
        "analytics-page-users": document.querySelector(
            "#input-analytics-page-users"
        ),
        "analytics-period-size": document.querySelector(
            "#input-analytics-period-size"
        ),
        "analytics-size": document.querySelector("#input-analytics-size"),
        "division-size": document.querySelector("#input-division-size"),
        "analytics-page-size": document.querySelector(
            "#input-analytics-page-size"
        ),
        "analytics-period-views": document.querySelector(
            "#input-analytics-period-views"
        ),
        "analytics-views": document.querySelector("#input-analytics-views"),
        "division-views": document.querySelector("#input-division-views"),
        "analytics-page-views": document.querySelector(
            "#input-analytics-page-views"
        ),
        "analytics-period-appeals": document.querySelector(
            "#input-analytics-period-appeals"
        ),
        "analytics-appeals": document.querySelector("#input-analytics-appeals"),
        "analytics-page-appeals": document.querySelector(
            "#input-analytics-page-appeals"
        ),
        "analytics-period-feedback": document.querySelector(
            "#input-analytics-period-feedback"
        ),
        "analytics-feedback": document.querySelector(
            "#input-analytics-feedback"
        ),
        "analytics-page-feedback": document.querySelector(
            "#input-analytics-page-feedback"
        ),
        "analytics-period-portal": document.querySelector(
            "#input-analytics-period-portal"
        ),
        "analytics-portal": document.querySelector("#input-analytics-portal"),
        "analytics-page-portal": document.querySelector(
            "#input-analytics-page-portal"
        ),
        "structure-offers": document.querySelector("#input-structure-offers"),
    },
};

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

// логика по работе селектов

// проверить, где сработал клик, если за пределами тела селекта, то запустить ф-ию для скрытия текущего открытого подменю
const checkClickOutsideSelect = (e) => {
    // если клик произошел за пределами селекта(label)
    if (!e.target.closest(".prof-control-panel__select-label")) {
        // скрыть текущее подменю
        hideCurrentSubmenu(state.currentOpenSubmenu, true);
        hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, true);
        state.currentOpenSubmenuSecondLevel = null;
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
        hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, false);
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
        state.currentOpenSubmenuSecondLevel = null;
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
        // очистить стейт

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
            if (state.currentOpenSubmenuSecondLevel) {
                hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, false);
            } else {
                hideCurrentSubmenu(state.currentOpenSubmenu, true);
            }

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
                checkSubmenuSecondLevel(currentLabelSecondLevel.ariaLabel)
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
                hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, true);
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
                hideCurrentSubmenu(state.currentOpenSubmenuSecondLevel, true);
                state.currentOpenSubmenuSecondLevel = null;
            }
        }
    })
);

function checkSubmenuSecondLevel(ariaLabel) {
    return ariaLabel.includes("division") || ariaLabel.includes("structure");
}

const inputSearch = document.querySelector(".prof-control-panel__input-search");
const formOffers = document.querySelector("#form-offers");

inputSearch.addEventListener("blur", () => {
    formOffers.submit();
});

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
