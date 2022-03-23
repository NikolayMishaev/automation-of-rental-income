import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
// import Swiper styles
const swiper = new Swiper(".mainSwiper", {
  loop: false,
  spaceBetween: 16,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".slider__next-btn_track",
    prevEl: ".slider__prev-btn_track",
  },
});
const swiper2 = new Swiper(".track-swiper", {
  loop: false,
  autoHeight: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider__next-btn",
    prevEl: ".slider__prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: swiper,
  },
});
