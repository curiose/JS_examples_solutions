// inputMask
// надоходим все инпуты с типом теелфон на странице
let inputs = document.querySelectorAll('input[type="tel"]');

// создаем копию объекта, куда передаем маску
let im = new Inputmask('+7 (999) 999-99-99');

//создаем метод, куда передаем переменную inputs, то есть передаем всем инпутам с типом tel маску
im.mask(inputs);



//validate
// принимает селектор формы (просто строка) и правила, по которым происходит валидация
function validateForms(selector, rules) {
   new window.JustValidate(selector, {
      rules: rules,
      // form - текущая форма, в которой происходит событие
      submitHandler: function(form, values, ajax) {
         console.log(form);

         // собираем данные для отправки
         // создаем экземпляр объекта и передаем туда селектор
         let formData = new FormData(form);

         fetch("mail.php", {
            method: "POST",
            body: formData
         })
         .then(function (data) {
            console.log(data);
            console.log('Отправлено');
            form.reset();
         });
      }
   });
};

// передали селектор формы и обязательные правила
validateForms('.form', { email: { required: true, email: true }, fio: { required: true}, tel: { required: true} });