// общие функции
function addClassElement(element, className) {
    element.classList.add(className);
}

function removeClassElement(element, className) {
    element.classList.remove(className);
}

function switchButtons(
    eventTarget,
    arrayButtons,
    arrayContent,
    activeClassButton,
    notActiveClassContent
) {
    if (eventTarget.closest(`.${activeClassButton}`)) {
        return;
    }
    arrayButtons.forEach((i) => removeClassElement(i, activeClassButton));
    addClassElement(eventTarget, activeClassButton);
    arrayContent.forEach((i) => {
        if (i.ariaLabel === eventTarget.ariaLabel) {
            removeClassElement(i, notActiveClassContent);
        } else {
            addClassElement(i, notActiveClassContent);
        }
    });
}

const state = {
    currentOpenPopup: null,
    "view-activity-personal": document.querySelector(
        ".custom-text-input_type_select"
    ),
    "view-activity-organization": document.querySelector(".organization"),
    cursorsSelect: {
        "view-document": document.querySelector("#cursor-view-document"),
        "view-activity": document.querySelector("#cursor-view-activity"),
        "view-activity-org": document.querySelector(
            "#cursor-view-activity-org"
        ),
    },
    submenuSelect: {
        "view-document": document.querySelector("#submenu-view-document"),
        "view-activity": document.querySelector("#submenu-view-activity"),
        "view-activity-org": document.querySelector(
            "#submenu-view-activity-org"
        ),
    },
    inputsSelect: {
        "view-document": document.querySelector("#input-view-document"),
        "view-activity": document.querySelector("#input-view-activity"),
        "view-activity-org": document.querySelector("#input-view-activity-org"),
    },
};
const modalOfferPrice = document.querySelector(".modal-offer-price");
const offerBtn = document.querySelectorAll(".info-card__offer-btn");
const modalForm = document.querySelector(".modal-form");
const contactBtn = document.querySelectorAll(".info-card__primary-btn");

// откурыть модалку
for (let index = 0; index < offerBtn.length; index++) {
    offerBtn[index].addEventListener("click", function () {
        modalOfferPrice.style.display = "flex";
        state.currentOpenPopup = modalOfferPrice;
        document.addEventListener("keydown", handleEscClose);
    });
}

// открыть модалку
for (let index = 0; index < contactBtn.length; index++) {
    contactBtn[index].addEventListener("click", function () {
        modalForm.style.display = "flex";
        state.currentOpenPopup = modalForm;
        document.addEventListener("keydown", handleEscClose);
    });
}

// закрыть модалку
if (modalOfferPrice) {
    modalOfferPrice.addEventListener("click", (e) =>
        closeModalWindow(modalOfferPrice, e)
    );
}

function closeModalWindow(modal, e) {
    if (
        e.target.closest(".modal__close-btn") ||
        e.target.closest(".modal__cancel-btn")
    ) {
        modal.style.display = "none";
    }
}

// закрыть модалку
if (modalForm) {
    modalForm.addEventListener("click", (e) => closeModalWindow(modalForm, e));
}

// открыть модалку
contactBtn.onclick = function () {
    modalForm.style.display = "flex";
    state.currentOpenPopup = modalForm;
    document.addEventListener("keydown", handleEscClose);
};

// модальное окно "Вход"

const modalLogin = document.querySelector(".modal-login");

const signInBtn = document.querySelector("#link-signIn");

if (signInBtn) {
    signInBtn.onclick = function () {
        modalLogin.style.display = "flex";
        state.currentOpenPopup = modalLogin;
        document.addEventListener("keydown", handleEscClose);
    };
}
if (modalLogin) {
    modalLogin.addEventListener("click", (e) =>
        closeModalWindow(modalLogin, e)
    );
    const modalBtnLog = modalLogin.querySelector(".modal-login__login-btn");
    const modalLoginInputList = modalLogin.querySelectorAll("input");
    modalBtnLog.addEventListener("click", () =>
        checkRequiredInput(modalLoginInputList)
    );
}

// логика работы поля "пароль"

const passwordIcon = document.querySelectorAll(".modal-login__password-icon");

for (let index = 0; index < passwordIcon.length; index++) {
    passwordIcon[index].addEventListener("click", (e) => {
        const input =
            e.currentTarget.previousElementSibling.querySelector("input");
        const iconList = e.currentTarget.querySelectorAll("svg");
        if (input.type === "text") {
            input.type = "password";
            iconList[0].classList.add("modal-login__password-icon_active");
            iconList[1].classList.remove("modal-login__password-icon_active");
        } else {
            input.type = "text";
            iconList[1].classList.add("modal-login__password-icon_active");
            iconList[0].classList.remove("modal-login__password-icon_active");
        }
    });
}

const bellBtn = document.querySelectorAll(".info-card__icon-bell");

// клик по колокольчику

// for (let index = 0; index < bellBtn.length; index++) {
//     bellBtn[index].addEventListener("click", function () {
//         this.classList.toggle("active");
//     });
// }

const radio = document.querySelectorAll(
    ".contact-form .group-radio-btn__radio"
);
const sendBtn = document.querySelector(".modal-form .modal__login-btn");
const formList = document.querySelectorAll(".contact-form form");

// логика радио кнопок

for (let index = 0; index < radio.length; index++) {
    radio[index].addEventListener("change", function (e) {
        const value = e.target.value;
        clear(formList);
        if (value === "one") {
            const currentForm = document.querySelector(
                ".contact-form__first-option"
            );
            currentForm.style.display = "block";
            sendBtn.setAttribute("form", currentForm.id);
        }
        if (value === "two") {
            const currentForm = document.querySelector(
                ".contact-form__second-option"
            );
            currentForm.style.display = "block";
            sendBtn.setAttribute("form", currentForm.id);
        }
        if (value === "three") {
            const currentForm = document.querySelector(
                ".contact-form__third-option"
            );
            currentForm.style.display = "block";
            sendBtn.setAttribute("form", currentForm.id);
        }
    });
}

// скрыть все элементы

function clear(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        element.style.display = "none";
    }
}
// логика placeholder на datepicker

// логика placeholder на input

function setCustomInput() {
    const inputDate = document.querySelectorAll(".input-date__container input");
    for (let index = 0; index < inputDate.length; index++) {
        const element = inputDate[index];
        element.addEventListener("blur", function (e) {
            if (e.target.value) {
                e.target.nextElementSibling.classList.add(
                    "custom-text-input__label_full"
                );
            } else {
                e.target.nextElementSibling.classList.remove(
                    "custom-text-input__label_full"
                );
            }
        });
    }
    let customInput = document.querySelectorAll(
        ".custom-text-input input, .custom-text-input textarea"
    );

    for (let index = 0; index < customInput.length; index++) {
        const element = customInput[index];
        element.addEventListener("blur", function (e) {
            if (e.target.value) {
                e.target.nextElementSibling.classList.add(
                    "custom-text-input__label_full"
                );
            } else {
                e.target.nextElementSibling.classList.remove(
                    "custom-text-input__label_full"
                );
            }
        });
    }
}
setCustomInput();

const regRadioBtn = document.querySelectorAll(
    ".regisrtation-page .group-radio-btn__radio"
);

// логика радио кнопок

for (let index = 0; index < regRadioBtn.length; index++) {
    regRadioBtn[index].addEventListener("change", function (e) {
        const value = e.target.value;
        if (value === "one") {
            const currentForm = document.querySelector(
                ".registration-form_natural"
            );
            document.querySelector(
                ".registration-form_juridical"
            ).style.display = "none";
            currentForm.style.display = "block";
        }
        if (value === "two") {
            const currentForm = document.querySelector(
                ".registration-form_juridical"
            );
            document.querySelector(".registration-form_natural").style.display =
                "none";
            currentForm.style.display = "block";
        }
    });
}

const tabNextBtn = document.querySelectorAll(".registration-form__next-btn");
const stepList = document.querySelectorAll(
    ".registration-form_natural .registration-form__step"
);
const stepListJur = document.querySelectorAll(
    ".registration-form_juridical .registration-form__step"
);
const tabList = document.querySelectorAll(
    ".registration-form_natural .registration-form__tab"
);
const tabListJur = document.querySelectorAll(
    ".registration-form_juridical .registration-form__tab"
);
const userAgreement = document.querySelectorAll(
    ".registration-form__user-agreement"
);
const submitRegBtn = document.querySelectorAll(
    ".registration-form__submit-btn"
);

let currentTab = 0;
let currentTabJur = 0;

if (tabNextBtn.length > 0) {
    tabNextBtn[0].addEventListener("click", () =>
        navigateNextBtn(0, stepList, tabList)
    );
    tabNextBtn[1].addEventListener("click", () =>
        navigateNextBtn(1, stepListJur, tabListJur)
    );
}

// слушатели на клики по табам

for (let index = 0; index < tabList.length; index++) {
    tabList[index].addEventListener("click", () =>
        navigateTabs(stepList, tabList, index, 0)
    );
}
for (let index = 0; index < tabListJur.length; index++) {
    tabListJur[index].addEventListener("click", () => {
        if (stepListJur && tabListJur && index) {
            navigateTabs(stepListJur, tabListJur, index, 1);
        }
    });
}

function checkLastStep(radio) {
    if (radio === 0) {
        if (currentTab === 5) {
            userAgreement[radio].style.display = "block";
            submitRegBtn[radio].style.display = "flex";
            tabNextBtn[radio].style.display = "none";
        } else {
            userAgreement[radio].style.display = "none";
            submitRegBtn[radio].style.display = "none";
            tabNextBtn[radio].style.display = "flex";
        }
    }
    if (radio === 1) {
        if (currentTabJur === 8) {
            if (userAgreement[radio]) {
                userAgreement[radio].style.display = "block";
            }
            submitRegBtn[radio].style.display = "flex";
            tabNextBtn[radio].style.display = "none";
        } else {
            if (userAgreement[radio]) {
                userAgreement[radio].style.display = "none";
                submitRegBtn[radio].style.display = "none";
                tabNextBtn[radio].style.display = "flex";
            }
        }
    }
}
function navigateTabs(stepList, tabList, idx, radio) {
    let lastTab;
    if (radio === 0) lastTab = currentTab;
    if (radio === 1) lastTab = currentTabJur;
    if (
        checkRequiredInput(
            stepList[lastTab].querySelectorAll("input, textarea")
        )
    ) {
        tabList[lastTab].classList.add("registration-form__tab_filled");
    } else tabList[lastTab].classList.remove("registration-form__tab_filled");

    for (let index = 0; index < stepList.length; index++) {
        stepList[index].style.display = "none";
        tabList[index].classList.remove("active");
    }
    stepList[idx].style.display = "block";

    tabList[idx].classList.toggle("active");
    if (radio === 0) currentTab = idx;
    if (radio === 1) currentTabJur = idx;
    checkLastStep(radio);
}

function checkRequiredInput(step) {
    let findInput = false;
    let inputBik = null;
    let inputBankAccount = null;
    let inputCorrAccount = null;
    let inputIBAN = false;
    for (let index = 0; index < step.length; index++) {
        const element = step[index];
        if (element.ariaLabel && element.ariaLabel === "bik") {
            inputBik = element;
        }
        if (element.ariaLabel && element.ariaLabel === "bank-account") {
            inputBankAccount = element;
        }
        if (element.ariaLabel && element.ariaLabel === "corr-account") {
            inputCorrAccount = element;
        }
        if ((element.dataset.required || element.required) && !element.value) {
            findInput = true;
            if (element.type !== "file")
                element.classList.add("custom-text-input__error");
        }
        if (element.getAttribute("data-name") === "SWIFT") {
            if (!element.value) {
                inputBik.classList.add("custom-text-input__error");
            } else {
                inputBik.classList.remove("custom-text-input__error");
            }
        }
        if (element.getAttribute("data-name") === "IBAN") {
            if (!element.value) {
                inputBankAccount.classList.add("custom-text-input__error");
            } else {
                inputBankAccount.classList.remove("custom-text-input__error");
                inputIBAN = true;
            }
        }
        if (element.getAttribute("data-name") === "ABA") {
            if (!element.value && !inputIBAN) {
                inputBankAccount.classList.add("custom-text-input__error");
            } else {
                inputBankAccount.classList.remove("custom-text-input__error");
            }
        }
        if (
            inputBankAccount &&
            inputBankAccount.value &&
            inputBik &&
            inputBik.value
        ) {
            if (inputCorrAccount) {
                inputCorrAccount.classList.remove("custom-text-input__error");
            }
        } else {
            if (inputCorrAccount) {
                inputCorrAccount.classList.add("custom-text-input__error");
            }
        }
        if (element.value) {
            element.classList.remove("custom-text-input__error");
        }
    }
    if (findInput) return false;
    return true;
}

function navigateNextBtn(numForm, stepList, tabList) {
    let idx = 0;
    if (numForm === 0) {
        if (
            checkRequiredInput(
                stepList[currentTab].querySelectorAll("input, textarea")
            )
        ) {
            tabList[currentTab].classList.add("registration-form__tab_filled");
        } else
            tabList[currentTab].classList.remove(
                "registration-form__tab_filled"
            );
        currentTab++;
        idx = currentTab;
    }
    if (numForm === 1) {
        if (
            checkRequiredInput(
                stepList[currentTabJur].querySelectorAll("input, textarea")
            )
        ) {
            tabList[currentTabJur].classList.toggle(
                "registration-form__tab_filled"
            );
        }
        currentTabJur++;
        idx = currentTabJur;
    }
    stepList[idx].style.display = "block";
    stepList[idx - 1].style.display = "none";
    tabList[idx].classList.toggle("active");
    tabList[idx - 1].classList.toggle("active");
    checkLastStep(numForm);
}

const modalRWarningReg = document.querySelectorAll(
    ".modal-warning-registration"
);

// открыть модалку

for (let index = 0; index < submitRegBtn.length; index++) {
    submitRegBtn[index].addEventListener("click", () => {
        modalRWarningReg[index].style.display = "flex";
    });
}

// закрытие модалки

if (modalRWarningReg) {
    for (let index = 0; index < modalRWarningReg.length; index++) {
        modalRWarningReg[index].addEventListener("click", (e) =>
            closeModalWindow(modalRWarningReg[index], e)
        );
    }
}

// слушатель на клик селекта

const selectReg = document.querySelectorAll(".custom-text-input_select");
let currentSelect = null;
let currentIcon = null;
// закрыть селект при клике по окну

document.body.addEventListener("click", function (e) {
    if (e.target.closest(".custom-text-input_select")) return;
    if (currentSelect) {
        currentSelect.classList.remove("custom-text-input__option-list_active");
        currentIcon.style.transform = "rotate(0deg)";
        currentSelect = null;
    }
});
// открыть селект

for (let index = 0; index < selectReg.length; index++) {
    const element = selectReg[index];
    element.addEventListener("click", function (e) {
        const select = e.currentTarget.lastElementChild;
        const icon = document.querySelectorAll(
            ".registration-form__select-icon"
        )[index];
        select.classList.add("custom-text-input__option-list_active");
        currentSelect = select;
        currentIcon = icon;
        icon.style.transform = "rotate(180deg)";
    });
}

const selectItemsReg = document.querySelector(
    ".custom-text-input__option-list"
);

// заполнить значение селекта
if (selectItemsReg) {
    selectItemsReg.addEventListener("click", function (e) {
        if (e.target.tagName !== "LI") return;
        const input = document.querySelector(".custom-text-input_select input");
        const label = document.querySelector(
            ".custom-text-input_select .custom-text-input__label"
        );
        input.value = e.target.textContent;
        e.currentTarget.classList.remove(
            "custom-text-input__option-list_active"
        );
        currentIcon.style.transform = "rotate(0deg)";
        e.stopPropagation();
        label.classList.add("custom-text-input__label_full");
    });
}

const btnDownloadList = document.querySelectorAll(
    ".registration-form__download-btn"
);
const modalDownloadList = document.querySelectorAll(".modal-file-input");

// логика модальных инпутов

for (let index = 0; index < btnDownloadList.length; index++) {
    const btn = btnDownloadList[index];

    btn.addEventListener("click", () => {
        modalDownloadList[index].style.display = "flex";
    });
    modalDownloadList[index].addEventListener("click", (e) => {
        if (
            e.target.closest(".modal__close-btn") ||
            e.target.closest(".modal__cancel-btn")
        ) {
            modalDownloadList[index].style.display = "none";
        }
    });
}

const fileInput = document.querySelectorAll(".modal-file-input input");
const fileContainerNameList = document.querySelectorAll(".file-input__name a");
const fileContainerList = document.querySelectorAll(".file-input__file");

// логика работы модального окна с загрузкой файлов

for (let index = 0; index < fileInput.length; index++) {
    fileInput[index].addEventListener("change", (e) => {
        const input = e.target;
        if (input.files) {
            for (let i = 0; i < input.files.length; i++) {
                fileContainerList[index].style.display = "inline-flex";
                fileContainerNameList[index].textContent = input.files[i].name;
            }
            btnDownloadList[index].style.display = "none";
            modalDownloadList[index].style.display = "none";
        }
    });
}

// удаление файла

for (let index = 0; index < fileContainerList.length; index++) {
    fileContainerList[index].addEventListener("click", (e) => {
        if (!e.target.classList.contains("file-input__file-close")) return;
        e.currentTarget.style.display = "none";
        btnDownloadList[index].style.display = "inline-flex";
        fileInput[index].value = "";
    });
}

const requiredInputList = document.querySelectorAll(".custom-text-input");

// проверить обязательное поле на заполнение

for (let index = 0; index < requiredInputList.length; index++) {
    const input = requiredInputList[index];
    let elem = input.querySelector("input, textarea");
    if (elem.dataset.required || elem.required) {
        input.addEventListener("change", (e) => {
            elem.value
                ? elem.classList.remove("custom-text-input__error")
                : elem.classList.add("custom-text-input__error");
        });
    }
}

function completeForm(radio, e) {
    let steps, tabs, form;
    if (radio === 0) {
        steps = stepList;
        tabs = tabList;
        form = formNat;
    }
    if (radio === 1) {
        steps = stepListJur;
        tabs = tabListJur;
        form = formJur;
    }
    const requiredInputList = form.querySelectorAll(
        'input[data-required="true"], textarea[data-required="true"]'
    );
    for (let index = 0; index < requiredInputList.length; index++) {
        const element = requiredInputList[index];
        if (!element.value) {
            for (let index = 0; index < steps.length; index++) {
                const step = steps[index];
                step.style.display = "none";
            }
            const numStep = +element.closest(".registration-form__step").dataset
                .step;
            radio === 0 ? (currentTab = numStep) : (currentTabJur = numStep);
            steps[numStep].style.display = "block";
            tabs[steps.length - 1].classList.remove("active");
            tabs[numStep].classList.add("active");
            checkRequiredInput(
                steps[numStep].querySelectorAll("input, textarea")
            );
            checkLastStep(radio);
            break;
        }
    }
    e.target.closest(".modal").style.display = "none";
}

const formNat = document.querySelector(".registration-form_natural");
const formJur = document.querySelector(".registration-form_juridical");
// логика кнопки "Дополнить"
if (formNat || formJur) {
    const completeBtnNat = formNat.querySelector(".modal__complete-btn");
    const completeBtnJur = formJur.querySelector(".modal__complete-btn");

    completeBtnNat.onclick = (e) => completeForm(0, e);
    completeBtnJur.onclick = (e) => completeForm(1, e);
}

// страница проверки формы

const modalRejectForm = document.querySelector(".modal-reject-form");
const openModalRejectFormBtn = document.querySelector(
    ".check-form-page__reject-btn"
);

if (openModalRejectFormBtn) {
    openModalRejectFormBtn.onclick = function () {
        modalRejectForm.style.display = "flex";
    };
}

if (modalRejectForm) {
    modalRejectForm.onclick = function (e) {
        closeModalWindow(modalRejectForm, e);
    };
}

const fileDownloadList = document.querySelectorAll(
    ".check-form-page__file_img"
);
const fileModal = document.querySelectorAll(".modal-file-form");

if (fileDownloadList) {
    for (let index = 0; index < fileDownloadList.length; index++) {
        fileDownloadList[index].onclick = function (e) {
            e.currentTarget.querySelector(".modal-file-form").style.display =
                "flex";
        };
    }
}
if (fileModal) {
    for (let index = 0; index < fileModal.length; index++) {
        fileModal[index].addEventListener("click", (e) => {
            closeModalWindow(fileModal[index], e);
            e.stopPropagation();
        });
    }
}

const step5 = document.querySelector(
    ".registration-form_juridical .registration-form__step5"
);
const step6 = document.querySelector(
    ".registration-form_juridical .registration-form__step6"
);
import { inputFormBenif, inputFormBenifJur } from "./inputForm.js";

if (step5) {
    step5.addEventListener("click", (e) => {
        if (e.target.classList.contains("registration-form__add-btn")) {
            addBenif(e.currentTarget, e.target, inputFormBenif);
        }
        if (e.target.classList.contains("registration-form__del-btn")) {
            deleteBenif(e.currentTarget, e.target);
        }
    });
}
if (step6) {
    step6.addEventListener("click", (e) => {
        if (e.target.classList.contains("registration-form__add-btn")) {
            addBenif(e.currentTarget, e.target, inputFormBenifJur);
        }
        if (e.target.classList.contains("registration-form__del-btn")) {
            deleteBenif(e.currentTarget, e.target);
        }
    });
}

function addBenif(step, btn, inputFormBenif) {
    const stepForm = step.querySelectorAll(".registration-form__benif");
    const addBtn = btn.previousElementSibling;
    addBtn.style.display = "block";
    if (stepForm.length > 4) {
        btn.style.display = "none";
        return;
    }
    const newBenif = document.createElement("div");
    newBenif.classList.add("registration-form__benif");
    newBenif.innerHTML = inputFormBenif;
    stepForm[stepForm.length - 1].after(newBenif);
    setCustomInput();
}

function deleteBenif(step, btn) {
    const stepForm = step.querySelectorAll(".registration-form__benif");
    const addBtn = btn.nextElementSibling;
    if (stepForm.length === 1) return;
    if (stepForm.length === 2) {
        btn.style.display = "none";
        addBtn.style.display = "block";
    }

    stepForm[stepForm.length - 1].remove();
    setCustomInput();
}

const modalRegistration = document.querySelector(".modal-registration");

if (modalRegistration) {
    const modalBtnReg = modalRegistration.querySelector(
        ".modal-login__registration-btn"
    );
    const modalRegistrationInputList =
        modalRegistration.querySelectorAll("input");

    modalRegistration.addEventListener("click", (e) =>
        closeModalWindow(modalRegistration, e)
    );
    modalBtnReg.addEventListener("click", () =>
        checkRequiredInput(modalRegistrationInputList)
    );
}
const registerBtn = document.querySelector("#link-register");

if (registerBtn) {
    registerBtn.onclick = function () {
        modalRegistration.style.display = "flex";
        state.currentOpenPopup = modalRegistration;
        document.addEventListener("keydown", handleEscClose);
    };
}

// проверить обязательные поля

const formListReg = document.querySelectorAll(".registration-form");

for (let index = 0; index < submitRegBtn.length; index++) {
    submitRegBtn[index].addEventListener("click", (e) => {
        let find = false;
        const requiredInputList = formListReg[index].querySelectorAll(
            'input[data-required="true"], textarea[data-required="true"]'
        );
        for (let index = 0; index < requiredInputList.length; index++) {
            const element = requiredInputList[index];
            if (!element.value) {
                find = true;
                break;
            }
        }
        if (find) {
            e.preventDefault();
        } else return;
        modalRWarningReg[index].style.display = "flex";
    });
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

const buttonsSelect = document.querySelectorAll(
    ".button-toggle-select-register"
);

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
            return;
        }
        if (
            e.target.closest(".label-checkbox") &&
            e.target.closest(".label-checkbox").ariaLabel === "checkbox"
        ) {
            setInputValueByValueActiveCheckbox();
            return;
        }
        if (
            e.target.ariaLabel === "item" &&
            e.target.textContent.trim() === "Иное"
        ) {
            if (currentLabel.ariaLabel === "view-activity") {
                removeClassElement(
                    state["view-activity-personal"],
                    "mix-display-none"
                );
            } else {
                removeClassElement(
                    state["view-activity-organization"],
                    "mix-display-none"
                );
            }
        }
        if (e.target.ariaLabel === "item") {
            if (e.target.textContent.trim() !== "Иное") {
                if (currentLabel.ariaLabel === "view-activity") {
                    addClassElement(
                        state["view-activity-personal"],
                        "mix-display-none"
                    );
                } else {
                    addClassElement(
                        state["view-activity-organization"],
                        "mix-display-none"
                    );
                }
            }
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

// логика добавления карточки в избранное

const buttonsLikeCard = document.querySelectorAll(".info-card__favorite-btn");
const iconsLike = document.querySelectorAll(".icon-like");

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

buttonsLikeCard.forEach((i) =>
    i.addEventListener("click", (e) => {
        const currentLike = iconsLike[0].classList.contains("icon-like_active");
        const data = { "card-like": !currentLike };
        const currentButton = e.target.closest(".info-card__favorite-btn");
        fetch(currentButton.getAttribute("data-url"), {
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
                if (currentLike) {
                    iconsLike.forEach((i) =>
                        removeClassElement(i, "icon-like_active")
                    );
                    buttonsLikeCard.forEach(
                        (i) =>
                            (i.children[1].textContent = "Добавить в избранное")
                    );
                } else {
                    iconsLike.forEach((i) =>
                        addClassElement(i, "icon-like_active")
                    );
                    buttonsLikeCard.forEach(
                        (i) =>
                            (i.children[1].textContent =
                                "Удалить из избранного")
                    );
                }
            }
        });
    })
);

// Установка значения для кнопки при отрисовке страницы
if (iconsLike.length) {
    if (iconsLike[0].classList.contains("icon-like_active")) {
        buttonsLikeCard.forEach(
            (i) => (i.children[1].textContent = "Удалить из избранного")
        );
    } else {
        buttonsLikeCard.forEach(
            (i) => (i.children[1].textContent = "Добавить в избранное")
        );
    }
}

// Логика прокрутки до карты по клику на кнопку "Посмотреть на карте"

const buttonsLookMap = document.querySelectorAll(".info-card__link");
const mapObject = document.querySelector(".map-object");

buttonsLookMap.forEach((i) =>
    i.addEventListener("click", () => {
        const elementPosition = mapObject.getBoundingClientRect().top;
        const offsetPosition = elementPosition;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    })
);

// логика регистрации

const inputPassword = document.querySelector(".input-register-password");
const captionInputPassword = document.querySelector("#caption-error-password");

const inputEmail = document.querySelector("#input-registraion-login");
const captionInputEmail = document.querySelector("#caption-error-register");

if (inputPassword) {
    inputPassword.addEventListener("input", () => {
        if (inputPassword.value.length < 8) {
            inputPassword.classList.add("custom-text-input__error-border");
            captionInputPassword.classList.add(
                "custom-text-input__caption_active"
            );
        } else {
            inputPassword.classList.remove("custom-text-input__error-border");
            captionInputPassword.classList.remove(
                "custom-text-input__caption_active"
            );
        }
    });
}

// логика работы модального окна Регистрации, валидация полей

const inputRegistrationLogin = document.querySelector(
    "#input-registraion-login"
);

if (inputRegistrationLogin) {
    inputRegistrationLogin.addEventListener("input", () => {
        inputEmail.classList.remove("custom-text-input__error-border");
        captionInputEmail.classList.remove("custom-text-input__caption_active");
    });
    inputRegistrationLogin.addEventListener("blur", () => {
        const data = { "register-email": inputRegistrationLogin.value };
        fetch(inputRegistrationLogin.getAttribute("data-url"), {
            method: "POST",
            credentials: "same-origin",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": csrftoken,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    inputEmail.classList.add("custom-text-input__error-border");
                    captionInputEmail.textContent =
                        "такой пользователь уже существует";
                    captionInputEmail.classList.add(
                        "custom-text-input__caption_active"
                    );
                } else {
                    inputEmail.classList.remove(
                        "custom-text-input__error-border"
                    );
                    captionInputEmail.classList.remove(
                        "custom-text-input__caption_active"
                    );
                }
            })
            .catch(() => {
                inputEmail.classList.add("custom-text-input__error-border");
                captionInputEmail.textContent =
                    "произошла ошибка, повторите запрос";
                captionInputEmail.classList.add(
                    "custom-text-input__caption_active"
                );
            });
    });
}

// логика изменения текста в зависимости от статуса колокольчика

const buttonsBell = document.querySelector(".info-card__icon-bell");
const containersTextTooltipBell = document.querySelectorAll(
    ".tooltip__inner_type_bell"
);

if (buttonsBell) {
    if (buttonsBell.classList.contains("active")) {
        containersTextTooltipBell.forEach(
            (i) =>
                (i.textContent =
                    "Выключить рассылку уведомлений об освобождении")
        );
    } else {
        containersTextTooltipBell.forEach(
            (i) =>
                (i.textContent =
                    "Включить рассылку уведомлений об освобождении")
        );
    }
}

const inputsDate = document.querySelectorAll("input[type=date]");

inputsDate.forEach((i) => {
    let timer = undefined;
    i.addEventListener("input", (e) => {
        clearInterval(timer);
        timer = setTimeout(() => {
            let inputValue = e.target.value;
            if (
                new Date(inputValue) > new Date() ||
                new Date(inputValue) < new Date("1900-01-01")
            ) {
                e.target.value = "2000-01-01";
            }
        }, 1000);
    });
});

// маска для ввода номера телефонов

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length
                        ? val.charAt(i++) || def.charAt(i)
                        : a;
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            var reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, function (a) {
                    return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (
                !reg.test(this.value) ||
                this.value.length < 5 ||
                (keyCode > 47 && keyCode < 58)
            )
                this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});

// маска для email
if (document.querySelector(".regisrtation-page")) {
    $("#input-email-personal").inputmask("email");
    $("#input-email-ip").inputmask("email");
    $("#input-email-org").inputmask("email");
}

if (document.querySelector("#contact-form2")) {
    $("#contact-form2 .input-email").inputmask("email");
}

// логика запроса по нажатию на колокольчик

const buttonsRing = document.querySelectorAll(".info-card__icon-bell");

if (buttonsRing.length) {
    buttonsRing.forEach((i) => i.addEventListener("click", sendRequestRing));
}

function sendRequestRing(e) {
    const ringActive = e.target
        .closest(".info-card__icon-bell")
        .classList.contains("active");
    const data = { is_ring: !ringActive };
    fetch(e.target.closest(".info-card__icon-bell").getAttribute("data-url"), {
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
            if (ringActive) {
                removeClassElement(
                    e.target.closest(".info-card__icon-bell"),
                    "active"
                );
                containersTextTooltipBell.forEach(
                    (i) =>
                        (i.textContent =
                            "Включить рассылку уведомлений об освобождении")
                );
            } else {
                addClassElement(
                    e.target.closest(".info-card__icon-bell"),
                    "active"
                );
                containersTextTooltipBell.forEach(
                    (i) =>
                        (i.textContent =
                            "Выключить рассылку уведомлений об освобождении")
                );
            }
        }
    });
}
