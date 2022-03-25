(function () {
    // стейты
    const stateMain = {
        currentOpenLeftBlock: null,
    };
    const valueInputFilters = {
        changeType: [],
    };

    // логика открытия/закрытия попапа выбора городов "Ваш город"
    const headerCity = document.querySelector(".header__city");
    const modalWidow = document.querySelector(".modal");
    const modalCloseMain = document.querySelector(".modal__close-btn");

    headerCity.addEventListener("click", (e) => {
        modalWidow.style.opacity = "1";
        modalWidow.style.zIndex = "1";
        modalWidow.style.transform = "scale(1)";
    });

    modalWidow.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            closePopup();
        }
    });

    modalCloseMain.addEventListener("click", (e) => {
        if (e.target.closest(".modal__close-btn")) {
            closePopup();
        }
    });

    function closePopup() {
        modalWidow.style.opacity = "0";
        modalWidow.style.zIndex = "-1";
        modalWidow.style.transform = "scale(4)";
    }

    // логика табов, выбор: "список" или "карта"
    const controlPanelBtns = document.querySelectorAll(".main-btn");
    const btnList = document.querySelector("#btn-list");
    const btnMap = document.querySelector("#btn-map");
    const cardsContainer = document.querySelector(".main__cards-container");
    const mapContainer = document.querySelector(".main__map");

    controlPanelBtns.forEach((i) =>
        i.addEventListener("click", (e) => {
            if (e.target.ariaLabel === "map") {
                btnList.classList.remove("main-btn_active");
                btnMap.classList.add("main-btn_active");
                cardsContainer.style.display = "none";
                mapContainer.style.display = "block";
                stateMain.currentOpenLeftBlock = cardsContainer;
            } else {
                btnList.classList.add("main-btn_active");
                btnMap.classList.remove("main-btn_active");
                cardsContainer.style.display = "block";
                mapContainer.style.display = "none";
                stateMain.currentOpenLeftBlock = mapContainer;
            }
            console.log(stateMain.currentOpenLeftBlock);
        })
    );

    // логика авторизации по клику на "Регистрации" и "Вход" в Header, пока не готовы попапы регистрации
    const signInButton = document.querySelectorAll(".menu__link");
    const menuLinks = document.querySelector(".menu__links");
    const menuProfile = document.querySelector(".menu__profile");

    signInButton.forEach((i) =>
        i.addEventListener("click", (e) => {
            menuLinks.style.display = "none";
            menuProfile.style.display = "flex";
        })
    );

    // логика выбора значения сортировки в полях: "Сортировать" "Кол-во карточек для показа"
    const itemsSubmenuSort = document.querySelectorAll(
        ".main-submenu__item_type_sort"
    );
    const currentValueSort = document.querySelector("#main-sort-desktop");
    const currentValueNumberCards =
        document.querySelector("#main-number-cards");

    const mainSubmenuNumberCards = document.querySelector(
        ".main-submenu_style_number-cards"
    );
    const mainSubmenuSortDesktop = document.querySelector(
        ".main-submenu_style_sort"
    );
    const mainSubmenuSortMobile = document.querySelector(
        ".main-submenu_style_sort-mobile"
    );

    // при наведении на контейнеры содерщащие подменю, удаляем миксовый класс у подменю
    const mainContainerNumberCards = document.querySelector(
        "#main-search-number-cards"
    );
    const mainContainerSearchDesktop = document.querySelector(
        "#main-search-sort-cards-desktop"
    );
    const mainContainerSearchMobile = document.querySelector(
        "#main-search-sort-cards-mobile"
    );
    const arrayWithContainersSort = [
        mainContainerNumberCards,
        mainContainerSearchDesktop,
        mainContainerSearchMobile,
    ];
    arrayWithContainersSort.forEach((i) =>
        i.addEventListener("mouseover", function () {
            mainSubmenuNumberCards.classList.remove("mix-hidden");
            mainSubmenuSortDesktop.classList.remove("mix-hidden");
            mainSubmenuSortMobile.classList.remove("mix-hidden");
        })
    );

    itemsSubmenuSort.forEach((i) =>
        i.addEventListener("click", (e) => {
            if (e.target.ariaLabel === "number-cards") {
                deleteActiveClass("number-cards");
                e.target.classList.add("main-submenu__item_active");
                currentValueNumberCards.textContent = e.target.textContent;
                mainSubmenuNumberCards.classList.add("mix-hidden");
            }
            if (e.target.ariaLabel === "sort-desktop") {
                deleteActiveClass("sort-desktop");
                e.target.classList.add("main-submenu__item_active");
                addActiveClass(e.target.textContent);
                currentValueSort.textContent = e.target.textContent;
                mainSubmenuSortDesktop.classList.add("mix-hidden");
                mainSubmenuSortMobile.classList.add("mix-hidden");
            }
        })
    );

    function deleteActiveClass(ariaLabel) {
        itemsSubmenuSort.forEach((i) => {
            if (i.ariaLabel === ariaLabel) {
                i.classList.remove("main-submenu__item_active");
            }
        });
    }

    function addActiveClass(value) {
        itemsSubmenuSort.forEach((i) => {
            if (i.textContent === value) {
                i.classList.add("main-submenu__item_active");
            }
        });
    }

    // логика по добавления активного класса иконке с сортировкой при hovere над блоком выбора вариантов сортировки
    const submenuIconSortBlock = document.querySelector(
        ".main-submenu_style_sort-mobile"
    );
    const iconSortBlock = document.querySelector(
        ".main__control-panel-icon_search"
    );

    iconSortBlock.addEventListener("mouseover", function () {
        iconSortBlock.classList.add("main__control-panel-icon_search-active");
    });

    submenuIconSortBlock.addEventListener("mouseover", function () {
        iconSortBlock.classList.add("main__control-panel-icon_search-active");
    });

    iconSortBlock.addEventListener("mouseout", function () {
        iconSortBlock.classList.remove(
            "main__control-panel-icon_search-active"
        );
    });

    submenuIconSortBlock.addEventListener("mouseout", function () {
        iconSortBlock.classList.remove(
            "main__control-panel-icon_search-active"
        );
    });

    // логика кнопки фильтров по клику на иконку с фильтрами в мобильной версии
    const iconFilters = document.querySelector(
        ".main__control-panel-icon_filters"
    );
    const leftMainColumnPrice = document.querySelector(
        ".main__column_type_price"
    );
    const rightMainColumnFilters = document.querySelector(
        ".main__column_type_filters"
    );

    iconFilters.addEventListener("click", (e) => {
        if (
            !iconFilters.classList.contains(
                "main__control-panel-icon_filters-active"
            )
        ) {
            leftMainColumnPrice.style.display = "none";
            rightMainColumnFilters.style.display = "block";
            iconFilters.classList.add(
                "main__control-panel-icon_filters-active"
            );
        } else {
            leftMainColumnPrice.style.display = "block";
            rightMainColumnFilters.style.display = "none";
            iconFilters.classList.remove(
                "main__control-panel-icon_filters-active"
            );
        }
    });

    window.addEventListener("resize", function (e) {
        if (
            e.target.innerWidth > 1280 &&
            iconFilters.classList.contains(
                "main__control-panel-icon_filters-active"
            )
        ) {
            leftMainColumnPrice.style.display = "block";
        } else if (
            e.target.innerWidth < 1280 &&
            iconFilters.classList.contains(
                "main__control-panel-icon_filters-active"
            )
        ) {
            leftMainColumnPrice.style.display = "none";
        }
        if (e.target.innerWidth > 1280) {
            rightMainColumnFilters.style.display = "block";
        }
    });

    // тоггл лайка по клику на сердечко в карточке
    const mainCardsContainer = document.querySelector(".main__cards-container");

    mainCardsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("card-price__like")) {
            e.target.classList.toggle("card-price__like_active");
        }
    });

    // логика аккордеона адреса
    const cursorAdressMainForm = document.querySelector(
        "#main-form-cursor-adress"
    );
    const submenuAdressMainForm = document.querySelector(".main-form__adress");

    cursorAdressMainForm.addEventListener("click", (e) => {
        if (e.target.classList.contains("main-form__cursor")) {
            if (submenuAdressMainForm.closest(".main-form__adress_active")) {
                submenuAdressMainForm.classList.remove(
                    "main-form__adress_active"
                );
                cursorAdressMainForm.classList.remove(
                    "main-form__cursor_active"
                );
            } else {
                submenuAdressMainForm.classList.add("main-form__adress_active");
                cursorAdressMainForm.classList.add("main-form__cursor_active");
            }
        }
    });

    // логика аккордеона фильтров (свернуть фильтры)
    const buttonMinimizeFilters = document.querySelector(
        ".main-form__button_type_minimize"
    );
    const AllFilters = document.querySelector(".main-form__wrapper-fields");

    buttonMinimizeFilters.addEventListener("click", () => {
        if (AllFilters.closest(".main-form__wrapper-fields_active")) {
            AllFilters.classList.remove("main-form__wrapper-fields_active");
            buttonMinimizeFilters.textContent = "Все фильтры";
        } else {
            AllFilters.classList.add("main-form__wrapper-fields_active");
            buttonMinimizeFilters.textContent = "Свернуть фильтры";
        }
    });

    // логика работы всплывающего меню по клике на курсор в фильтре "тип помещения"
    const cursorChangeTypeMainForm = document.querySelector(
        "#main-form-cursor-change-type"
    );
    const submenuFilterChangeType = document.querySelector(
        ".main-submenu_style_main-form-change-type"
    );

    cursorChangeTypeMainForm.addEventListener("click", () => {
        if (submenuFilterChangeType.closest(".mix-visible")) {
            submenuFilterChangeType.classList.remove("mix-visible");
            cursorChangeTypeMainForm.classList.remove(
                "main-form__cursor_active"
            );
        } else {
            submenuFilterChangeType.classList.add("mix-visible");
            cursorChangeTypeMainForm.classList.add("main-form__cursor_active");
        }
    });
    // изменение значения value инпута после клика по значению поля селекта
    const itemsSumenuFilterChangeType = document.querySelectorAll(
        ".main-submenu__item_type_change-type"
    );
    const valueInputChangeType = document.querySelector(
        "#main-form-filter-input-change-type"
    );

    itemsSumenuFilterChangeType.forEach((i) =>
        i.addEventListener("click", (e) => {
            e.target.classList.toggle("main-submenu__item_active");
            let countActiveItmes = 0;
            itemsSumenuFilterChangeType.forEach((j) => {
                if (j.closest(".main-submenu__item_active")) {
                    countActiveItmes += 1;
                    valueInputChangeType.value = j.textContent;
                }
                if (countActiveItmes > 1) {
                    valueInputChangeType.value = "Выбрано несколько значений";
                }
                if (countActiveItmes === 0) {
                    valueInputChangeType.value = "";
                }
            });
        })
    );
})();
