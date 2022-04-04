import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// стейты

const state = {
    currentOpenSubmenu: null,
    selectSubmenu: {},
    selectCursorStructure: {
        director: document.querySelector("#structure-cursor-director"),
        direction: document.querySelector("#structure-cursor-direction"),
        management: document.querySelector("#structure-cursor-management"),
        department: document.querySelector("#structure-cursor-department"),
        manager: document.querySelector("#structure-cursor-manager"),
        analytics: document.querySelector("#structure-cursor-analytics"),
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

const arrayGeneralContent = [
    generalContentObjects,
    generalContentCounterpartyQuestionnaires,
    generalContentAnalyticalData,
    generalContentStructure,
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

const contentActual = document.querySelector("#agent-actual");
const contentArchive = document.querySelector("#agent-archive");

agentButtons.forEach((i) =>
    i.addEventListener("click", (e) =>
        switchButtons(
            e.target,
            agentButtons,
            [contentActual, contentArchive],
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
        if (contentTable.classList.contains("mix-display-none")) {
            return;
            // иначе показываем карточки, скрываем таблицу, переключаем активную кнопку на карточки
        } else {
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

const checkboxs = document.querySelectorAll(".prof-table__test-checkbox");

checkboxs.forEach((i) =>
    i.addEventListener("click", (e) => {
        e.target.classList.toggle("prof-table__test-checkbox-active");
    })
);

// логика по работе селектов

const checkClickOutsideSelect = (e) => {
    if (!e.target.closest(".prof-control-panel__select-label")) {
        if (state.currentOpenSubmenu) {
            removeClassElement(state.currentOpenSubmenu, "mix-visible");
        }
        document.removeEventListener("click", checkClickOutsideSelect);
    }
};

function listenClickOutsideSelect() {
    document.addEventListener("click", checkClickOutsideSelect);
}

// логика работы селектов в табе Структура

const sturctureWrappers = document.querySelectorAll(
    ".prof-structure__wrapper-subtitle"
);

sturctureWrappers.forEach((i) =>
    i.addEventListener("click", (e) => {
        const label = e.target.closest(
            ".prof-structure__wrapper-subtitle_active"
        );
        if (label) {
            console.log(label);
            removeClassElement(
                label,
                "prof-structure__wrapper-subtitle_active"
            );
            addClassElement(
                state.selectCursorStructure[`${label.ariaLabel}`],
                "mix-visible"
            );
        } else {
            addClassElement(label, "prof-structure__wrapper-subtitle_active");
            removeClassElement(
                state.selectCursorStructure[`${label.ariaLabel}`],
                "mix-visible"
            );
        }
    })
);
