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
  if (event.target == modal) {
    modalOfferPrice.style.display = "none";
  }
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
};

contactBtn.onclick = function () {
  modalForm.style.display = "flex";
};
