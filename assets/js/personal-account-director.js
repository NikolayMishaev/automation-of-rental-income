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
        "structure-director-first": document.querySelector(
            "#cursor-structure-director-first"
        ),
        "structure-director-second": document.querySelector(
            "#cursor-structure-director-second"
        ),
        "structure-director-third": document.querySelector(
            "#cursor-structure-director-third"
        ),
        "structure-direction-first": document.querySelector(
            "#cursor-structure-direction-first"
        ),
        "structure-direction-second": document.querySelector(
            "#cursor-structure-direction-second"
        ),
        "structure-direction-third": document.querySelector(
            "#cursor-structure-direction-third"
        ),
        "structure-management-first": document.querySelector(
            "#cursor-structure-management-first"
        ),
        "structure-management-second": document.querySelector(
            "#cursor-structure-management-second"
        ),
        "structure-management-third": document.querySelector(
            "#cursor-structure-management-third"
        ),
        "structure-department-first": document.querySelector(
            "#cursor-structure-department-first"
        ),
        "structure-department-second": document.querySelector(
            "#cursor-structure-department-second"
        ),
        "structure-department-third": document.querySelector(
            "#cursor-structure-department-third"
        ),
        "structure-manager-first": document.querySelector(
            "#cursor-structure-manager-first"
        ),
        "structure-manager-second": document.querySelector(
            "#cursor-structure-manager-second"
        ),
        "structure-manager-third": document.querySelector(
            "#cursor-structure-manager-third"
        ),
        "structure-analytics-first": document.querySelector(
            "#cursor-structure-analytics-first"
        ),
        "structure-analytics-second": document.querySelector(
            "#cursor-structure-analytics-second"
        ),
        "structure-analytics-third": document.querySelector(
            "#cursor-structure-analytics-third"
        ),
        "transfer-objects": document.querySelector("#cursor-transfer-objects"),
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
    },
    submenuSelect: {
        "analytics-period-ankets": document.querySelector(
            "#submenu-analytics-period-ankets"
        ),
        "structure-director-first": document.querySelector(
            "#submenu-structure-director-first"
        ),
        "structure-director-second": document.querySelector(
            "#submenu-structure-director-second"
        ),
        "structure-director-third": document.querySelector(
            "#submenu-structure-director-third"
        ),
        "structure-direction-first": document.querySelector(
            "#submenu-structure-direction-first"
        ),
        "structure-direction-second": document.querySelector(
            "#submenu-structure-direction-second"
        ),
        "structure-direction-third": document.querySelector(
            "#submenu-structure-direction-third"
        ),
        "structure-management-first": document.querySelector(
            "#submenu-structure-management-first"
        ),
        "structure-management-second": document.querySelector(
            "#submenu-structure-management-second"
        ),
        "structure-management-third": document.querySelector(
            "#submenu-structure-management-third"
        ),
        "structure-department-first": document.querySelector(
            "#submenu-structure-department-first"
        ),
        "structure-department-second": document.querySelector(
            "#submenu-structure-department-second"
        ),
        "structure-department-third": document.querySelector(
            "#submenu-structure-department-third"
        ),
        "structure-manager-first": document.querySelector(
            "#submenu-structure-manager-first"
        ),
        "structure-manager-second": document.querySelector(
            "#submenu-structure-manager-second"
        ),
        "structure-manager-third": document.querySelector(
            "#submenu-structure-manager-third"
        ),
        "structure-analytics-first": document.querySelector(
            "#submenu-structure-analytics-first"
        ),
        "structure-analytics-second": document.querySelector(
            "#submenu-structure-analytics-second"
        ),
        "structure-analytics-third": document.querySelector(
            "#submenu-structure-analytics-third"
        ),
        "structure-director": document.querySelector(
            "#submenu-structure-director"
        ),
        "structure-direction": document.querySelector(
            "#submenu-structure-direction"
        ),
        "structure-management": document.querySelector(
            "#submenu-structure-management"
        ),
        "structure-department": document.querySelector(
            "#submenu-structure-department"
        ),
        "structure-manager": document.querySelector(
            "#submenu-structure-manager"
        ),
        "structure-analytics": document.querySelector(
            "#submenu-structure-analytics"
        ),
        "transfer-objects": document.querySelector("#submenu-transfer-objects"),
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
    },
    inputsSelect: {
        "analytics-period-ankets": document.querySelector(
            "#input-analytics-period-ankets"
        ),
        "structure-director-first": document.querySelector(
            "#input-structure-director-first"
        ),
        "structure-director-second": document.querySelector(
            "#input-structure-director-second"
        ),
        "structure-director-third": document.querySelector(
            "#input-structure-director-third"
        ),
        "structure-direction-first": document.querySelector(
            "#input-structure-direction-first"
        ),
        "structure-direction-second": document.querySelector(
            "#input-structure-direction-second"
        ),
        "structure-direction-third": document.querySelector(
            "#input-structure-direction-third"
        ),
        "structure-management-first": document.querySelector(
            "#input-structure-management-first"
        ),
        "structure-management-second": document.querySelector(
            "#input-structure-management-second"
        ),
        "structure-management-third": document.querySelector(
            "#input-structure-management-third"
        ),
        "structure-department-first": document.querySelector(
            "#input-structure-department-first"
        ),
        "structure-department-second": document.querySelector(
            "#input-structure-department-second"
        ),
        "structure-department-third": document.querySelector(
            "#input-structure-department-third"
        ),
        "structure-manager-first": document.querySelector(
            "#input-structure-manager-first"
        ),
        "structure-manager-second": document.querySelector(
            "#input-structure-manager-second"
        ),
        "structure-manager-third": document.querySelector(
            "#input-structure-manager-third"
        ),
        "structure-analytics-first": document.querySelector(
            "#input-structure-analytics-first"
        ),
        "structure-analytics-second": document.querySelector(
            "#input-structure-analytics-second"
        ),
        "structure-analytics-third": document.querySelector(
            "#input-structure-analytics-third"
        ),
        "transfer-objects": document.querySelector("#input-transfer-objects"),
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
    },
    labelsStructure: {
        director: document.querySelector("#structure-label-director"),
        direction: document.querySelector("#structure-label-direction"),
        management: document.querySelector("#structure-label-management"),
        department: document.querySelector("#structure-label-department"),
        manager: document.querySelector("#structure-label-manager"),
        analytics: document.querySelector("#structure-label-analytics"),
    },
    cursorsStructure: {
        director: document.querySelector("#structure-cursor-director"),
        direction: document.querySelector("#structure-cursor-direction"),
        management: document.querySelector("#structure-cursor-management"),
        department: document.querySelector("#structure-cursor-department"),
        manager: document.querySelector("#structure-cursor-manager"),
        analytics: document.querySelector("#structure-cursor-analytics"),
    },
    cardsStructure: {
        director: document.querySelector(".prof-structure__card_type_director"),
        direction: document.querySelector(
            ".structure-cards-container-direction"
        ),
        management: document.querySelector(
            ".structure-cards-container-management"
        ),
        department: document.querySelector(
            ".structure-cards-container-department"
        ),
        manager: document.querySelector(".structure-cards-container-manager"),
        analytics: document.querySelector(
            ".structure-cards-container-analytics"
        ),
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

// логика действий при ресайзе

window.addEventListener("resize", function (e) {
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
        if (e.target.closest(".prof-label-checkbox_type_feedback")) {
            return;
        }
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

// логика открытия попапа передачи обращения, объекта

const buttonsSendAppeals = document.querySelectorAll(".prof-aside__button");
const buttonsSendObjects = document.querySelectorAll(
    ".prof-control-panel__button_type_transfer"
);
const buttonSendObjectsMobile = document.querySelector(
    ".prof-control-panel__button_type_mobile"
);

const popupSendObjects = document.querySelector(".modal-transfer-object");

setAddEventListenerOpenPopupSendObjects(buttonSendObjectsMobile);

buttonsSendAppeals.forEach((i) => setAddEventListenerOpenPopupSendObjects(i));

buttonsSendObjects.forEach((i) => setAddEventListenerOpenPopupSendObjects(i));

function setAddEventListenerOpenPopupSendObjects(i) {
    i.addEventListener("click", () => {
        popupSendObjects.style.display = "flex";
        state.currentOpenPopup = popupSendObjects;
        document.addEventListener("keydown", handleEscClose);
    });
}

// логика закрытия попапов редактирования аватара, передачи объекта, передачи обращения

const popupsBody = document.querySelectorAll(".modal");

popupsBody.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (
            e.target.closest(".modal__close-btn") ||
            e.target.closest(".modal__cancel-btn") ||
            e.target.classList.contains("modal")
        ) {
            e.target.closest(".modal").style.display = "none";
        }
    })
);
