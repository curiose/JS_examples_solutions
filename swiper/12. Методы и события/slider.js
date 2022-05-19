const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
   // количество показываемых слайдов
   slidesPerView: 3,

   // отсутп лучше завадать в js, для того, чтобы слайдер лучше понимал и подстроился
   spaceBetween: 10,

   // установка и тип пагинации
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      // позволяет переключать нажатием на точки
      clickable: true,
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
 });

 document.querySelector('.slide-to').addEventListener('click', () => {
   mySwiper.slideTo(2);
 });

 document.querySelector('.destroy').addEventListener('click', () => {
   mySwiper.destroy();
 });

 document.querySelector('.hide').addEventListener('click', () => {
   slider.style.display = 'none';
 });

 document.querySelector('.update').addEventListener('click', () => {
   slider.style.display = 'block';
   mySwiper.update();
 });

 mySwiper.on('transitionEnd', () => {
    console.log('Текущий индекс', + mySwiper.realIndex);
 });