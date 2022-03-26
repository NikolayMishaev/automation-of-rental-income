const tabNextBtn = document.querySelector(".registration-form__next-btn");
const stepList = document.querySelectorAll(".registration-form__step");
const tabList = document.querySelectorAll(".registration-form__tab");
const tabListJur = document.querySelectorAll(
  ".registration-form_juridical .registration-form__tab"
);
const userAgreement = document.querySelector(".registration-form__user-agreement");
const tabControl = document.querySelector(".registration-form__tabs");
const submitRegBtn = document.querySelector(".registration-form__submit-btn");

let currentTab = 0;

tabNextBtn.addEventListener("click", function () {
  currentTab++;
  stepList[currentTab].style.display = "block";
  stepList[currentTab - 1].style.display = "none";
  tabList[currentTab].classList.toggle("active");
  tabList[currentTab - 1].classList.toggle("registration-form__tab_filled");
  tabList[currentTab - 1].classList.toggle("active");
  checkLastStep();
});

// Добавить активный класс для шага

for (let index = 0; index < tabList.length; index++) {
  tabList[index].addEventListener("click", function () {
    for (let index = 0; index < stepList.length; index++) {
      stepList[index].style.display = "none";
      tabList[index].classList.remove("active");
    }
    stepList[index].style.display = "block";
    currentTab = index;
    tabList[index].classList.toggle("active");
    checkLastStep();
  });
}

function checkLastStep() {
  if (currentTab === 5 || currentTab === 14) {
    userAgreement.style.display = "block";
    submitRegBtn.style.display = "block";
    tabNextBtn.style.display = "none";
  } else {
    userAgreement.style.display = "none";
    submitRegBtn.style.display = "none";
    tabNextBtn.style.display = "block";
  }
}
