import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// стейты

const state = {
    currentOpenSubmenu: null,
    currentOpenSubmenuSecondLevel: null,
    cursorsSelect: {
        ankets: document.querySelector("#cursor-ankets"),
        "type-activity": document.querySelector("#cursor-type-activity"),
        "ankets-status": document.querySelector("#cursor-ankets-status"),
        "ankets-views": document.querySelector("#cursor-ankets-views"),
        "objects-status": document.querySelector("#cursor-objects-status"),
        "objects-sort": document.querySelector("#cursor-objects-sort"),
        "objects-page": document.querySelector("#cursor-objects-page"),
        "agents-status": document.querySelector("#cursor-agents-status"),
        "agents-period": document.querySelector("#cursor-agents-period"),
        "agents-page-actual": document.querySelector(
            "#cursor-agents-page-actual"
        ),
        "agents-page-archive": document.querySelector(
            "#cursor-agents-page-archive"
        ),
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
        ankets: document.querySelector("#submenu-ankets"),
        "type-activity": document.querySelector("#submenu-type-activity"),
        "ankets-status": document.querySelector("#submenu-ankets-status"),
        "ankets-views": document.querySelector("#submenu-ankets-views"),
        "objects-status": document.querySelector("#submenu-objects-status"),
        "objects-sort": document.querySelector("#submenu-objects-sort"),
        "objects-page": document.querySelector("#submenu-objects-page"),
        "agents-status": document.querySelector("#submenu-agents-status"),
        "agents-period": document.querySelector("#submenu-agents-period"),
        "agents-page-actual": document.querySelector(
            "#submenu-agents-page-actual"
        ),
        "agents-page-archive": document.querySelector(
            "#submenu-agents-page-archive"
        ),
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
        "agents-status": document.querySelector("#input-agents-status"),
        "agents-period": document.querySelector("#input-agents-period"),
        "agents-page-actual": document.querySelector(
            "#input-agents-page-actual"
        ),
        "agents-page-archive": document.querySelector(
            "#input-agents-page-archive"
        ),
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
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            agentButtons,
            [agentContentTable, agentContentCards],
            "prof-control-panel__button_active",
            "mix-display-none"
        )
    )
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

// скрыть подменю селектов если клик сработал за их пределами

// function listenClickOutsideSelect() {
//     document.addEventListener("click", (e) => {
//         if (!e.target.closest(".prof-control-panel__select-label")) {
//             hideAllSubmenu();
//         }
//     });
// }

// логика работы селектов общие функции:

// function showSubmenu(submenu, cursor) {
//     submenu.classList.add("mix-visible");
//     cursor.classList.add("prof-control-panel__cursor_active");
// }

// function hideSubmenu(submenu, cursor) {
//     submenu.classList.remove("mix-visible");
//     cursor.classList.remove("prof-control-panel__cursor_active");
// }

// function hideAllSubmenu() {
//     hideSubmenu(submenuSelectStatus, cursorSelectStatus);
//     hideSubmenu(submenuSelectSort, cursorSelectSort);
//     hideSubmenu(submenuSelectPage, cursorSelectPage);
// }

// function resetActiveClass(arrayElements, className) {
//     arrayElements.forEach((i) => i.classList.remove(className));
// }

// логика работы селекта "Статус"

// const LabelSelectStatus = document.querySelector("#label-select-status");
// const cursorSelectStatus = document.querySelector("#cursor-select-status");
// const inputSelectStatus = document.querySelector("#input-select-status");
// const submenuSelectStatus = document.querySelector("#submenu-select-status");
// const inputCheckboxFree = document.querySelector(
//     "#input-select-status-checkbox-free"
// );
// const inputCheckboxSoonFree = document.querySelector(
//     "#input-select-status-checkbox-soon-free"
// );

// LabelSelectStatus.addEventListener("click", (e) => {
//     if (inputCheckboxFree.checked && inputCheckboxSoonFree.checked) {
//         inputSelectStatus.value = "Выбрано несколько";
//     } else if (inputCheckboxFree.checked) {
//         inputSelectStatus.value = "Свободен";
//     } else if (inputCheckboxSoonFree.checked) {
//         inputSelectStatus.value = "Скоро освободится";
//     } else {
//         inputSelectStatus.value = "Все";
//     }
//     if (e.target.id === "button-confirm-select-status") {
//         hideSubmenu(submenuSelectStatus, cursorSelectStatus);
//     }
//     if (e.target.id === "label-select-status" && innerWidth < 1001) {
//         hideAllSubmenu();
//         showSubmenu(submenuSelectStatus, cursorSelectStatus);
//     }
//     if (e.target.id !== "input-select-status") {
//         return;
//     }
//     if (
//         cursorSelectStatus.classList.contains(
//             "prof-control-panel__cursor_active"
//         )
//     ) {
//         hideSubmenu(submenuSelectStatus, cursorSelectStatus);
//     } else {
//         hideAllSubmenu();
//         showSubmenu(submenuSelectStatus, cursorSelectStatus);
//     }
// });

// логика работы селекта "Сортировать"

// const LabelSelectSort = document.querySelector("#label-select-sort");
// const cursorSelectSort = document.querySelector("#cursor-select-sort");
// const inputSelectSort = document.querySelector("#input-select-sort");
// const submenuSelectSort = document.querySelector("#submenu-select-sort");
// const itemsSubmenuSort = document.querySelectorAll(".item-submenu-sort");

// LabelSelectSort.addEventListener("click", (e) => {
//     if (e.target.ariaLabel === "item-sort-menu") {
//         inputSelectSort.value = e.target.innerText;
//         resetActiveClass(itemsSubmenuSort, "main-submenu__item_active");
//         e.target.classList.add("main-submenu__item_active");
//         hideSubmenu(submenuSelectSort, cursorSelectSort);
//     }
//     if (e.target.id === "label-select-sort" && innerWidth < 1001) {
//         hideAllSubmenu();
//         showSubmenu(submenuSelectSort, cursorSelectSort);
//     }
//     if (e.target.id !== "input-select-sort") {
//         return;
//     }
//     if (
//         cursorSelectSort.classList.contains("prof-control-panel__cursor_active")
//     ) {
//         hideSubmenu(submenuSelectSort, cursorSelectSort);
//     } else {
//         hideAllSubmenu();
//         showSubmenu(submenuSelectSort, cursorSelectSort);
//     }
// });

// логика работы селекта "выбор количества карточек"

// const LabelSelectPage = document.querySelector("#label-select-page");
// const cursorSelectPage = document.querySelector("#cursor-select-page");
// const inputSelectPage = document.querySelector("#input-select-page");
// const submenuSelectPage = document.querySelector("#submenu-select-page");
// const itemsSubmenuPage = document.querySelectorAll(".item-submenu-page");

// LabelSelectPage.addEventListener("click", (e) => {
//     if (e.target.ariaLabel === "item-page-menu") {
//         inputSelectPage.value = e.target.innerText;
//         resetActiveClass(itemsSubmenuPage, "main-submenu__item_active");
//         e.target.classList.add("main-submenu__item_active");
//         hideSubmenu(submenuSelectPage, cursorSelectPage);
//     }
//     if (e.target.id !== "input-select-page") {
//         return;
//     }
//     if (
//         cursorSelectPage.classList.contains("prof-control-panel__cursor_active")
//     ) {
//         hideSubmenu(submenuSelectPage, cursorSelectPage);
//     } else {
//         hideAllSubmenu();
//         showSubmenu(submenuSelectPage, cursorSelectPage);
//     }
// });

// логика оценка работы менеджера звездочками

const mobileStars = document.querySelectorAll(".prof-aside__star_type_mobile");
const desktopStars = document.querySelectorAll(
    ".prof-aside__star_type_desktop"
);
const containersStars = document.querySelectorAll(
    ".prof-aside__stars-container"
);
const inputStars = document.querySelector("#input-stars");

containersStars.forEach((j) =>
    j.addEventListener("click", (e) => {
        if (e.target.ariaLabel) {
            resetActiveClass(mobileStars, "prof-aside__star_active");
            resetActiveClass(desktopStars, "prof-aside__star_active");
            addClassElementStars(mobileStars, +e.target.ariaLabel);
            addClassElementStars(desktopStars, +e.target.ariaLabel);
        }
    })
);

function addClassElementStars(arrayStars, currentValue) {
    arrayStars.forEach((i, c) => {
        if (c < currentValue) {
            i.classList.add("prof-aside__star_active");
            inputStars.value = currentValue;
            return;
        }
    });
}

// логика работы чекбоксов в карточках и таблице

const checkboxs = document.querySelectorAll(".prof-table__test-checkbox");

checkboxs.forEach((i) =>
    i.addEventListener("click", (e) => {
        e.target.classList.toggle("prof-table__test-checkbox-active");
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

const buttonClose = document.querySelector("#button-close-popup-sign-ind");
const popoupAvatar = document.querySelector(".modal-edit-avatar");
buttonClose.addEventListener("click", (e) => {
    popoupAvatar.style = "display-none";
});
