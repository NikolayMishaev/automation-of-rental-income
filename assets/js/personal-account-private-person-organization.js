import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// логика переключения табов: "Документы" "Избранные объекты" "О себе"
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
    i.addEventListener("click", () => {
        if (i.closest(".prof-general__button_active")) {
            return;
        }
        tabButtons.forEach((j) =>
            deleteActiveClass(j, "prof-general__button_active")
        );
        i.classList.add("prof-general__button_active");
        arrayGeneralContent.forEach((c) => {
            if (c.ariaLabel === i.ariaLabel) {
                c.classList.remove("mix-display-none");
            } else {
                c.classList.add("mix-display-none");
            }
        });
    })
);
function deleteActiveClass(element, className) {
    element.classList.remove(className);
}

// логика переключения список, карточки
const buttonsChangeViewContainer = document.querySelector(
    ".prof-control-panel__buttons-container"
);

const buttonList = document.querySelector("#button-list");
const buttonCards = document.querySelector("#button-cards");

const cardsContainer = document.querySelector(".prof-general__cards-container");
const tableContainer = document.querySelector(".prof-table");

buttonsChangeViewContainer.addEventListener("click", (e) => {
    if (e.target.ariaLabel === "button-list") {
        e.target.classList.add("prof-control-panel__button_active");
        buttonCards.classList.remove("prof-control-panel__button_active");
        tableContainer.classList.remove("mix-display-none");
        cardsContainer.classList.add("mix-display-none");
    } else {
        e.target.classList.add("prof-control-panel__button_active");
        buttonList.classList.remove("prof-control-panel__button_active");
        hideTable();
    }
});

// логика сркытия таблицы при первой загрузке
if (window.innerWidth < 1151) {
    hideTable();
    buttonsChangeViewContainer.classList.add("mix-display-none");
} else {
    buttonsChangeViewContainer.classList.remove("mix-display-none");
}

function hideTable() {
    tableContainer.classList.add("mix-display-none");
    cardsContainer.classList.remove("mix-display-none");
    buttonList.classList.remove("prof-control-panel__button_active");
    buttonCards.classList.add("prof-control-panel__button_active");
}

// действие прописано в window.addEventListener('resize;)

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

document.addEventListener("click", (e) => {
    if (!e.target.closest(".prof-control-panel__select-label")) {
        hideAllSubmenu();
    }
});

// логика работы селектов общие функции:

function showSubmenu(submenu, cursor) {
    submenu.classList.add("mix-visible");
    cursor.classList.add("prof-control-panel__cursor_active");
}

function hideSubmenu(submenu, cursor) {
    submenu.classList.remove("mix-visible");
    cursor.classList.remove("prof-control-panel__cursor_active");
}

function hideAllSubmenu() {
    hideSubmenu(submenuSelectStatus, cursorSelectStatus);
    hideSubmenu(submenuSelectSort, cursorSelectSort);
    hideSubmenu(submenuSelectPage, cursorSelectPage);
}

function resetActiveClass(arrayElements, className) {
    arrayElements.forEach((i) => i.classList.remove(className));
}

// логика работы селекта "Статус"

const LabelSelectStatus = document.querySelector("#label-select-status");
const cursorSelectStatus = document.querySelector("#cursor-select-status");
const inputSelectStatus = document.querySelector("#input-select-status");
const submenuSelectStatus = document.querySelector("#submenu-select-status");
const inputCheckboxFree = document.querySelector(
    "#input-select-status-checkbox-free"
);
const inputCheckboxSoonFree = document.querySelector(
    "#input-select-status-checkbox-soon-free"
);

LabelSelectStatus.addEventListener("click", (e) => {
    if (inputCheckboxFree.checked && inputCheckboxSoonFree.checked) {
        inputSelectStatus.value = "Выбрано несколько";
    } else if (inputCheckboxFree.checked) {
        inputSelectStatus.value = "Свободен";
    } else if (inputCheckboxSoonFree.checked) {
        inputSelectStatus.value = "Скоро освободится";
    } else {
        inputSelectStatus.value = "Все";
    }
    if (e.target.id === "button-confirm-select-status") {
        hideSubmenu(submenuSelectStatus, cursorSelectStatus);
    }
    if (e.target.id === "label-select-status" && innerWidth < 1001) {
        hideAllSubmenu();
        showSubmenu(submenuSelectStatus, cursorSelectStatus);
    }
    if (e.target.id !== "input-select-status") {
        return;
    }
    if (
        cursorSelectStatus.classList.contains(
            "prof-control-panel__cursor_active"
        )
    ) {
        hideSubmenu(submenuSelectStatus, cursorSelectStatus);
    } else {
        hideAllSubmenu();
        showSubmenu(submenuSelectStatus, cursorSelectStatus);
    }
});

// логика работы селекта "Сортировать"

const LabelSelectSort = document.querySelector("#label-select-sort");
const cursorSelectSort = document.querySelector("#cursor-select-sort");
const inputSelectSort = document.querySelector("#input-select-sort");
const submenuSelectSort = document.querySelector("#submenu-select-sort");
const itemsSubmenuSort = document.querySelectorAll(".item-submenu-sort");

LabelSelectSort.addEventListener("click", (e) => {
    if (e.target.ariaLabel === "item-sort-menu") {
        inputSelectSort.value = e.target.innerText;
        resetActiveClass(itemsSubmenuSort, "main-submenu__item_active");
        e.target.classList.add("main-submenu__item_active");
        hideSubmenu(submenuSelectSort, cursorSelectSort);
    }
    if (e.target.id === "label-select-sort" && innerWidth < 1001) {
        hideAllSubmenu();
        showSubmenu(submenuSelectSort, cursorSelectSort);
    }
    if (e.target.id !== "input-select-sort") {
        return;
    }
    if (
        cursorSelectSort.classList.contains("prof-control-panel__cursor_active")
    ) {
        hideSubmenu(submenuSelectSort, cursorSelectSort);
    } else {
        hideAllSubmenu();
        showSubmenu(submenuSelectSort, cursorSelectSort);
    }
});

// логика работы селекта "выбор количества карточек"

const LabelSelectPage = document.querySelector("#label-select-page");
const cursorSelectPage = document.querySelector("#cursor-select-page");
const inputSelectPage = document.querySelector("#input-select-page");
const submenuSelectPage = document.querySelector("#submenu-select-page");
const itemsSubmenuPage = document.querySelectorAll(".item-submenu-page");

LabelSelectPage.addEventListener("click", (e) => {
    if (e.target.ariaLabel === "item-page-menu") {
        inputSelectPage.value = e.target.innerText;
        resetActiveClass(itemsSubmenuPage, "main-submenu__item_active");
        e.target.classList.add("main-submenu__item_active");
        hideSubmenu(submenuSelectPage, cursorSelectPage);
    }
    if (e.target.id !== "input-select-page") {
        return;
    }
    if (
        cursorSelectPage.classList.contains("prof-control-panel__cursor_active")
    ) {
        hideSubmenu(submenuSelectPage, cursorSelectPage);
    } else {
        hideAllSubmenu();
        showSubmenu(submenuSelectPage, cursorSelectPage);
    }
});

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
            addActiveClassStars(mobileStars, +e.target.ariaLabel);
            addActiveClassStars(desktopStars, +e.target.ariaLabel);
        }
    })
);

function addActiveClassStars(arrayStars, currentValue) {
    arrayStars.forEach((i, c) => {
        if (c < currentValue) {
            i.classList.add("prof-aside__star_active");
            inputStars.value = currentValue;
            return;
        }
    });
}
