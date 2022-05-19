const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');

const mySwiper = new Swiper(slider, {
   slidesPerView: 3,
   spaceBetween: 10,
   pagination: {
      el: '.pag-1',
      type: 'bullets',
      clickable: true,
    },
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 });

 const mySwiper1 = new Swiper(slider1, {
   slidesPerView: 3,
   spaceBetween: 10,
   pagination: {
      el: '.pag-2',
      type: 'bullets',
      clickable: true,
    },
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 });