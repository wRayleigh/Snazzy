document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card.click-flip");

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();
            card.classList.toggle("flipped");
        });
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    }, { threshold: 0.5 });

    observer.observe(video);
  });
