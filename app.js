const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.faq__swiper_next',
      prevEl: '.faq__swiper_prev',
    },
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        996: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });