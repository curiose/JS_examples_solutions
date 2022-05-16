// создается карта и пустой массив функцией init

function init() {
   let arr = [];

   // создание карты, но не понимаю, зачем оно, если карта появляется через скрипт с сайта
   let myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7
   });

   function markers() {

      arr = [];
      let i = 0;

      //пробегаемся по всем эелементам
      document.querySelectorAll('.btn').forEach((el) => {
         // получаем в перменную координаты
         let coords = el.getAttribute('data-coords');

         let id = el.getAttribute('data-id');

         // через split через запятую вносим координаты в массив
         let coordsArr = coords.split(',');

         // так как возвращаются строки, то преобразуем их в числа
         let result = coordsArr.map(function (x) {
            return Number(x);
         });

         // затем все пушится в массив
         arr.push('placemark' + i);
         i++;

         arr[i] = new ymaps.Placemark(result, {
				'id': id,
				// Зададим содержимое заголовка балуна.
				balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
					'<span class="description">Сеть кинотеатров</span>',
				// Зададим содержимое основной части балуна.
				balloonContentBody: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
					'<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
				// Зададим содержимое нижней части балуна.
				balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
				// Зададим содержимое всплывающей подсказки.
				hintContent: 'Рога и копыта'
			});

         //добавляем каждый элемент массива на карту
         myMap.geoObjects.add(arr[i]);

         //удаляем первый элемент, т.к. он равен 0 (в let i = 0)
         delete arr[0];
      });
   }

      markers();

   // проверяем любое движение на карте
   myMap.events.add('boundschange', function () {
      //получаем все объекты которые есть
      let res = ymaps.geoQuery(myMap.geoObjects);

      // проверяем, есть ли элементы внутри карты и добавляем их на карту
      let visibleObjects = res.searchInside(myMap).addToMap(myMap);

      // находим массив
      let visibleArray = visibleObjects._objects;

      let item = document.querySelectorAll('.btn');
   
      // чтобы показать то, что нужно, сначала все элементы нужно скрыть
      $item.forEach((el) => {
         el.closest('li').style.display = 'none';
      });

      for (let i = 0; i < visibleArray.length; i++) {
         let id = visibleArray[i].properties._data.id;

         document.querySelectorAll('.btn[data-id="${id}"').forEach((el) => {
            el.closest('li').style.display = 'block';
         });
      }

      // сюда можно добавить условие, что если длина массива равна 0, то показывать другой длок, что ничего не найдено 
      if (!visibleArray.length) {
         document.querySelector('.notice').style.display = 'block';
      } else {
         document.querySelector('.notice').style.display = 'none';
      }
   });
}

ymaps.ready(init);