var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  keyboard: true,
});
