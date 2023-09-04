// Браузерное окружение, спецификации

// Объект window - глобальный объект для JS, представляет собой окно браузера и располагает методами для управления им.

// window как глобальный объект
function sayHi() {
    alert("Hello");
  }
  
  // глобальные функции доступны как методы глобального объекта:
  window.sayHi();


// window как объект окна браузера
alert(window.innerHeight); // внутренняя высота окна браузера


// DOM (Document Object Model)
// Объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

// document – основная «входная точка».

// заменим цвет фона на красный,
document.body.style.background = "red";
// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 1000);

// DOM Living Standard на https://dom.spec.whatwg.org

// DOM – не только для браузеров
// Серверные скрипты, которые загружают и обрабатывают HTML-страницы, также могут использовать DOM.
// При этом они могут поддерживать спецификацию не полностью.

// BOM (Browser Object Model)
// Дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

// Объект navigator даёт информацию о самом браузере и операционной системе. 
// navigator.userAgent – информация о текущем браузере,
// navigator.platform – информация о платформе

// Объект location 
alert(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}

// Функции alert/confirm/prompt тоже являются частью BOM: они не относятся к странице, но представляют собой методы 
// объекта окна браузера для коммуникации с пользователем.


// DOM-дерево
// DOM – это представление HTML-документа в виде дерева тегов.

// document.body – объект для тега <body>.

// Если запустить этот код, то <body> станет красным на 3 секунды:

document.body.style.background = 'red'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 3000); // вернуть назад

// Теги являются узлами-элементами (или просто элементами). 
// Они образуют структуру дерева: <html> – это корневой узел, <head> и <body> его дочерние узлы и т.д.
// Текст внутри элементов образует текстовые узлы.


// Автоисправление
// Если браузер сталкивается с некорректно написанным HTML-кодом, он автоматически корректирует его при построении DOM.
// При генерации DOM браузер самостоятельно обрабатывает ошибки в документе, закрывает теги и так далее.

// Важный «особый случай» – работа с таблицами. По стандарту DOM у них должен быть <tbody>, но в HTML их можно написать (официально) без него.
// В этом случае браузер добавляет <tbody> в DOM самостоятельно.

<table id="table"><tr><td>1</td></tr></table>


// Другие типы узлов
// Существует 12 типов узлов. Но на практике мы в основном работаем с 4 из них:

// document – «входная точка» в DOM.
// узлы-элементы – HTML-теги, основные строительные блоки.
// текстовые узлы – содержат текст.
// комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.

// Чтобы посмотреть структуру DOM в реальном времени, попробуйте Live DOM Viewer.
// http://software.hixie.ch/utilities/js/live-dom-viewer/

// У DOM-узлов есть свойства и методы, которые позволяют выбирать любой из элементов, изменять, перемещать их на странице.

// Вот несколько примеров изменения DOM в JavaScript:
// Добавление элемента:
// // Создаем элемент
// let newDiv = document.createElement('div'); 

// // Добавляем в DOM
// document.body.appendChild(newDiv);

// Изменение текста элемента:
// let title = document.querySelector('h1');
// title.textContent = 'Новый заголовок';

// Добавление класса:
// let item = document.getElementById('item');
// item.classList.add('active');

// Удаление элемента:
// let el = document.querySelector('.todo');
// el.remove(); 

// Изменение стилей:
// let box = document.getElementById('box');
// box.style.backgroundColor = 'blue';

// Добавление/удаление обработчика:
// btn.addEventListener('click', handleClick);
// btn.removeEventListener('click', handleClick);

// Добавление/удаление атрибута:
// link.setAttribute('target', '_blank');
// link.removeAttribute('target');



// Навигация по документу
// getElementById — поиск элемента по идентификатору;
// Возвращает Element или null, если ничего не нашлось.


// getElementsByClassName — поиск элементов по названию класса;
// Позволяет найти все элементы с заданным классом или классами среди дочерних.


// getElementsByTagName — поиск элементов по названию тега;
// Возвращает похожую на массив HTMLCollection с найденными элементами. 


// querySelector — поиск первого элемента, подходящего под CSS-селектор;
// Позволяет найти элемент по CSS-селектору среди дочерних. Если элементов несколько, то вернётся
// первый подходящий. Если подходящих элементов нет, то вернёт null.


// querySelectorAll — поиск всех элементов подходящих под CSS-селектор.
// Возвращает похожую на массив статическую коллекцию NodeList с найденными элементами.


// получить все элементы div в документе
// let divs = document.getElementsByTagName('div');

// Ищем элементы с классом .article:
// <form name="my-form">
//   <div class="article">Article</div>
//   <div class="long article">Long article</div>
// </form>

// <script>
//   // ищем по имени атрибута
//   let form = document.getElementsByName('my-form')[0];

//   // ищем по классу внутри form
//   let articles = form.getElementsByClassName('article');
//   alert(articles.length); // 2, находим два элемента с классом article
// </script>

// Живые коллекции
// Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа и автоматически обновляются при его изменении.

// В приведённом ниже примере есть два скрипта.

// Первый создаёт ссылку на коллекцию <div>. На этот момент её длина равна 1.
// Второй скрипт запускается после того, как браузер встречает ещё один <div>, теперь её длина – 2.
// <div>First div</div>

{/* <script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script> */}
// Напротив, querySelectorAll возвращает статическую коллекцию. Это похоже на фиксированный массив элементов.
// Если мы будем использовать его в примере выше, то оба скрипта вернут длину коллекции, равную 1:

{/* <div>First div</div>

<script>
  let divs = document.querySelectorAll('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 1
</script> */}

// Самые верхние элементы дерева доступны как свойства объекта document
// const htmlElement = document.documentElement;
// const headElement = document.head
// const bodyElement = document.body
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);


// Получаем объект body
// const bodyElement = document.body;
// // // Первый и последний дочерние элементы
// const firstChild = bodyElement.firstChild
// const lastChild = bodyElement.lastChild

// console.log(firstChild);
// console.log(lastChild);


// Получаем объект body
const bodyElement = document.body
// Коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyElement.childNodes
console.log(childNodes);

// childNodes не массив, а коллекция - перебираемый объект (псевдомассив)
// Отличия: для перебора коллекции используем for...of, не работают методы массивов, т.к это коллекция

// Перебор коллекции
// for (let node of childNodes) {
//     console.log(node)
// }

// alert - Используется для получения данных от пользователя
// alert("Hello, world!")

// prompt - Используется для получения данных от пользователя
// const name = prompt('Введите ваше имя:');
// alert('Привет, ' + name + '!');

// confirm - Используется для подтверждения/отмены действия
// const response = confirm('Вы уверены?');

// if(response) {
//   alert('Вы подтвердили!');
// } else {
//   alert('Вы отменили');
// }
