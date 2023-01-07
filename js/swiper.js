// 음원리스트 페이지 스와이퍼
$(function () {
  var swiper = new Swiper(".upload_list_swiper", {
    slidesPerView: 1.8,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      799: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 18,
      },
    },
  });
});
