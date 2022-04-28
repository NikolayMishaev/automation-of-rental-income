// логика изменения названия кнопки в блоке "Предпочтительная площадь"

const inputsSquare = document.querySelectorAll(".prof-general__input");
const buttonSubmitSquare = document.querySelector(".prof-general__submit-btn");

inputsSquare.forEach((i) => {
    if (i.value > 0) {
        inputsSquare.forEach((i) => (i.disabled = true));
        buttonSubmitSquare.textContent = "Изменить";
    }
});

buttonSubmitSquare.addEventListener("click", (e) => {
    if (inputsSquare[0].disabled) {
        inputsSquare.forEach((i) => (i.disabled = false));
    } else {
        e.target.closest("form").submit();
    }
});
