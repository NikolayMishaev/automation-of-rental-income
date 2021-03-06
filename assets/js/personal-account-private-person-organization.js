import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// стейты

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

// логика переключения табов: "Документы", "Избранные объекты", "Персональные предложения" "О себе"

const tabButtons = document.querySelectorAll(".prof-general__button");

const generalContentDocuments = document.querySelector("#documents");
const generalContentFavourites = document.querySelector("#favourites");
const generalContentPersonalOffers = document.querySelector("#personal-offers");
const generalContentAboutMe = document.querySelector("#about-me");

const arrayGeneralContent = [
    generalContentDocuments,
    generalContentFavourites,
    generalContentAboutMe,
    generalContentPersonalOffers,
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

// логика при ресайзе

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

// логика оценка работы менеджера звездочками

const mobileStars = document.querySelectorAll(".prof-aside__star_type_mobile");
const desktopStars = document.querySelectorAll(
    ".prof-aside__star_type_desktop"
);
const containersStars = document.querySelectorAll(
    ".prof-aside__stars-container"
);
const inputStars = document.querySelector("#input-stars");

const elementsmarkConfirm = document.querySelectorAll(
    ".prof-aside__mark-confirm"
);

let timerMark = undefined;

containersStars.forEach((j) => j.addEventListener("click", markStar));

function markStar(e) {
    clearTimeout(timerMark);
    timerMark = setTimeout(() => {
        elementsmarkConfirm.forEach((i) => (i.style.display = "flex"));
        containersStars.forEach((j) =>
            j.removeEventListener("click", markStar)
        );
    }, 2000);
    if (e.target.ariaLabel) {
        resetActiveClass(mobileStars, "prof-aside__star_active");
        resetActiveClass(desktopStars, "prof-aside__star_active");
        addActiveClassStars(mobileStars, +e.target.ariaLabel);
        addActiveClassStars(desktopStars, +e.target.ariaLabel);
    }
}

function resetActiveClass(arrayElements, className) {
    arrayElements.forEach((i) => i.classList.remove(className));
}

function addActiveClassStars(arrayStars, currentValue) {
    arrayStars.forEach((i, c) => {
        if (c < currentValue) {
            i.classList.add("prof-aside__star_active");
            inputStars.value = currentValue;
            return;
        }
    });
}

// логика закрытия попапа редактирования аватара

const buttonClose = document.querySelector("#button-close-popup-sign-ind");
const popoupAvatar = document.querySelector(".modal-edit-avatar");
buttonClose.addEventListener("click", (e) => {
    popoupAvatar.style = "display-none";
});

// логика наведения на текст в списке

const listTable = document.querySelectorAll(
    "#favourites .prof-table__row-content.heading-h5"
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

// логика по клику на "Завершить заявку"

const buttonsCloseAppeal = document.querySelectorAll(".prof-aside__link");

buttonsCloseAppeal.forEach((i) =>
    i.addEventListener("click", sendRequestCloseAppeal)
);

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

function sendRequestCloseAppeal(e) {
    const data = { "close-appeal": true };
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
            buttonsCloseAppeal.forEach(
                (i) => (i.textContent = "Работа над заявкой завершена")
            );
            buttonsCloseAppeal.forEach((i) =>
                i.removeEventListener("click", sendRequestCloseAppeal)
            );
        }
    });
}
