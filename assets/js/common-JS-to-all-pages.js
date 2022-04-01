(function () {
  // логика открытия/закрытия попапа выбора городов "Ваш город"

  const popupOverlay = document.querySelector(".main-popup");

  const headerCity = document.querySelector(".header__city");
  const popupChangeCity = document.querySelector(".main-popup_type_change-city");

  popupOverlay.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("main-popup") ||
      e.target.classList.contains("main-popup__close")
    ) {
      popupChangeCity.classList.remove("mix-visible-scale");
    }
  });

  headerCity.addEventListener("click", (e) => {
    popupChangeCity.classList.add("mix-visible-scale");
  });
})();
