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
    }

    window.addEventListener("resize", function (e) {
        if (e.target.innerWidth < 1151) {
            hideTable();
        }
    });
})();
