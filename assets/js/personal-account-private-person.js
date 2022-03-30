(function () {
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
                console.log(i.ariaLabel);
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

    const cardsContainer = document.querySelector(
        ".prof-general__cards-container"
    );
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
    const panelChat = document.querySelector(".prof-aside__right-panel");
    const panelTasks = document.querySelector(".prof-aside__left-panel");

    buttonBackToTasks.addEventListener("click", (e) => {
        panelChat.classList.add("mix-display-none");
        panelChat.classList.remove("mix-display-flex");
        panelTasks.classList.remove("mix-display-none");
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
            }
        })
    );

    window.addEventListener("resize", function (e) {
        if (e.target.innerWidth < 1151) {
            hideTable();
        }
        if (e.target.innerWidth > 1780) {
            resetVisibleDymanicClassAsideBlock();
        }
    });

    function resetVisibleDymanicClassAsideBlock() {
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
        if (
            !buttonContacts.classList.contains("prof-general__contacts_active")
        ) {
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
})();
