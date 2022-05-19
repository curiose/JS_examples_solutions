const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
   sliderPerView: 5,
   spaceBetween: 10,
   loopedSlides: 5,

   // освобождает слайды от определенной привязке к ширине и высоте из API
   freeMode: true,
   loop: true,
   direction: 'vertical',
});

let mySwiperMain = new Swiper(slider, {
   spaceBetween: 10,
   loop: true,
   loopedSlides: 5,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // связываем между собой оба слайда
   thumbs: {
      swiper: mySwiperNav,
   },
});