const modalOfferPrice = document.querySelector(".modal-offer-price");
const offerBtn = document.querySelectorAll(".info-card__offer-btn");
const modalForm = document.querySelector(".modal-form");
const contactBtn = document.querySelectorAll(".info-card__primary-btn");

for (let index = 0; index < offerBtn.length; index++) {
  offerBtn[index].addEventListener("click", function () {
    modalOfferPrice.style.display = "flex";
  });
}
for (let index = 0; index < contactBtn.length; index++) {
  contactBtn[index].addEventListener("click", function () {
    modalForm.style.display = "flex";
  });
}
if (modalOfferPrice) {
  modalOfferPrice.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalOfferPrice.style.display = "none";
    }
  });
}

if (modalForm) {
  modalForm.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalForm.style.display = "none";
    }
  });
}
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

for (let index = 0; index < bellBtn.length; index++) {
  bellBtn[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const radio = document.querySelectorAll(".contact-form .group-radio-btn__radio");
const sendBtn = document.querySelector(".modal-form .modal__login-btn");
const formList = document.querySelectorAll(".contact-form form");

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

for (let index = 0; index < tabNextBtn.length; index++) {
  tabNextBtn[index].addEventListener("click", () => navigateNextBtn());
}

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
      submitRegBtn[radio].style.display = "block";
      tabNextBtn[radio].style.display = "none";
    } else {
      userAgreement[radio].style.display = "none";
      submitRegBtn[radio].style.display = "none";
      tabNextBtn[radio].style.display = "block";
    }
  }
  if (radio === 1) {
    if (currentTabJur === 8) {
      userAgreement[radio].style.display = "block";
      submitRegBtn[radio].style.display = "block";
      tabNextBtn[radio].style.display = "none";
    } else {
      userAgreement[radio].style.display = "none";
      submitRegBtn[radio].style.display = "none";
      tabNextBtn[radio].style.display = "block";
    }
  }
}
function navigateTabs(stepList, tabList, idx, radio) {
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

function navigateNextBtn() {
  currentTab++;
  stepList[currentTab].style.display = "block";
  stepList[currentTab - 1].style.display = "none";
  tabList[currentTab].classList.toggle("active");
  tabList[currentTab - 1].classList.toggle("registration-form__tab_filled");
  tabList[currentTab - 1].classList.toggle("active");
  checkLastStep();
}

const modalRWarningReg = document.querySelector(".modal-warning-registration");

for (let index = 0; index < submitRegBtn.length; index++) {
  submitRegBtn[index].addEventListener("click", () => {
    modalRWarningReg.style.display = "flex";
  });
}

if (modalRWarningReg) {
  modalRWarningReg.addEventListener("click", (e) => {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modalRWarningReg.style.display = "none";
    }
  });
}
