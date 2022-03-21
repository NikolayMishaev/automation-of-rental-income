const cancelBtn = document.querySelector(".modal__cancel-btn");
const closeBtn = document.querySelector(".modal__close-btn");
const modal = document.querySelector(".modal");
const offerBtn = document.querySelector(".info-card__offer-btn");

offerBtn.onclick = function () {
  modal.style.display = "flex";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
};

const modalForm = document.querySelector(".modal-form");
const contactBtn = document.querySelector(".info-card__primary-btn");

contactBtn.onclick = function () {
  modalForm.style.display = "flex";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
  modalForm.style.display = "none";
};
cancelBtn.onclick = function () {
  modal.style.display = "none";
};
