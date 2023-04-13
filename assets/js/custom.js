document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card.click-flip");

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();
            card.classList.toggle("flipped");
        });
    });
});