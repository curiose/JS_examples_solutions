const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
   const mySwiper = new Swiper(el, {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
         el: el.querySelector('.swiper-pagination'),
         type: 'bullets',
         clickable: true,
       },
      loop: true,
      navigation: {
         nextEl: el.querySelector('.swiper-button-next'),
         prevEl: el.querySelector('.swiper-button-prev'),
       },
    });
});

