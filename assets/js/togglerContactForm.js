const radio = document.querySelectorAll(
  ".contact-form .group-radio-btn__radio"
);
const formList = document.querySelectorAll(".contact-form form");
let currValue = "one";

for (let index = 0; index < radio.length; index++) {
  radio[index].addEventListener("change", function (e) {
    const value = e.target.value;
    clear();
    if (value === "one") {
      const currentForm = document.querySelector(".contact-form__first-option");
      currentForm.style.display = "block";
    }
    if (value === "two") {
      const currentForm = document.querySelector(
        ".contact-form__second-option"
      );
      currentForm.style.display = "block";
    }
    if (value === "three") {
      const currentForm = document.querySelector(".contact-form__third-option");
      currentForm.style.display = "block";
    }
  });
}

function clear() {
  for (let index = 0; index < formList.length; index++) {
    const element = formList[index];
    element.style.display = "none";
  }
}
