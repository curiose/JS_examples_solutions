const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
   // количество показываемых слайдов
   slidesPerView: 1,

   // отсутп лучше завадать в js, для того, чтобы слайдер лучше понимал и подстроился
   spaceBetween: 10,

   // зациклинность
   loop: true,

   autoplay: {
      delay: 2000,
   },

   // эффект переключения слайдов
   effect: 'fade',
 });