$(document).ready(function () {
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

  let menuButton = document.querySelector('.menu-btn');
  menuButton.addEventListener('click', function () {
    document
      .querySelector('.navbar-bottom')
      .classList.toggle('navbar-bottom__mobile--hidden');
  });

  let modalButton = $('[data-toggle=modal]');
  let closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  let modalOverLay = $('.modal__overlay');
  let modalDialog = $('.modal__dialog');
  function openModal(event) {
    event.preventDefault();
    $('body').css('overflow', 'hidden');

    modalOverLay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    $('body').css('overflow', 'visible');
    modalOverLay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('body').css('overflow', 'visible');
      modalOverLay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  $('.modal__overlay').click(function (e) {
    if ($(e.target).closest('.modal__dialog').length == 0) {
      $('body').css('overflow', 'visible');
      modalOverLay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
});
