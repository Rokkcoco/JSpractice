// Вспомним: 
// Какой статус имеет промис при создании? Какой в случае успешного выполнения? А какой в случае, когда промис отклонен?
// В какой блок попадает промис в случае успешного выполнения? И в какой попадет, если отклонен? 


// Стаческие методы класса Promise: all, race, any, allSettled

// all
// Promise.all([] - принимает массив в качестве аргумента) : возвращает новый promise, который ожидает завершения всех промисов в передаваемом массиве. 
// Если любой из промисов завершается с ошибкой, возвращаемый promise тоже завершается с ошибкой.
// Полезно, когда нам нужно дождаться результата нескольких промисов.

const promiseAll = new Promise(resolve => setTimeout(()=>resolve(1), 2000));
const promiseAll2 = new Promise((resolve, reject) => setTimeout(()=>resolve(2), 1000));
const promiseAll3 = new Promise(resolve => setTimeout(()=>resolve(3), 3000));
const resultAll = Promise.all([promiseAll,promiseAll2,promiseAll3]);
resultAll.then(data => console.log(data[0])).catch(err => console.log("error", err))

// race
// Promise.race([] - принимает массив в качестве аргумента) : возвращает новый promise, который ожидает завершения любого 
// промиса в передаваемом массиве.
// Возвращаемый promise разрешается или отклоняется в соответствии с результатом первого завершенного промиса.
// // Коротко! Кто быстрее получит статус fulfilled / rejected, результат того и вернется. 

const promiseRace = new Promise(resolve => setTimeout(()=>resolve(1), 2000));
const promiseRace2 = new Promise(resolve => setTimeout(()=>resolve(2), 1000));
const promiseRace3 = new Promise((resolve, reject) => setTimeout(()=>reject(3), 3000));
const resultRace = Promise.race([promiseRace,promiseRace2,promiseRace3]);
resultRace.then(data => console.log(data)).catch(err => console.log("Error", err)); // 2

// allSettled
// Promise.allSettled([] - принимает массив в качестве аргумента): принимает массив промисов и возвращает новый промис, который разрешается, когда все промисы в 
// массиве завершены, независимо от их состояния (разрешен или отклонен). Возвращает промис с результатом в виде массива 
// объектов. Каждый объект результата имеет два свойства: state , который может иметь значения "fulfilled" , если
// соответствующий промис разрешен, или "rejected" , если он отклонен. value , который содержит результат разрешенного 
// промиса или причину отклоненного промиса.

const promisesAllSettled = [
    Promise.reject('Promise 1 resolved'),
    Promise.reject('Promise 2 rejected'),
    Promise.reject('Promise 3 resolved')
    ];
    
    Promise.allSettled(promisesAllSettled)
    .then(results => {
    console.log(results);
    });
    

// Promise.any([] - принимает массив в качестве аргумента) возвращает новый Promise, который ожидает завершения любого 
// промиса в передаваемом массиве.
// Возвращаемый Promise разрешается с результатом первого успешного промиса со статусом "fullfiled". Если все промисы в массиве отклонены,
// возвращаемый Promise отклоняется с ошибкой, содержащей массив отклоненных промисов. Короче говоря, Promise.any
// разрешается с результатом самого быстрого промиса в массиве.

const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 5000))
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000))

Promise.any([promise1, promise2])
  .then((result) => {
    console.log(result)
  })

  
Promise.any([
    fetch("https://yahoo.com/?query=js"),
    fetch("https://google.com/?query=js"),
    fetch("https://duckduckgo.com/?query=js"),
  ])
    .then((data) => {
      console.log(data.url);
    })
    .catch((err) => {
      console.log(err);
    });



// async / await
// async/await - это способ написания асинхронного кода в JavaScript. Вместо использования коллбэков или промисов, пишем
// код, который выглядит как обычный синхронный код, но при этом выполняется асинхронно.

// Чтобы использовать async/await, мы объявляем функцию с ключевым словом async. Внутри этой функции можно 
// использовать ключевое слово await перед вызовом асинхронной функции или перед обещанием (промисом), чтобы 
// приостановить выполнение кода до того момента, пока функция или обещание не завершатся.

// Если функция завершается успешно, она возвращает результат. Если функция выбрасывает исключение, оно будет выброшено 
// как обычное исключение.

// Aсинхронные функции — функции, которые возвращают промисы

// const promise = new Promise(resolve => setTimeout(() => resolve(1), 2000));
// promise.then(d => console.log(d))

// async function getData() {
// const data = await new Promise(resolve => setTimeout(() => resolve(1), 2000));
// console.log(data);
// }

// getData();



// async function asyncFunction() {
//     return 1;
// }

// asyncFunction().then(d => console.log(d))
//т.к. async функция создает промис, мы можем на него подписаться then, catch, finally





// В асинхронной функции можно обработать ошибку от промиса new Promise с помощью ключевого слова try/catch .

const promise = new Promise((resolve, reject) => {reject("Error")});
async function asyncFunction() {
    try {
        const data = await promise;
        console.log(data); // если бы не было ошибки, выполнился бы console.log(data)
    }   
    catch (error) {
        console.log(error);// "Error"
    }
}

async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
      //setUser(user)
    } catch(err) {
      // перехватит любую ошибку в блоке try: и в fetch, и в response.json
      alert(err);
    }
  }
  
  f();


  async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() вернёт промис в состоянии rejected
  f().catch(alert); // TypeError: failed to fetch // (*)
    
  //запрос на сервер 
async function serverRequest() {
    const data1 = await fetch("https://yahoo.com/?query=js")
    const data2 = await fetch("https://google.com/?query=js")
    const data3 = await fetch("https://duckduckgo.com/?query=js")
    console.log(data1, data2, data3);
}


//await будет ждать массив с результатами выполнения всех промисов
async function serverRequestWithAll() {
const data = await Promise.all([
    fetch("https://yahoo.com/?query=js"),
    fetch("https://google.com/?query=js"),
    fetch("https://duckduckgo.com/?query=js")
])
console.log(data);
}


//вызов await вне функции
let res1 = await fetch("https://yahoo.com/?query=js")
console.log(res1);


// Код чище и короче. У нас больше нет цепочек из then(), вместо этого мы получаем плоскую структуру, которая по виду 
// похожа на синхронный код.
// Условия и вложенные конструкции становятся чище и проще читаются.
// Мы можем обрабатывать ошибки с try-catch. Как и с синхронным кодом, обработка ошибок сводится к оборачиванию опасных 
// операций в try-catch:

async function loadPosts() {
  try {
    const response = await fetch('/api/posts/')
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

// При этом в отличие от .catch() промисов, try-catch поймает не только ошибки, которые были внутри асинхронных функций, 
// но также и ошибки, которые возникли во время обычных синхронных операций.

// Задания:
// 1.
// Вызовите async–функцию из "обычной"
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

async function wait() {
   await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
    })
    return 10;
}
  
  function f() {
    // покажет 10 через 1 секунду
    wait().then(result => console.log(result));
  }
  
  f();

// 2.
// Напишите 2 функции, которая принимает 2 промиса (оба успешно завершенных).
// Первая возвращает промис с твое имя, твою фамилию через 5 секунд. Вторая 
//дожидается выполнения и выводит в консоль
let datares = Promise.resolve("Ee")
let datares1 = new Promise(resolve => resolve(' ww'))

async function Dz2(pr1, pr2) {
let res1 = await pr1
let res2 = await pr2 

 await new Promise(resolve => setTimeout(resolve,3000))
return res1 + res2
}
async function Dz2Res(pr1, pr2) {
    let res = await Dz2(pr1, pr2)
    console.log(res);
}
Dz2Res(datares, datares1)

// 3.
//Напиши функцию, которая принимает на вход число и возвращает промис,
//который разрешается через указанное количество секунд, и которая
//генерирует ошибку, если входное число меньше 0.

// часть 2 переписать на асинк эвейт

function Dz3(num, seconds) {
    let res = new Promise((res, rej) => {
        setTimeout(() => {
            if (num < 0) {
                rej(new Error('Error'))
            } else res(num)
        }, seconds)
    })
    return res
}
Dz3(6, 1000).then(e => console.log(e)).catch(e => console.log(e))

// 4.
// Напиши функцию sum(numbers) , которая возвращает промис, который
// разрешается (resolve) суммой чисел в массиве, или отклоняется с
// ошибкой, если массив пуст
 function Dz4(numbers) {
    return  new Promise((res, rej) => {
        if(!numbers.length) {
            rej("Массив пуст")
        } else res(numbers.reduce((ac, el) => ac + el, 0))
    })
}

Dz4([1, 2, 3, 4]).then(data => console.log(data), e => console.log(e))







