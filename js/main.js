const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener('click', function () {
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom__mobile--hidden');
});
