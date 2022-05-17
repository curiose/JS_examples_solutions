const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
   el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((e) => {
         el.classList.remove('modal--visible');
      });
      
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');

      
   });
});

// закрытие

modalOverlay.addEventListener('click', (e) => {

   // чтобы закрытие было только по клику на overlay, а не на сами окна
   if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
      el.classList.remove('modal--visible');
   });
   }
  
});