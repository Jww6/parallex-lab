const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function () {
  cards.forEach(function (card) {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});