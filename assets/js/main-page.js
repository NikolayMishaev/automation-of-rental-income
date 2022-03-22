const headerCity = document.querySelector(".header__city");
const modalWidow = document.querySelector(".modal");

headerCity.addEventListener("click", (e) => {
    modalWidow.style.opacity = "1";
});

modalWidow.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) modalWidow.style.opacity = "0";
});
