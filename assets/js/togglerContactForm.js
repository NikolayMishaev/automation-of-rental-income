const radio = document.querySelectorAll(
  ".contact-form .group-radio-btn__radio"
);
const sendBtn = document.querySelector(".modal-form .modal__login-btn");
const formList = document.querySelectorAll(".contact-form form");

for (let index = 0; index < radio.length; index++) {
  radio[index].addEventListener("change", function (e) {
    const value = e.target.value;
    clear();
    if (value === "one") {
      const currentForm = document.querySelector(".contact-form__first-option");
      currentForm.style.display = "block";
      sendBtn.setAttribute("form", currentForm.id);
    }
    if (value === "two") {
      const currentForm = document.querySelector(
        ".contact-form__second-option"
      );
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

function clear() {
  for (let index = 0; index < formList.length; index++) {
    const element = formList[index];
    element.style.display = "none";
  }
}
