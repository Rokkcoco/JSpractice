

// Promise
// Код в JavaScript выполняется последовательно (в одном потоке, синхронно).
// То есть таким образом, когда каждая следующая операция ждёт завершения предыдущей.

// Асинхронный код в JavaScript может быть написан разными способами: с помощью обратных вызовов, promise (обещаний)
// и ключевых слов async/await.


// Callback hell
//  Есть ряд асинхронных задач, которые зависят друг от друга, т.е первая задача запускает по завершении
//  вторую, вторая - третью и т.д.
//  И мы получаем "башню" из обратных вызовов.
//  Решают эту проблему Promise (промисы).
// Callback hell (ад коллбэков):

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
            console.log(4);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);


// Промисы. Для чего нужны?
// Промис - объект, обещание предоставить результат позже.
// Пример: отправив запрос на сервер, не знаем ответит или не ответит или ответит ошибкой, какие данные пришлет, не знаем,
// какой будет результат запроса, но с помощью промиса мы можем поставить на ожидание получение результата и когда мы его
// получаем, то можем его обрабатывать.
// Промисы позволяют обрабатывать асинхронные операции (отложенные во времени события).


// Как создать промис? Функция-конструктор
const myPromise = new Promise((resolve, reject) => { 
    // выполнение асинхронных действий 
    // внутри этой функции нужно в результате вызвать одну из функций resolve() или reject()
});

function makeServerRequest() {
  return new Promise((resolve, reject) => {
    // Симуляция асинхронного запроса к серверу
    setTimeout(() => {
      const response = {
        status: 200,
        data: 'Response data from the server'
      };

      if (response.status === 200) {
        resolve(response.data);
      } else {
        reject('Server request failed');
      }
    }, 2000);
  });
}

function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
  
        if (randomNumber > 0.5) {
          resolve(`Random number ${randomNumber} is greater than 0.5`);
        } else {
          reject(`Random number ${randomNumber} is less than or equal to 0.5`);
        }
      }, 2000);
    });
  }
  
  // Использование промиса
  delayedPromise()

  
    .then(result => {
      console.log("Resolve:", result);
    })
    .catch(error => {
      console.log("Reject:", error);
    });

    

// Что возвращает промис?
// Промис может вернуть либо результат, либо ошибку.
// console.log(typeof Promise.resolve()); // object

// Какие есть свойства у promise объекта?
// state (состояние): когда промис создается у него будет состояние pending (ожидание) либо результата либо ошибки.
// Когда промис вернул какой-то результат он считается исполненным - fulfilled (выполнен успешно) при вызове resolve(), 
// либо отклоненным - rejected (выполнен с ошибкой) при вызове reject().
// Первое состояние промиса окончательно и он не изменяет на другое состояние. С fulfilled нельзя изменить на rejected и
// наоборот.

// result (результат): промис в состоянии ожидания имеет результат - undefined, когда промис успешно завершен его 
// результатом является value при вызове resolve(), а если промис выполнился с ошибкой, то его результат - error при 
// вызове reject().

// Какие параметры есть у промиса?
// Промис принимает коллбэк-функцию, которая имеет 2 параметра (resolve и reject- функции).
// И мы внутри этой коллбэк-функции должны вызвать одну из этих 2 функций, чтобы промис завершился либо успехом, либо 
// ошибкой.

// Then, catch, finally
// У объекта созданного через конструктор Promise доступны методы (then, catch, finally).
const promise11 = new Promise((resolve, reject) => {
})
promise11.then(value => {
    // действия в случае успешного исполнения промиса 
    // значением value является значение, переданное в вызове функции resolve внутри промиса
}).catch(error => {
    // действия в случае отклонения промиса 
    // значением error является значение, переданное в вызове функции reject внутри промиса
}).finally(); // ничего не принимает, выполнится в любом случае и ничего не возвращает

// Цепочка промисов. Что это и для чего?
//  Иногда количество асинхронных операций заранее неизвестно, но они должны выполняться строго по очереди.
//  Цепочка промисов это всегда then().then().then()
//  Единственный нюанс - начальный промис, с которого начинается строится цепочка. Если такого промиса нет, то его можно
// создать используя функцию Promise.resolve(). Он возвращает промис, который ничего не делает, но с него можно начинать
// свёртку.

const prpr1 = Promise.resolve("Resolve")
const prpr2 = prpr1.then(data => console.log("yes"))
const prpr3 = prpr2.then(data => console.log("server answer"))


fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name));

//Запрашиваем user.json
// fetch('/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then(response => response.json())
//   // Делаем запрос к GitHub
//   .then(user => fetch(https://api.github.com/users/${user.name}))
//   // Загружаем ответ в формате json
//   .then(response => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//     setTimeout(() => img.remove(), 3000); // (*)
//   });

// Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, последующие элементы цепочки ждут, пока
// этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.

// Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный JSON. Самый лёгкий путь перехватить все
// ошибки – это добавить .catch в конец цепочки:

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(https://api.github.com/users/${user.name}))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//
//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   }))
//   .catch(error => alert(error.message));

// _onResponse(res) { // обрабатываем ответ от сервера
//           return res.ok ? res.json() : Promise.reject({...res, message: 'Ошибка сервера'})
// }

// getAllCats() { // у сервера запрашиваем всех котов
//           return fetch(${this._url}/show, {
//               method: 'GET'
//           }).then(this._onResponse)
// }



// Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису. Но это не цепочка.
// Например:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

/////--------Задачи

//Выводит CBA сначала выводим первый промис, Показывает С, и добавляет колбэк в очередь тасок, затем выводим 2ой колбэк Б, и потом финальный колбэк с А
//const p = new Promise((resolve) => {
// resolve('')
// })
//
// p.then(() => {
//     p.then(() => console.log('A'))
//     console.log("C")
// })
//
// p.then(() => console.log('B'))


const promise6 = Promise.resolve(5)
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

// Что выведет код ниже?

let promise2 = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});
  
promise.then(alert);

//------------

const promise4 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) { 

  console.log(result); 
  return result * 2;

}).then(function(result) { 

  console.log(result); 
  return result * 2;

}).then(function(result) {

  console.log(result); 
  return result * 2;
}).then(function(result) {
    result * 2
    console.log(result);
}).then(function(result) {
  console.log(result);
})

//-------------

Promise.reject("a")
        .catch(p => p + 'b') 
        .catch(p => p + 'c')
        .then(p => p + 'd')
        .finally(p => p + 'e')
        .then(p => console.log(p));

//--------------

const promise7 = Promise.reject("error")
.then(res => {
  console.log(res);
  return res 
})
.catch(err => {
  console.log(err)
  return err
})
.then(res => {
  return res + "" + " request...server"
}).then(res => {
  console.log(res);
})

//------------------

const promise8 = Promise.reject("server error")
.then(res => {
  console.log(res);
  return res 
}, (err) => {
console.log(err)
return err;
})
.catch(err => {
  console.log(err)
  return err + 1
})
.catch(err => {
  console.log(err)
  return err + 2
})
.then(res => {
  console.log(res);
  return res + 3
})
.catch(err => {
  console.log(err)
  throw new Error("new Error!")
})
.catch(err => {
  console.log(err);
  return err + 4
})

//----------------

const promise9 = Promise.reject("server error")
.then(res => {
  console.log(res);
  return res 
})
.catch(err => {
  console.log(err)
  throw new Error("error!!!")
})
.catch(err => {
  console.log(err)
  return err + 2
})
.then(res => {
  console.log(res);
  return res + 3
})
.catch(err => {
  console.log(err)
  throw new Error("new Error!")
})
.catch(err => {
  console.log(err);
  return err + 4
}).finally((res) => {
  return res + " error-error"
}).then((res) => {
  console.log(res);
})

//--------------------

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});

//-----------REDUCE

// Задачи на reduce
// Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 10.
const numbers = [1, 3, 4, 5, 6, 7]

// Задача: с помощью reduce создать объект

const users = [
  {id: "123", name: "Vasiliy", age: 18},
  {id: "345", name: "Anna", age: 22},
  {id: "567", name: "Igor", age: 20},
  {id: "789", name: "Irina", age: 24},
]

// Напиши функцию, которая принимает массив чисел и разделяет массив на две группы:
// четные и нечетные  {even:[], odd:[]} (через reduce)



