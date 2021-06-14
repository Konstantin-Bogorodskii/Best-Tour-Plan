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
  function openModal(event) {
    event.preventDefault();
    let modalOverLay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverLay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    let modalOverLay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverLay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  jQuery.extend(jQuery.ui.dialog.prototype.options, {
    open: function (event, ui) {
      let modalDialog = $('.modal__dialog');
      $('.modal__overlay').on('touchstart click', function () {
        $(modalDialog).dialog('close');
      });
    },
  });
});
