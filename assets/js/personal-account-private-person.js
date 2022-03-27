(function () {
    // логика переключения табов: "Документы" "Избранные объекты" "О себе"
    const tabButtons = document.querySelectorAll(".prof-general__button");

    const generalContentDocuments = document.querySelector("#documents");
    const generalContentFavourites = document.querySelector("#favourites");
    const generalContentAboutMe = document.querySelector("#about-me");

    const arrayGeneralContent = [
        generalContentDocuments,
        generalContentFavourites,
        generalContentAboutMe,
    ];

    tabButtons.forEach((i) =>
        i.addEventListener("click", () => {
            if (i.closest(".prof-general__button_active")) {
                return;
            }
            tabButtons.forEach((j) =>
                deleteActiveClass(j, "prof-general__button_active")
            );
            i.classList.add("prof-general__button_active");
            arrayGeneralContent.forEach((c) => {
                console.log(i.ariaLabel);
                if (c.ariaLabel === i.ariaLabel) {
                    c.classList.remove("mix-display-none");
                } else {
                    c.classList.add("mix-display-none");
                }
            });
        })
    );
    function deleteActiveClass(element, className) {
        element.classList.remove(className);
    }
})();
