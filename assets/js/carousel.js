document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carouselExampleFade');
    const prevButton = document.getElementById('prevButton');

    // Hide the previous button on the first slide
    if (carousel) {
      const bsCarousel = new bootstrap.Carousel(carousel);
      if (bsCarousel.getActiveIndex() === 0) {
        prevButton.classList.add('hide-prev');
      }

      // Show the previous button when leaving the first slide
      carousel.addEventListener('slid.bs.carousel', (event) => {
        if (event.from === 0) {
          prevButton.classList.remove('hide-prev');
        } else if (event.to === 0) {
          prevButton.classList.add('hide-prev');
        }
      });
    }
  });