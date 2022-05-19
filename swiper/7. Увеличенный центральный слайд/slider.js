const slider = document.querySelector('.swiper-container');

const swiper = new Swiper(slider, {
   // количество показываемых слайдов
   slidesPerView: 3,

   // отсутп лучше завадать в js, для того, чтобы слайдер лучше понимал и подстроился
   spaceBetween: 30,

   // установка и тип пагинации
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      // позволяет переключать нажатием на точки
      clickable: true,
    },

   // позволяет перейти к слудющему слайду по клику мыши. не работает вместе с swiper-no-swiping в html
   // slideToClickedSlide: true,
   // увеличивает центральный слайд
   centeredSlides: true,

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
 });