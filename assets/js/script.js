const cancelBtn = document.querySelectorAll(".modal__cancel-btn");
const closeBtn = document.querySelectorAll(".modal__close-btn");
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
for (let index = 0; index < closeBtn.length; index++) {
  closeBtn[index].addEventListener("click", function () {
    modalOfferPrice.style.display = "none";
    modalForm.style.display = "none";
  });
}
for (let index = 0; index < cancelBtn.length; index++) {
  cancelBtn[index].addEventListener("click", function () {
    modalOfferPrice.style.display = "none";
    modalForm.style.display = "none";
  });
}

window.onclick = function (event) {
  if (event.target == modalOfferPrice) {
    modalOfferPrice.style.display = "none";
  }
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
};

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
      console.log(currentForm.id);
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
