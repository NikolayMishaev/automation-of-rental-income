import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

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

// логика переключения табов: "Объекты", "Анкеты контрагентов", "Аналитические данные", "Структура", "Предложения"

const tabButtons = document.querySelectorAll(".prof-general__button");

const generalContentObjects = document.querySelector("#objects");
const generalContentCounterpartyQuestionnaires = document.querySelector(
    "#counterparty-questionnaires"
);
const generalContentAnalyticalData = document.querySelector("#analytical-data");
const generalContentStructure = document.querySelector("#structure");
const generalContentOffers = document.querySelector("#offers");

const arrayGeneralContent = [
    generalContentObjects,
    generalContentCounterpartyQuestionnaires,
    generalContentAnalyticalData,
    generalContentStructure,
    generalContentOffers,
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

// логика переключения кнопок на вкладке "Объекты": "Список", "Карточки"

const objectsButtons = document.querySelectorAll(".objects-button");

const contentTable = document.querySelector("#objects-table");
const contentCards = document.querySelector("#objects-cards");

objectsButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            objectsButtons,
            [contentTable, contentCards],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика переключения кнопок на вкладке "Анкеты контрагентов": "Актуальные", "Архив"

const agentButtons = document.querySelectorAll(".agent-button");

const agentContentTable = document.querySelector("#agent-list");
const agentContentCards = document.querySelector("#agent-cards");

agentButtons.forEach((i) =>
    i.addEventListener("click", (e) => {
        switchButtons(
            e.target,
            agentButtons,
            [agentContentTable, agentContentCards],
            "prof-control-panel__button_active",
            "mix-display-none"
        );
    })
);

// логика переключения кнопок на вкладке "Аналитические данные"
// количество зарегистрированных пользователей (контрагентов)

const userButtons = document.querySelectorAll(".user-button");

const contentUserList = document.querySelector("#user-list");
const contentUserGraph = document.querySelector("#user-graph");

userButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            userButtons,
            [contentUserList, contentUserGraph],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика переключения кнопок на вкладке "Аналитические данные"
// размер предлагаемой арендной платы

const sizeButtons = document.querySelectorAll(".size-button");

const contentSizeList = document.querySelector("#size-list");
const contentSizeGraph = document.querySelector("#size-graph");

sizeButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            sizeButtons,
            [contentSizeList, contentSizeGraph],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика переключения кнопок на вкладке "Аналитические данные"
// количество просмотров объектов

const viewsButtons = document.querySelectorAll(".views-button");

const contentViewsList = document.querySelector("#views-list");
const contentViewsGraph = document.querySelector("#views-graph");

viewsButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            viewsButtons,
            [contentViewsList, contentViewsGraph],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика переключения кнопок на вкладке "Аналитические данные"
// зарегистрированные обращения

const appealsButtons = document.querySelectorAll(".appeals-button");

const contentAppealsList = document.querySelector("#appeals-list");
const contentAppealsGraph = document.querySelector("#appeals-graph");

appealsButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            appealsButtons,
            [contentAppealsList, contentAppealsGraph],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
);

// логика действий при загрузе страницы на определенном разрешении

if (window.innerWidth < 1151) {
    removeClassElement(contentCards, "mix-display-none");
    removeClassElement(agentContentCards, "mix-display-none");
}

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
    if (e.target.innerWidth < 1151) {
        if (!contentTable.classList.contains("mix-display-none")) {
            // показываем карточки, скрываем таблицу, переключаем активную кнопку на карточки
            removeClassElement(contentCards, "mix-display-none");
            addClassElement(contentTable, "mix-display-none");
            resetActiveClassButton(objectsButtons);
        }
        if (!agentContentTable.classList.contains("mix-display-none")) {
            // показываем карточки, скрываем таблицу, переключаем активную кнопку на карточки
            removeClassElement(agentContentCards, "mix-display-none");
            addClassElement(agentContentTable, "mix-display-none");
            resetActiveClassButton(agentButtons);
        }
    }

    if (e.target.innerWidth > 750) {
        resetVisibleDymanicClassAsideBlockMobile();
    }
    if (e.target.innerWidth > 1550) {
        closeMobileBlockContacts();
    }
    if (e.target.innerWidth > 1780) {
        resetVisibleDymanicClassAsideBlock();
    }
    if (innerWidth < 1551 && innerWidth > 750) {
        panelTasks.classList.remove("mix-display-none");
    }
});

// логика смены чата на задачи по клику на кнопку

const buttonBackToTasks = document.querySelector(
    ".prof-aside__button-back-tasks"
);

const buttonBackToTasksMain = document.querySelector(
    "#prof-aside__button-back-tasks-main"
);

const panelChat = document.querySelector(".prof-aside__right-panel");
const panelTasks = document.querySelector(".prof-aside__left-panel");

const panelChatMain = document.querySelector("#prof-aside__right-panel-main");
const panelTasksMain = document.querySelector("#prof-aside__left-panel-main");

buttonBackToTasks.addEventListener("click", (e) => {
    panelChat.classList.add("mix-display-none");
    panelChat.classList.remove("mix-display-flex");
    panelTasks.classList.remove("mix-display-none");
});

buttonBackToTasksMain.addEventListener("click", (e) => {
    panelChatMain.classList.add("mix-display-none");
    panelChatMain.classList.remove("mix-display-flex");
    panelTasksMain.classList.remove("mix-display-none");
});

// логика открытия чата по клику на таску

const tasksContainer = document.querySelectorAll(
    ".prof-aside__tasks-container"
);

tasksContainer.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (innerWidth > 1780) {
            return;
        }
        if (innerWidth < 1551 && innerWidth > 750) {
            return;
        }
        if (e.target.closest(".prof-aside__task-item")) {
            panelTasks.classList.add("mix-display-none");
            panelChat.classList.add("mix-display-flex");

            panelTasksMain.classList.add("mix-display-none");
            panelChatMain.classList.add("mix-display-flex");
        }
    })
);

function resetVisibleDymanicClassAsideBlock() {
    panelTasksMain.classList.remove("mix-display-none");
    panelTasksMain.classList.remove("mix-display-flex");
    panelChatMain.classList.remove("mix-display-none");
    panelChatMain.classList.remove("mix-display-flex");
}

function resetVisibleDymanicClassAsideBlockMobile() {
    panelTasks.classList.remove("mix-display-none");
    panelTasks.classList.remove("mix-display-flex");
    panelChat.classList.remove("mix-display-none");
    panelChat.classList.remove("mix-display-flex");
}

// Логика открытия контактов (таски, чат) для планшетной / мобильной версий

const buttonContacts = document.querySelector(".prof-general__contacts");

const generalPanel = document.querySelector("#general-panel");
const mobilePanelContacts = document.querySelector(
    ".prof-general__body_type_contacts"
);

buttonContacts.addEventListener("click", (e) => {
    if (!buttonContacts.classList.contains("prof-general__contacts_active")) {
        openMobileBlockContacts();
    } else {
        closeMobileBlockContacts();
    }
});

function openMobileBlockContacts() {
    buttonContacts.classList.add("prof-general__contacts_active");
    mobilePanelContacts.classList.remove("mix-display-none");
    generalPanel.classList.add("mix-display-none");
}

function closeMobileBlockContacts() {
    buttonContacts.classList.remove("prof-general__contacts_active");
    mobilePanelContacts.classList.add("mix-display-none");
    generalPanel.classList.remove("mix-display-none");
}

// логика оценка звездочками во вкладке Аналитика

const analyticalStarsTotal = document.querySelectorAll(".analytics-star-total");
const analyticalStarsRangeFrom = document.querySelectorAll(
    ".analytics-star-range-from"
);
const analyticalStarsRangeTo = document.querySelectorAll(
    ".analytics-star-range-to"
);
const containerStars = document.querySelector("#container-analytics-stars");
const inputAnalyticalStarsTotal = document.querySelector(
    "#input-analytics-star-total"
);
const inputAnalyticalStarsRangeFrom = document.querySelector(
    "#input-analytics-star-range-from"
);
const inputAnalyticalStarsRangeTo = document.querySelector(
    "#input-analytics-star-range-to"
);

const buttonResetAllStars = document.querySelector(
    "#analytics-stars-button-reset"
);

containerStars.addEventListener("click", (e) => {
    if (e.target.ariaLabel) {
        if (e.target.classList.contains("analytics-star-total")) {
            resetActiveClass(
                analyticalStarsTotal,
                "prof-control-panel__star_active"
            );
            addClassElementStars(
                analyticalStarsTotal,
                +e.target.ariaLabel,
                inputAnalyticalStarsTotal
            );
        }
        if (e.target.classList.contains("analytics-star-range-from")) {
            resetActiveClass(
                analyticalStarsRangeFrom,
                "prof-control-panel__star_active"
            );
            addClassElementStars(
                analyticalStarsRangeFrom,
                +e.target.ariaLabel,
                inputAnalyticalStarsRangeFrom
            );
        }
        if (e.target.classList.contains("analytics-star-range-to")) {
            resetActiveClass(
                analyticalStarsRangeTo,
                "prof-control-panel__star_active"
            );
            addClassElementStars(
                analyticalStarsRangeTo,
                +e.target.ariaLabel,
                inputAnalyticalStarsRangeTo
            );
        }
    }
});

function resetActiveClass(arrayElements, className) {
    arrayElements.forEach((i) => i.classList.remove(className));
}

function addClassElementStars(arrayStars, currentValue, input) {
    arrayStars.forEach((i, c) => {
        if (c < currentValue) {
            i.classList.add("prof-control-panel__star_active");
            input.value = currentValue;
            return;
        }
    });
}

buttonResetAllStars.addEventListener("click", () => {
    [
        analyticalStarsTotal,
        analyticalStarsRangeFrom,
        analyticalStarsRangeTo,
    ].forEach((i) => resetActiveClass(i, "prof-control-panel__star_active"));
});

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
        if (e.target.closest(".prof-control-panel__label-custom")) {
            const currentCheckedValue = e.target
                .closest(".prof-control-panel__label-custom")
                .textContent.trim();
            state.inputsSelect[currentLabel.ariaLabel].value =
                currentCheckedValue;
            switchContentAnkets(currentCheckedValue);
            return;
        }
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
// логика переключения вида анкет

const agentActualCardsContent = document.querySelector("#agents-cards-actual");
const agentArchiveCardsContent = document.querySelector(
    "#agents-cards-archive"
);
const agentActualListContent = document.querySelector("#agents-list-actual");
const agentArchiveListContent = document.querySelector("#agents-list-archive");

function switchContentAnkets(currentCheckedValue) {
    switch (currentCheckedValue) {
        case "Текущие":
            removeClassElement(agentActualCardsContent, "mix-display-none");
            removeClassElement(agentActualListContent, "mix-display-none");
            addClassElement(agentArchiveCardsContent, "mix-display-none");
            addClassElement(agentArchiveListContent, "mix-display-none");
            return;
        case "В архиве":
            removeClassElement(agentArchiveCardsContent, "mix-display-none");
            removeClassElement(agentArchiveListContent, "mix-display-none");
            addClassElement(agentActualCardsContent, "mix-display-none");
            addClassElement(agentActualListContent, "mix-display-none");
            return;
        default:
            return;
    }
}

// логика открытия попапа объека

const objectList = document.querySelectorAll(".prof-table__row_style_objects");
const objectCards = document.querySelectorAll(".prof-card");
const popupEditCardObject = document.querySelector(".modal-edit-card-object");

objectCards.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.closest(".prof-label-checkbox")) {
            return;
        }
        popupEditCardObject.style.display = "flex";
    })
);

objectList.forEach((i, c) => {
    if (c === 0) {
        return;
    }
    i.addEventListener("click", (e) => {
        if (e.target.closest(".prof-label-checkbox")) {
            return;
        }
        popupEditCardObject.style.display = "flex";
        state.currentOpenPopup = popupEditCardObject;
        document.addEventListener("keydown", handleEscClose);
    });
});

// логика закрытия попапов по клавише Escape

function handleEscClose(e) {
    if (e.key === "Escape") {
        if (state.currentOpenPopup) {
            state.currentOpenPopup.style.display = "none";
            state.currentOpenPopup = null;
            document.removeEventListener("keydown", handleEscClose);
        }
    }
}

// логика наведения на текст в списке

const listTable = document.querySelectorAll(
    "#objects .prof-table__row-content.heading-h5, #offers .prof-table__row-content.heading-h5"
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

// диаграммы

var canvas = document.getElementById("graph1");
var ctx = canvas.getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "#E6FAE9");
gradient.addColorStop(1, "#E6FAE900");

var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: false,
            backgroundColor: gradient,
            borderColor: "#00796B",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 50, 81, 56, 55, 40],
            fill: true,
            pointRadius: 0,
        },
    ],
};

var options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            stacked: true,
            grid: {
                display: false,
                color: "rgba(255,99,132,0.2)",
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

var data2 = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
    ],
    datasets: [
        {
            label: false,
            backgroundColor: "#9CCC65",
            borderRadius: 4,
            hoverBackgroundColor: "rgba(156, 204, 101, 0.8)",
            data: [
                65, 59, 50, 81, 56, 55, 40, 65, 59, 50, 81, 56, 55, 40, 65, 59,
                50, 81, 56, 55, 40,
            ],
            fill: true,
        },
    ],
};

var data3 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: false,
            backgroundColor: "#9CCC65",
            borderRadius: 4,
            hoverBackgroundColor: "rgba(156, 204, 101, 0.8)",
            data: [65, 59, 50, 81, 56, 55, 40],
            fill: true,
        },
    ],
};

var data4 = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
    ],
    datasets: [
        {
            label: "Обработано",
            backgroundColor: "#55B465",
            borderRadius: 4,
            hoverBackgroundColor: "rgba(156, 204, 101, 0.8)",
            data: [
                65, 59, 50, 81, 56, 55, 40, 65, 59, 20, 81, 56, 55, 40, 65, 59,
                20, 81, 56, 55, 40,
            ],
        },
        {
            label: "Отправлено менеджеру",
            backgroundColor: "#FFEE58",
            borderRadius: 4,
            hoverBackgroundColor: "rgba(156, 204, 101, 0.8)",
            pointStyle: "vircle",
            data: [
                36, 72, 40, 81, 96, 45, 10, 95, 39, 30, 41, 96, 55, 80, 75, 39,
                10, 61, 86, 35, 55,
            ],
        },
        {
            label: "В работе у менеджера",
            backgroundColor: "#5C6BC0",
            borderRadius: 4,
            hoverBackgroundColor: "rgba(156, 204, 101, 0.8)",
            data: [
                56, 52, 50, 71, 46, 35, 20, 65, 79, 60, 91, 36, 65, 50, 95, 19,
                80, 21, 36, 75, 45,
            ],
        },
    ],
};

var options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            labels: {
                color: "rgb(255, 99, 132)",
            },
        },
    },
    scales: {
        y: {
            stacked: true,
            grid: {
                display: false,
                color: "rgba(255,99,132,0.2)",
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};
var options2 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: "#3C4142",
            },
            position: "bottom",
            align: "start",
            labels: { usePointStyle: true },
        },
    },
    scales: {
        y: {
            stacked: true,
            grid: {
                display: false,
                color: "rgba(255,99,132,0.2)",
            },
        },
        x: {
            stacked: true,
            grid: {
                display: false,
            },
        },
    },
};

new Chart("graph1", {
    type: "line",
    options: options,
    data: data,
});

new Chart("graph2", {
    type: "bar",
    options: options,
    data: data2,
});

new Chart("graph3", {
    type: "bar",
    options: options,
    data: data3,
});

new Chart("graph4", {
    type: "bar",
    options: options2,
    data: data4,
});
