const bellBtn = document.querySelectorAll(".info-card__icon-bell");

for (let index = 0; index < bellBtn.length; index++) {
  bellBtn[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
