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
  modalOfferPrice.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalOfferPrice.style.display = "none";
    }
  });
}

// закрыть модалку
if (modalForm) {
  modalForm.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalForm.style.display = "none";
    }
  });
}

// лькрыть модалку
contactBtn.onclick = function () {
  modalForm.style.display = "flex";
};

import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".mainSwiper", {
  loop: false,
  spaceBetween: 16,
  breakpoints: {
    1441: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
  },
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".slider__next-btn_track",
    prevEl: ".slider__prev-btn_track",
  },
});
const swiper2 = new Swiper(".track-swiper", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider__next-btn",
    prevEl: ".slider__prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: swiper,
  },
});

const bellBtn = document.querySelectorAll(".info-card__icon-bell");

// клик по колокольчику

for (let index = 0; index < bellBtn.length; index++) {
  bellBtn[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const radio = document.querySelectorAll(".contact-form .group-radio-btn__radio");
const sendBtn = document.querySelector(".modal-form .modal__login-btn");
const formList = document.querySelectorAll(".contact-form form");

// логика радио кнопок

for (let index = 0; index < radio.length; index++) {
  radio[index].addEventListener("change", function (e) {
    const value = e.target.value;
    clear(formList);
    if (value === "one") {
      const currentForm = document.querySelector(".contact-form__first-option");
      currentForm.style.display = "block";
      sendBtn.setAttribute("form", currentForm.id);
    }
    if (value === "two") {
      const currentForm = document.querySelector(".contact-form__second-option");
      currentForm.style.display = "block";
      sendBtn.setAttribute("form", currentForm.id);
    }
    if (value === "three") {
      const currentForm = document.querySelector(".contact-form__third-option");
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

const inputDate = document.querySelectorAll(".input-date__container input");
for (let index = 0; index < inputDate.length; index++) {
  const element = inputDate[index];
  element.addEventListener("blur", function (e) {
    if (e.target.value) {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "flex";
    }
  });
}
// логика placeholder на input

const customInput = document.querySelectorAll(
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

const regRadioBtn = document.querySelectorAll(".regisrtation-page .group-radio-btn__radio");

// логика радио кнопок

for (let index = 0; index < regRadioBtn.length; index++) {
  regRadioBtn[index].addEventListener("change", function (e) {
    const value = e.target.value;
    if (value === "one") {
      const currentForm = document.querySelector(".registration-form_natural");
      document.querySelector(".registration-form_juridical").style.display = "none";
      currentForm.style.display = "block";
      //sendBtn.setAttribute("form", currentForm.id);
    }
    if (value === "two") {
      const currentForm = document.querySelector(".registration-form_juridical");
      document.querySelector(".registration-form_natural").style.display = "none";
      currentForm.style.display = "block";
      // sendBtn.setAttribute("form", currentForm.id);
    }
  });
}

const tabNextBtn = document.querySelectorAll(".registration-form__next-btn");
const stepList = document.querySelectorAll(".registration-form_natural .registration-form__step");
const stepListJur = document.querySelectorAll(
  ".registration-form_juridical .registration-form__step"
);
const tabList = document.querySelectorAll(".registration-form_natural .registration-form__tab");
const tabListJur = document.querySelectorAll(
  ".registration-form_juridical .registration-form__tab"
);
const userAgreement = document.querySelectorAll(".registration-form__user-agreement");
const submitRegBtn = document.querySelectorAll(".registration-form__submit-btn");

let currentTab = 0;
let currentTabJur = 0;

tabNextBtn[0].addEventListener("click", () => navigateNextBtn(0, stepList, tabList));
tabNextBtn[1].addEventListener("click", () => navigateNextBtn(1, stepListJur, tabListJur));

// слушатели на клики по табам

for (let index = 0; index < tabList.length; index++) {
  tabList[index].addEventListener("click", () => navigateTabs(stepList, tabList, index, 0));
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
  if (checkRequiredInput(stepList[lastTab].querySelectorAll("input, textarea"))) {
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
    if (element.required) {
      if (!element.value) {
        element.closest(".custom-text-input").classList.add("custom-text-input__error");
        findInput = true;
      }
    }
  }
  if (findInput) return false;
  return true;
}

function navigateNextBtn(numForm, stepList, tabList) {
  let idx = 0;
  if (numForm === 0) {
    if (checkRequiredInput(stepList[currentTab].querySelectorAll("input, textarea"))) {
      tabList[currentTab].classList.add("registration-form__tab_filled");
    } else tabList[currentTab].classList.remove("registration-form__tab_filled");
    currentTab++;
    idx = currentTab;
  }
  if (numForm === 1) {
    if (checkRequiredInput(stepList[currentTabJur].querySelectorAll("input, textarea"))) {
      tabList[currentTabJur].classList.toggle("registration-form__tab_filled");
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

const modalRWarningReg = document.querySelector(".modal-warning-registration");

// открыть модалку

for (let index = 0; index < submitRegBtn.length; index++) {
  submitRegBtn[index].addEventListener("click", () => {
    modalRWarningReg.style.display = "flex";
  });
}

// закрытие модалки

if (modalRWarningReg) {
  modalRWarningReg.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalRWarningReg.style.display = "none";
    }
  });
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
// открыть селекот

for (let index = 0; index < selectReg.length; index++) {
  const element = selectReg[index];
  element.addEventListener("click", function (e) {
    const select = e.currentTarget.lastElementChild;
    const icon = document.querySelectorAll(".registration-form__select-icon")[index];
    select.classList.add("custom-text-input__option-list_active");
    currentSelect = select;
    currentIcon = icon;
    icon.style.transform = "rotate(180deg)";
  });
}

const selectItemsReg = document.querySelector(".custom-text-input__option-list");

// заполнить значение селекта
selectItemsReg.addEventListener("click", function (e) {
  if (e.target.tagName !== "LI") return;
  const input = document.querySelector(".custom-text-input_select input");
  const label = document.querySelector(".custom-text-input_select .custom-text-input__label");
  input.value = e.target.textContent;
  e.currentTarget.classList.remove("custom-text-input__option-list_active");
  currentIcon.style.transform = "rotate(0deg)";
  e.stopPropagation();
  label.classList.add("custom-text-input__label_full");
});

const btnDownloadList = document.querySelectorAll(".registration-form__download-btn");
const modalDownloadList = document.querySelectorAll(".modal-file-input");

// логика модальных инпутов

for (let index = 0; index < btnDownloadList.length; index++) {
  const btn = btnDownloadList[index];

  btn.addEventListener("click", () => {
    modalDownloadList[index].style.display = "flex";
  });
  // modalDownloadList[index].addEventListener("click", (e) => {
  //   if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
  //     modalDownloadList[index].style.display = "none";
  //   }
  // });
}

const imgSvg =
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.9 10.98L8 13.51L11.1 9.52C11.3 9.26 11.7 9.26 11.9 9.53L15.41 14.21C15.66 14.54 15.42 15.01 15.01 15.01H3.02C2.6 15.01 2.37 14.53 2.63 14.2L5.12 11C5.31 10.74 5.69 10.73 5.9 10.98Z" fill="#55B465"/></svg>';

const fileInput = document.querySelector(".modal-file-input input");

fileInput.addEventListener("change", (e) => {
  const input = e.target;
  const textInput = input.previousElementSibling;
  if (input.files) {
    textInput.style.display = "none";
    for (let index = 0; index < input.files.length; index++) {
      const file = input.files[index];
      let div = document.createElement("div");
      const container = input.closest(".file-input");
      div.innerHTML = `<div class ='file-input__row'>${imgSvg}${file.name}</><div class='file-input__file-close'>x</div>`;
      div.classList.add("file-input__file");
      container.append(div);
    }
  }
  console.log(input.value);
});

const requiredInputList = document.querySelectorAll(".registration-form .custom-text-input");

for (let index = 0; index < requiredInputList.length; index++) {
  const input = requiredInputList[index];
  let elem = input.querySelector("input, textarea");
  if (elem.required) {
    input.addEventListener("change", (e) => {
      const container = input.closest(".custom-text-input");
      elem.value
        ? container.classList.remove("custom-text-input__error")
        : container.classList.add("custom-text-input__error");
    });
  }
}
