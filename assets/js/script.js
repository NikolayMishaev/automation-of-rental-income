const modalOfferPrice = document.querySelector(".modal-offer-price");
const offerBtn = document.querySelectorAll(".info-card__offer-btn");
const modalForm = document.querySelector(".modal-form");
const contactBtn = document.querySelectorAll(".info-card__primary-btn");

// откурыть модалку
for (let index = 0; index < offerBtn.length; index++) {
    offerBtn[index].addEventListener("click", function () {
        modalOfferPrice.style.display = "flex";
    });
}

// открыть модалку
for (let index = 0; index < contactBtn.length; index++) {
    contactBtn[index].addEventListener("click", function () {
        modalForm.style.display = "flex";
    });
}

// закрыть модалку
if (modalOfferPrice) {
    modalOfferPrice.addEventListener("click", (e) =>
        closeModalWindow(modalOfferPrice, e)
    );
}

function closeModalWindow(modal, e) {
    {
        if (
            e.target.closest(".modal__close-btn") ||
            e.target.closest(".modal__cancel-btn")
        ) {
            modal.style.display = "none";
        }
    }
}

// закрыть модалку
if (modalForm) {
    modalForm.addEventListener("click", (e) => closeModalWindow(modalForm, e));
}

// открыть модалку
contactBtn.onclick = function () {
    modalForm.style.display = "flex";
};

// модальное окно "Вход"

const modalLogin = document.querySelector(".modal-login");

const signInBtn = document.querySelector("#link-signIn");

if (signInBtn) {
  signInBtn.onclick = function () {
    modalLogin.style.display = "flex";
  };
}
if (modalLogin) {
  modalLogin.addEventListener("click", (e) => closeModalWindow(modalLogin, e));
  const modalBtnLog = modalLogin.querySelector(".modal-login__login-btn");
  const modalLoginInputList = modalLogin.querySelectorAll("input");
  modalBtnLog.addEventListener("click", () => checkRequiredInput(modalLoginInputList));
}

// логика работы поля "пароль"

const passwordIcon = document.querySelectorAll(".modal-login__password-icon");

for (let index = 0; index < passwordIcon.length; index++) {
  passwordIcon[index].addEventListener("click", (e) => {
    const input = e.currentTarget.previousElementSibling.querySelector("input");
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

for (let index = 0; index < bellBtn.length; index++) {
    bellBtn[index].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

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
        e.target.nextElementSibling.classList.add("custom-text-input__label_full");
      } else {
        e.target.nextElementSibling.classList.remove("custom-text-input__label_full");
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
        e.target.nextElementSibling.classList.add("custom-text-input__label_full");
      } else {
        e.target.nextElementSibling.classList.remove("custom-text-input__label_full");
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
      const currentForm = document.querySelector(".registration-form_natural");
      document.querySelector(".registration-form_juridical").style.display = "none";
      currentForm.style.display = "block";
    }
    if (value === "two") {
      const currentForm = document.querySelector(".registration-form_juridical");
      document.querySelector(".registration-form_natural").style.display = "none";
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
    tabListJur[index].addEventListener("click", () =>
        navigateTabs(stepListJur, tabListJur, index, 1)
    );
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
            userAgreement[radio].style.display = "block";
            submitRegBtn[radio].style.display = "flex";
            tabNextBtn[radio].style.display = "none";
        } else {
            userAgreement[radio].style.display = "none";
            submitRegBtn[radio].style.display = "none";
            tabNextBtn[radio].style.display = "flex";
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
  for (let index = 0; index < step.length; index++) {
    const element = step[index];
    if ((element.dataset.required || element.required) && !element.value) {
      findInput = true;
      if (element.type !== "file") element.classList.add("custom-text-input__error");
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

const fileInputModalSupport = document.querySelector(".modal-support__file-input");

// логика работы drag n drop инпута на несколько файлов

if (fileInputModalSupport) {
  fileInputModalSupport.addEventListener("change", (e) => {
    let input = e.currentTarget.querySelectorAll("input");
    input = input[input.length - 1];
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        const inputName = document.createElement("div");
        inputName.classList.add("file-input__file");
        inputName.innerHTML = `
        <div class="file-input__name">
          <div class="file-input__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.9 10.98L8 13.51L11.1 9.52C11.3 9.26 11.7 9.26 11.9 9.53L15.41 14.21C15.66 14.54 15.42 15.01 15.01 15.01H3.02C2.6 15.01 2.37 14.53 2.63 14.2L5.12 11C5.31 10.74 5.69 10.73 5.9 10.98Z" fill="#55B465"></path>
            </svg>
          </div>
          <a href="#">${input.files[i].name}</a>
        </div>
        <div class="file-input__file-close">x</div>`;
        inputName.style.display = "inline-flex";
        e.currentTarget.append(inputName);
        inputName.addEventListener("click", (e) => deleteFileInput(e));
      }
      input.classList.add("file-input_fill");
      const newInput = document.createElement("input");
      newInput.type = "file";
      e.currentTarget.append(newInput);
    }
  });
}

function deleteFileInput(e) {
  if (e.target.classList.contains("file-input__file-close")) {
    e.currentTarget.previousElementSibling.remove();
    e.currentTarget.remove();
  }
}

const modalSupport = document.querySelector(".modal-support");

if (modalSupport) {
  modalSupport.addEventListener("click", (e) => closeModalWindow(modalSupport, e));
}

const modalRegistration = document.querySelector(".modal-registration");

if (modalRegistration) {
  const modalBtnReg = modalRegistration.querySelector(".modal-login__registration-btn");
  const modalRegistrationInputList = modalRegistration.querySelectorAll("input");

  modalRegistration.addEventListener("click", (e) => closeModalWindow(modalRegistration, e));
  modalBtnReg.addEventListener("click", () => checkRequiredInput(modalRegistrationInputList));
}
const registerBtn = document.querySelector("#link-register");

if (registerBtn) {
  registerBtn.onclick = function () {
    modalRegistration.style.display = "flex";
  };
}

// проверить обязательные поля
