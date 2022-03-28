(function () {
    // стейты
    const stateMain = {
        currentOpenLeftBlock: null,
    };
    const valueInputFilters = {
        changeType: [],
    };

    // логика открытия/закрытия попапа выбора городов "Ваш город"

    const popupOverlay = document.querySelector(".main-popup");

    const headerCity = document.querySelector(".header__city");
    const popupChangeCity = document.querySelector(
        ".main-popup_type_change-city"
    );

    popupOverlay.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("main-popup") ||
            e.target.classList.contains("main-popup__close")
        ) {
            popupChangeCity.classList.remove("mix-visible-scale");
        }
    });

    headerCity.addEventListener("click", (e) => {
        popupChangeCity.classList.add("mix-visible-scale");
    });

    // логика табов, выбор: "список" или "карта"
    const controlPanelBtns = document.querySelectorAll(".main-btn");
    const btnList = document.querySelector("#btn-list");
    const btnMap = document.querySelector("#btn-map");
    const cardsContainer = document.querySelector(".main__cards-container");
    const mapContainer = document.querySelector(".main__map");
    const AllFiltersPanel = document.querySelector(
        ".main-form__wrapper-fields"
    );
    const buttonMinimizeFiltersPanel = document.querySelector(
        ".main-form__button_type_minimize"
    );
    const mainContainerFilter = document.querySelector(".main__container");

    controlPanelBtns.forEach((i) =>
        i.addEventListener("click", (e) => {
            if (e.target.ariaLabel === "map") {
                btnList.classList.remove("main-btn_active");
                btnMap.classList.add("main-btn_active");
                cardsContainer.style.display = "none";
                mapContainer.style.display = "block";
                stateMain.currentOpenLeftBlock = cardsContainer;
                AllFiltersPanel.classList.remove(
                    "main-form__wrapper-fields_active"
                );
                buttonMinimizeFiltersPanel.textContent = "Все фильтры";
                mainContainerFilter.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                btnList.classList.add("main-btn_active");
                btnMap.classList.remove("main-btn_active");
                cardsContainer.style.display = "block";
                mapContainer.style.display = "none";
                stateMain.currentOpenLeftBlock = mapContainer;

                AllFiltersPanel.classList.add(
                    "main-form__wrapper-fields_active"
                );
                buttonMinimizeFiltersPanel.textContent = "Свернуть фильтры";
                mainContainerFilter.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
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
    const currentValueNumberCardsMobile = document.querySelector(
        "#main-number-cards-mobile"
    );

    const mainSubmenuNumberCards = document.querySelector(
        ".main-submenu_style_number-cards"
    );
    const mainSubmenuNumberCardsMobile = document.querySelector(
        ".main-submenu_style_number-cards-mobile"
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
    const mainContainerNumberCardsMobile = document.querySelector(
        "#main-search-number-cards-mobile"
    );
    const mainContainerSearchDesktop = document.querySelector(
        "#main-search-sort-cards-desktop"
    );
    const mainContainerSearchMobile = document.querySelector(
        "#main-search-sort-cards-mobile"
    );
    const arrayWithContainersSort = [
        mainContainerNumberCards,
        mainContainerNumberCardsMobile,
        mainContainerSearchDesktop,
        mainContainerSearchMobile,
    ];
    arrayWithContainersSort.forEach((i) =>
        i.addEventListener("mouseover", function () {
            mainSubmenuNumberCards.classList.remove("mix-hidden");
            mainSubmenuNumberCardsMobile.classList.remove("mix-hidden");
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
                currentValueNumberCardsMobile.textContent =
                    e.target.textContent;
                mainSubmenuNumberCardsMobile.classList.add("mix-hidden");
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
        } else if (
            e.target.innerWidth < 1280 &&
            !iconFilters.classList.contains(
                "main__control-panel-icon_filters-active"
            )
        ) {
            rightMainColumnFilters.style.display = "none";
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

    const mainContainer = document.querySelector(".main__container");

    const mainFiltersContainer = document.querySelector(".main-filters");

    buttonMinimizeFilters.addEventListener("click", () => {
        if (AllFilters.closest(".main-form__wrapper-fields_active")) {
            AllFilters.classList.remove("main-form__wrapper-fields_active");
            buttonMinimizeFilters.textContent = "Все фильтры";
            mainContainer.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            AllFilters.classList.add("main-form__wrapper-fields_active");
            buttonMinimizeFilters.textContent = "Свернуть фильтры";
            mainFiltersContainer.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    });

    // логика работы всплывающего меню по клике на курсор в фильтре "тип помещения"
    const cursorChangeTypeMainForm = document.querySelector(
        "#main-form-cursor-change-type"
    );

    const wrapperInputChangeType = document.querySelector(
        ".main-form__wrapper-input_type_change-type"
    );

    const submenuFilterChangeType = document.querySelector(
        ".main-submenu_style_main-form-change-type"
    );

    wrapperInputChangeType.addEventListener("click", () => {
        toggleActiveClass(submenuFilterChangeType, cursorChangeTypeMainForm);
    });

    function toggleActiveClass(submenu, cursor) {
        if (submenu.closest(".mix-visible")) {
            submenu.classList.remove("mix-visible");
            cursor.classList.remove("main-form__cursor_active");
        } else {
            submenu.classList.add("mix-visible");
            cursor.classList.add("main-form__cursor_active");
        }
    }

    // изменение значения value инпута после клика по значению поля селекта
    const itemsSubmenuFilterChangeType = document.querySelectorAll(
        ".main-form__label-checkbox_type_select"
    );

    const inputChangeType = document.querySelector(
        "#main-form-filter-input-change-type"
    );

    changeValueInputSelect(itemsSubmenuFilterChangeType, inputChangeType);

    function changeValueInputSelect(items, valueInput) {
        items.forEach((i) =>
            i.addEventListener("click", (e) => {
                e.target.classList.toggle("custom-select-active");
                let countActiveItmes = 0;
                items.forEach((j) => {
                    if (j.closest(".custom-select-active")) {
                        countActiveItmes += 1;
                        valueInput.value = j.textContent;
                    }
                    if (countActiveItmes > 1) {
                        valueInput.value = "Выбрано несколько значений";
                    }
                    if (countActiveItmes === 0) {
                        valueInput.value = "";
                    }
                });
            })
        );
    }

    // логика работы всплывающего меню по клике на курсор в фильтре "классификация помещения"
    const cursorChangeClassMainForm = document.querySelector(
        "#main-form-cursor-change-class"
    );

    const wrapperInputChangeClass = document.querySelector(
        ".main-form__wrapper-input_type_change-class"
    );

    const submenuFilterChangeClass = document.querySelector(
        ".main-submenu_style_main-form-change-class"
    );

    wrapperInputChangeClass.addEventListener("click", () => {
        toggleActiveClass(submenuFilterChangeClass, cursorChangeClassMainForm);
    });

    // изменение значения value инпута после клика по значению поля селекта
    const itemsSubmenuFilterChangeClass = document.querySelectorAll(
        ".main-submenu__item_type_change-class"
    );
    const InputChangeClass = document.querySelector(
        "#main-form-filter-input-change-class"
    );

    changeValueInputSelect(itemsSubmenuFilterChangeClass, InputChangeClass);

    // логика перехода по клику на карточку на страницу с карточками
    const cardPriceContainerBigCards = document.querySelector(
        ".main__cards-container"
    );
    cardPriceContainerBigCards.addEventListener("click", (e) => {
        if (e.target.closest(".card-price__like")) {
            return;
        }
        if (e.target.closest(".card-price_style_main")) {
            location.href = "./objectCard.html";
        }
    });

    // логика открытия попапов город улица метро
    const containerFiltersAdress = document.querySelector(".main-form__label");
    const cursorsOpenSubmenuCity = document.querySelector("#submenu-city");
    const cursorsOpenSubmenuStreet = document.querySelector("#submenu-street");
    const cursorsOpenSubmenuUnderground = document.querySelector(
        "#submenu-underground"
    );
    const cursorsOpenSubmenuCityBody =
        document.querySelector("#submenu-city-body");
    const cursorsOpenSubmenuStreetBody = document.querySelector(
        "#submenu-street-body"
    );
    const cursorsOpenSubmenuUndergroundBody = document.querySelector(
        "#submenu-underground-body"
    );

    cursorsOpenSubmenuCity.addEventListener("click", (e) => {
        containerFiltersAdress.classList.toggle("mix-visible");
        cursorsOpenSubmenuCityBody.classList.toggle("mix-visible");
    });
    cursorsOpenSubmenuStreet.addEventListener("click", (e) => {
        containerFiltersAdress.classList.add("mix-visible");
        cursorsOpenSubmenuStreetBody.classList.add("mix-visible");
    });
    cursorsOpenSubmenuUnderground.addEventListener("click", (e) => {
        containerFiltersAdress.classList.add("mix-visible");
        cursorsOpenSubmenuUndergroundBody.classList.add("mix-visible");
    });

    // логика закрытия подменю селектов выбора типа помещения и классификация помещения по кнопке "Выбрать"

    const buttonConfirmChangeType = document.querySelector(
        "#button-filter-confirm-change-type"
    );
    const buttonConfirmChangeClass = document.querySelector(
        "#button-filter-confirm-change-class"
    );

    buttonConfirmChangeType.addEventListener("click", (e) => {
        toggleActiveClass(submenuFilterChangeType, cursorChangeTypeMainForm);
    });

    buttonConfirmChangeClass.addEventListener("click", (e) => {
        toggleActiveClass(submenuFilterChangeClass, cursorChangeClassMainForm);
    });
})();
