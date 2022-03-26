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
const tabControl = document.querySelector(".registration-form__tabs");
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
