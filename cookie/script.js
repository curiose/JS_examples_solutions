const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.ok');

okEl.addEventListener('click', () => {
   cookieEl.style.display = 'none';
})

let cookies = () => {
   if (!Cookies.get('hide-cookie')) { // обращаемся к плагину и подтверждаем, что куки нет
      setTimeout(() => { // если куки не существует, то мы показываем элемент 
         cookieEl.style.display = 'block';
      }, 1000);
   }

   Cookies.set('hide-cookie', true, { //устанавливаем куку
      expires: 30, // срок действия куки 
   });
}

cookies();