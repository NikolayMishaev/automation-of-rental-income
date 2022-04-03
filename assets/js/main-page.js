import {
    addClassElement,
    removeClassElement,
    switchButtons,
} from "./common-JS-to-all-pages.js";

// стейты
const stateMain = {
    currentOpenLeftBlock: null,
};

// логика табов, выбор: "список" или "карта"
const controlPanelBtns = document.querySelectorAll(".main-btn");
const btnList = document.querySelector("#btn-list");
const btnMap = document.querySelector("#btn-map");
const cardsContainer = document.querySelector(".main__cards-container");
const mapContainer = document.querySelector(".main__map");
const AllFiltersPanel = document.querySelector(".main-form__wrapper-fields");
const buttonMinimizeFiltersPanel = document.querySelector(
    ".main-form__button_type_minimize"
);
const mainContainerFilter = document.querySelector(".main__container");

const paginationPage = document.querySelector(".pagination");
const controlPanelLeft = document.querySelector(
    ".main__control-panel-column-two"
);

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
            // скрыть панель сортировки, выбора кол-ва страниц, пагинацию
            paginationPage.classList.add("mix-display-none");
            controlPanelLeft.classList.add("mix-display-none");
        } else {
            btnList.classList.add("main-btn_active");
            btnMap.classList.remove("main-btn_active");
            cardsContainer.style.display = "block";
            mapContainer.style.display = "none";
            stateMain.currentOpenLeftBlock = mapContainer;

            AllFiltersPanel.classList.add("main-form__wrapper-fields_active");
            buttonMinimizeFiltersPanel.textContent = "Свернуть фильтры";
            mainContainerFilter.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            paginationPage.classList.remove("mix-display-none");
            controlPanelLeft.classList.remove("mix-display-none");
        }
    })
);

// логика выбора значения сортировки в полях: "Сортировать" "Кол-во карточек для показа"
const itemsSubmenuSort = document.querySelectorAll(
    ".main-submenu__item_type_sort"
);
const currentValueSort = document.querySelector("#main-sort-desktop");
const currentValueNumberCards = document.querySelector("#main-number-cards");
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
            currentValueNumberCardsMobile.textContent = e.target.textContent;
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
    iconSortBlock.classList.remove("main__control-panel-icon_search-active");
});

submenuIconSortBlock.addEventListener("mouseout", function () {
    iconSortBlock.classList.remove("main__control-panel-icon_search-active");
});

// логика кнопки фильтров по клику на иконку с фильтрами в мобильной версии
const iconFilters = document.querySelector(".main__control-panel-icon_filters");
const leftMainColumnPrice = document.querySelector(".main__column_type_price");
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
        iconFilters.classList.add("main__control-panel-icon_filters-active");
    } else {
        leftMainColumnPrice.style.display = "block";
        rightMainColumnFilters.style.display = "none";
        iconFilters.classList.remove("main__control-panel-icon_filters-active");
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
const containerFiltersAdress = document.querySelector(
    "#container-filters-full-adress"
);

const cursorAdressMainForm = document.querySelector("#main-form-cursor-adress");
const submenuAdressMainForm = document.querySelector(".main-form__adress");

cursorAdressMainForm.addEventListener("click", (e) => {
    if (e.target.classList.contains("main-form__cursor")) {
        if (submenuAdressMainForm.closest(".main-form__adress_active")) {
            submenuAdressMainForm.classList.remove("main-form__adress_active");
            cursorAdressMainForm.classList.remove("main-form__cursor_active");
            containerFiltersAdress.classList.remove("mix-overflow-unset");
        } else {
            submenuAdressMainForm.classList.add("main-form__adress_active");
            cursorAdressMainForm.classList.add("main-form__cursor_active");
            containerFiltersAdress.classList.add("mix-overflow-unset");
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
        cardsContainer.style.display = "block";
        mapContainer.style.display = "none";
        paginationPage.classList.remove("mix-display-none");
        controlPanelLeft.classList.remove("mix-display-none");
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

// изменение значения value инпута после клика по значению поля селекта в фильтре "тип помещения"
const labelSelectChangeType = document.querySelectorAll(".select-change-type");

const inputChangeType = document.querySelector(
    "#main-form-filter-input-change-type"
);

changeValueInputSelect(labelSelectChangeType, inputChangeType);

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

// изменение значения value инпута после клика по значению поля селекта в фильтре "классификация помещения"
const labelSelectChangeClass = document.querySelectorAll(
    ".select-change-class"
);
const InputChangeClass = document.querySelector(
    "#main-form-filter-input-change-class"
);

changeValueInputSelect(labelSelectChangeClass, InputChangeClass);

// логика перехода по клику на карточку на страницу с карточками
const cardPriceContainerBigCards = document.querySelector(
    ".main__cards-container"
);
cardPriceContainerBigCards.addEventListener("click", (e) => {
    e.preventDefault();
    const currentLink = e.target.closest(".card-price__link").href;
    if (e.target.closest(".card-price__like")) {
        return;
    }
    if (e.target.closest(".card-price__photo")) {
        return;
    }
    if (e.target.closest(".card-price_style_main")) {
        e.target.closest(".card-price_style_main").style.transform =
            "scale(4) translateX(500px)";
        e.target.closest(".card-price_style_main").style.opacity = "0.1";
        e.target.closest(".card-price_style_main").style.zIndex = "10";
        setTimeout(() => {
            location.href = currentLink;
        }, 0);
    }
});

// логика открытия попапов город улица метро

const cursorCity = document.querySelector("#submenu-city");
const cursorStreet = document.querySelector("#submenu-street");
const cursorUnderground = document.querySelector("#submenu-underground");
const submenuCityBody = document.querySelector("#submenu-city-body");
const submenuStreetBody = document.querySelector("#submenu-street-body");
const submenuUndergroundBody = document.querySelector(
    "#submenu-underground-body"
);

cursorCity.addEventListener("click", (e) => {
    containerFiltersAdress.classList.toggle("mix-visible");
    submenuCityBody.classList.toggle("mix-visible");
});
cursorStreet.addEventListener("click", (e) => {
    containerFiltersAdress.classList.toggle("mix-visible");
    submenuStreetBody.classList.toggle("mix-visible");
});
cursorUnderground.addEventListener("click", (e) => {
    containerFiltersAdress.classList.toggle("mix-visible");
    submenuUndergroundBody.classList.toggle("mix-visible");
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

// сброс активных классов у кастомных селектов

const buttonReset = document.querySelector(".main-form__button_type_reset");

buttonReset.addEventListener("click", () => {
    const inputsSelectActive = document.querySelectorAll(
        ".custom-select-active"
    );
    inputsSelectActive.forEach((i) =>
        i.classList.remove("custom-select-active")
    );
});

// логика ввода значение в поля город улица адрес по клику в подменю

const sumbenuAdressContainers = document.querySelectorAll(
    ".main-submenu_style_filters-adress"
);
const inputCity = document.querySelector("#main-form-adress-city");
const inputStreet = document.querySelector("#main-form-adress-street");
const inputUndergound = document.querySelector("#main-form-adress-underground");

sumbenuAdressContainers.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("main-submenu__item")) {
            if (e.target.ariaLabel === "city") {
                inputCity.value = e.target.textContent.trim();
            }
            if (e.target.ariaLabel === "street") {
                inputStreet.value = e.target.textContent.trim();
            }
            if (e.target.ariaLabel === "underground") {
                inputUndergound.value = e.target.textContent.trim();
            }
            e.target
                .closest(".main-submenu_style_filters-adress")
                .classList.remove("mix-visible");
        }
    })
);

const inputCityNamePopup = document.querySelector("#inputCityNamePopup");
const containersCityName = document.querySelectorAll(
    ".popup-change-city__list"
);
const popupChangeCity = document.querySelector(".main-popup_type_change-city");
containersCityName.forEach((i) =>
    i.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            setTimeout(() => {
                popupChangeCity.classList.remove("mix-visible-scale");
            }, 750);
        }
    })
);

containersCityName.forEach((i) =>
    i.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("popup-change-city__item")) {
            inputCityNamePopup.value = e.target.textContent.trim();
        }
    })
);

const cityPopupAll = document.querySelectorAll(
    ".popup-change-city__item-popup"
);

cityPopupAll.forEach((i) =>
    i.addEventListener("click", (e) => {
        cityPopupAll.forEach((i) =>
            i.classList.remove("popup-change-city__item_type_active")
        );
        e.target.classList.add("popup-change-city__item_type_active");
    })
);
