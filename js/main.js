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
  const regExpEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const regExpName = /^([А-Я]{1}[а-яё]{2,23}|[A-Z]{1}[a-z]{2,23})$/;
  let form = document.querySelector('.modal__form');
  let isValidate = false;
  const submit = () => {
    alert('Данные отправлены!');
  };

  const validateForm = function (key) {
    if (key.name == 'name') {
      if (!regExpName.test(key.value) || key.value == '') {
        isValidate = false;
        key.nextElementSibling.textContent = 'Введите корректное имя!';
      } else {
        isValidate = true;
        key.nextElementSibling.textContent = '';
      }
    }

    if (key.name == 'email') {
      if (!regExpEmail.test(key.value) || key.value == '') {
        isValidate = false;
        key.nextElementSibling.textContent = 'Введите корректный Email!';
      } else {
        isValidate = true;
        key.nextElementSibling.textContent = '';
      }
    }

    if (key.name == 'phone') {
      if (!regExpPhone.test(key.value) || key.value == '') {
        isValidate = false;
        key.nextElementSibling.textContent = 'Введите корректный номер!';
      } else {
        isValidate = true;
        key.nextElementSibling.textContent = '';
      }
    }
  };

  for (let key of form.elements) {
    if (key.tagName != 'BUTTON') {
      key.addEventListener('blur', () => {
        validateForm(key);
      });
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    for (let key of form.elements) {
      if (key.value == '' && key.tagName != 'BUTTON') {
        isValidate = false;
        key.nextElementSibling.textContent = 'Данное поле не заполнено!';
      } else {
        isValidate = true;
        key.nextElementSibling.textContent = '';
      }
    }
    if (isValidate) {
      submit();
      form.reset();
    } else {
      alert('Заполните все поля!');
    }
  });
  AOS.init();
});
