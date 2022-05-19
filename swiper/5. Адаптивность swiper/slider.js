const slider = document.querySelector('.swiper-container');

const swiper = new Swiper(slider, {
   // количество показываемых слайдов. В адаптивности работает принцип mobilefirst, поэтому по умолчанию 1
   slidesPerView: 1,

   // отсутп лучше завадать в js, для того, чтобы слайдер лучше понимал и подстроился
   spaceBetween: 10,

   // установка и тип пагинации
   // pagination: {
   //    el: '.swiper-pagination',
   //    type: 'fraction',
   //    // позволяет переключать нажатием на точки
   //    clickable: true,
   // },

   // автоматическая прокрутка
   autoplay: {
      delay: 2000,
   },

   // позволяет перейти к слудющему слайду по клику мыши. не работает вместе с swiper-no-swiping в html
   // slideToClickedSlide: true,
   // зациклинность
   loop: true,

   //ставит главный слайд active в центр
   // centeredSlides: true,
   // переключение не по одному слайду, а нескольким
   // slidesPerGroup: 2,

   // кнопки-стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   // тут начинаются параметры для адаптивности
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 10,
      },
   }
 });