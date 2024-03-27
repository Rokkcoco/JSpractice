// this
// this — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода.
// В объекте, this указывает на текущий объект, в котором вызывается метод.
// Тебе нужно запомнить фразу “this это объект перед точкой в момент вызова метода”


// this имеет различные значения в зависимости от того, где используется:

// 1) Сама по себе - this используется вне объектов, он будет ссылаться на глобальный объект в контексте выполнения скрипта, 
// то есть в браузере это объект window, а в среде выполнения на сервере Node.js это объект global.
// В браузере:
console.log(this); // выведет глобальный объект window

// В Node.js:
console.log(this); // выведет глобальный объект global

// 2) В методе - this относится к родительскому объекту.
// В стрелочной функции - this относится к контексту где функция была создана.
//this - window
const man = {
    name: 'Alex',
    age: 25,
    sayHi() {
        //this {name:Alex, age:25}
        console.log(this.name)
    },
    sayHello:() => {
        console.log(this.name)
    }
};
console.log(this)

const man2 = {
    name: "Lesha"
}
man2.sayHi = man.sayHi
man2.sayHi()
//this man2 {name:"Lesha}


//function declaration
//arrow function
//this.name
man.sayHi(); // Alex
man.sayHello() //привязка к window

// this определяется в момент вызова функции

const greet = man.sayHi
window.greet() // Привет, меня зовут ""
//window.greet()

// 3) В функции - this относится к глобальному объекту.
function logThis() {
    //this {}
    console.log(this);
}

window.logThis(); // выведет глобальный объект window
const b = new logThis()


function Const(name, age) {
    //{this }
    this.age = age
    this.name= name
    //return this
}
//1 let exmp = new Const("ye" , 15) свой this
//exmp.age

//2 window.Const() this = window, no age

// То же — если функция объявлена внутри функции:
function whatsThis() {
    return function() {
        console.log(this === window)
    }
}

let res1 = whatsThis()
    window.res1()
// true

// 4) В функции в 'strict mode' - this = undefined.
'use strict';

function logThis() {
    console.log(this);
}

logThis(); // выведет undefined


// 6) В событии - this ссылается на элемент запустивший событие.
/* <button id="myButton">Кнопка</button>

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  console.log(this); // выведет HTML-элемент кнопки
}); */




const person = {
    name: 'Alex',
    age: 25,
};

function sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
}

person.sayHi = sayHi;

person.sayHi();


// this и стрелочная функция
// У стрелочных функций собственного контекста выполнения нет. Они связываются с ближайшим по иерархии контекстом, в котором они 
// определены.
function greetWaitAndAgain() {
    console.log(`Hello, ${this.name}!`)
    setTimeout(() => {
        console.log(`Hello again, ${this.name}!`)
    })
}

const user = {name: 'Alex'}

user.greetWaitAndAgain = greetWaitAndAgain;
user.greetWaitAndAgain()

// При использовании обычной функции внутри контекст бы потерялся, и чтобы добиться того же результата, нам бы пришлось 
// использовать call(), apply() или bind().

const obj = {
    myProperty: 42,
    myMethod: () => {
        console.log(this.myProperty);
    }
}
obj.myMethod();

// Выводит “undefined” давай разберемся почему.
// Когда мы используем обычную функцию в JavaScript, значение this зависит от контекста вызова, т.е. от объекта перед точкой в 
// момент вызова. Но в случае со стрелочными функциями значение this не зависит от контекста вызова, а берется из контекста, в 
// котором была объявлена функция. 
const obj = {
    myProperty: 42,
    myMethod: () => this.myProperty,
    myMethod2: function () {


        const fn = () => this.myProperty;
        return fn()
    }
}
console.log(obj.myMethod());
console.log(obj.myMethod2());


// call, bind и apply
// call , bind и apply являются методами, доступными для всех функций в JavaScript. Они используются для управления значением this
// внутри функций.
// На стрелочную функцию call, bind и apply не влияют!

// Метод call вызывает функцию и устанавливает значение this для этой функции в первый аргумент, переданный методу call .
// Последующие аргументы передаются как аргументы вызываемой функции:
function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};
greet('Hello');
greet.call(person, 'Hello');

// Метод apply аналогичен методу call , за исключением того, что аргументы
// вызываемой функции передаются в виде массива:
function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};

greet.apply(person, ['Hello']); // Hello, my name is Pavel

// Метод bind также устанавливает значение this для функции, но возвращает
// новую функцию с установленным значением this , которую можно вызывать
// позже:
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};

let greetPerson = greet.bind(person);
greetPerson();

// В общем, методы call , bind и apply позволяют управлять значением this в функциях и сделать их более гибкими и 
// переиспользуемыми.


// Задачи


let mann = {
    name: "Elena",
    sayHi() {
        const sayName = () => {
            console.log(this.name)
        }
        return sayName
    }
}

let newman = mann.sayHi()
newman()


//Events

let man = {
    name: "John",
    click() {
        document.querySelector("button.ok")
            .addEventListener("click", this.sayHi)
    },
    sayHi() {
        console.log(this.name)
    }
}
//контекст какой функции this.sayHi
//чему будет равен this.name


let man1 = {
    name: "John",
    click() {
        document.querySelector("button.ok")
            .addEventListener("click", function () {
                console.log(this.name)
            })
    }
}
//контекст какой функции this.name
//чему будет равен this.name

//разобрать, будет выводить this от man2, т.к. повесим слушателя через man2.click и this будет man2, а стрелочная функция возьмет его контекст
let man2 = {
    name: "John",
    click() {
        document.querySelector("button.ok")
            .addEventListener("click", () => {
                console.log(this.name)
            })
    }
}


let set = {
    name: "John",
    click() {
        //this {set: name John}
        setTimeout(() => console.log(this.name), 1000)
    }
}
set.click()




let set1 = {
    name: "John",
    click() {
        //this set1, this window
        setTimeout(() => console.log(this.age), 1000)
    }
}
let sett = set1.click //ссылка
set1.click() //this set1.
    window.sett() //вызов this window name = "" undefined








document.querySelector("button.ok").addEventListener("click", set1.click)
//this button.click = this




let set2 = {
    name: "John",
    click() {
        //this button
        window.setTimeout(function () {
            //this
            //window.fun this window
            console.log(this)
        }, 1000)
    }
}
document.querySelector("button.ok").addEventListener("click", set2.click)


//button.click this button



//this window
let set3 = {
    name: "John",
    click: () =>  {
        //this button
        window.setTimeout(() => {
            console.log(this)
            //button
        }, 1000)
    },
    click2() {

    }
}
document.querySelector("button.ok").addEventListener("click", set3.click)


//button.click




let set4 = {
    name: "John",
    click() {
        //this = {}, click() => this = props. => this = {props}
        console.log(this) //this = props
        window.setTimeout(() => {
            console.log(this) // this = props
        }, 1000)
    }
}

function User(props) {
    props.click()
    //no john
}

User({click: set4.click})//ссылка
//









let set5 = {
    name: "John",
    click() {
        let that = this
        console.log(this)
        window.setTimeout(() => {
            console.log(this)
            console.log(that)
        }, 1000)
    }
}


function User1(props) {
    props.click()
}

User1({click: set4.click})











function globalFunc() {
    console.log(this);
}

const globalArrowFunc = () => {
    console.log(this);
}
//this - window


console.log(this); // window

window.globalFunc(); //window

globalArrowFunc();


function Users(name, age) {
    //this {}
    this.name = name
    this.age = age
    return this
}

let b = new Users("john")
let c = new Users("relax")


// Задачи
// 1
//Выведет объект Б, как обычный this через function declaration
// var a = {}
// var b = {name: 'H'}
//
// function logFn() {
//     console.log(this)
// }
//
// a.fn = logFn
// b.fn = a.fn
//
// b.fn()

// 2
//this - window
const user = {
    name: 'Bob',
    userThis: this,
    func() { //declaration
        //this - ???
        console.log(this);
    },
    arrowFunc: () => { //arrow
        //this - window
        console.log(this);
    }
};

console.log(user.userThis); // window
user.func(); // user
user.arrowFunc(); // window


// 3 
const user = {
    name: 'Bob',
    funcFunc() {
        //user
        return function () {
            //window
            console.log(this);
        }
    },
    funcArrow() {
        //user this
        return () => {
            //user
            console.log(this);
        }
    },
    arrowFunc: () => {
        //window this1
        return function () {
            //window this2
            console.log(this);
        }
    },
    arrowArrow: () => {
        //window this=window
        return () => {
            //window
            console.log(this);
        }
    },
};
user.funcFunc()(); //
let a = user.funcFunc()
window.a()
user.funcArrow()(); //
user.arrowFunc()(); // ?
let cc = user.arrowFunc()
window.cc()
user.arrowArrow()(); // ?


// 4
// Объект user остался без изменений
const user = {
    name: 'Bob',
    funcFunc() {
        //user
        return function () {
            //user2
            console.log(this);
        }
    },
    funcArrow() {
        //user
        return () => {
            //
            console.log(this);
        }
    },
    arrowFunc: () => {
        //this - window
        return function () {
            //this who ?
            console.log(this);
        }
    },
    arrowArrow: () => {
        //window
        return () => {
            //window
            console.log(this);
        }
    },
};

const user2 = {
    name: 'Jim',
    funcFunc: user.funcFunc(), //this = user
    funcArrow: user.funcArrow(),//this = user, 2nd -
    arrowFunc: user.arrowFunc(), //this - window
    arrowArrow: user.arrowArrow() //window
}

user2.funcFunc(); // this ? declaration. user2 = this
user2.funcArrow(); // ? window? user
user2.arrowFunc(); // this - user2
user2.arrowArrow(); // window window


// 5

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

// 6
let f = function () {
    this.x = 5;

    (function () {
        this.x = 3;
    })();
    console.log(this.x);
};

let obj = {
    x: 4,
    m: function () {
        //this {}
        console.log(this.x);
    }
};


f(); //3 обе фукнции будут ссылаться на window
new f(); //5
//5, т.к. в самовызывающих функция ссылается на window


obj.m(); //4
new obj.m(); //undefined, т.к. внутри функции нет x, this.x итог undefined
f.call(f); //5, тк самовызывающаяся функция ссылается на window
obj.m.call(f); //5

//если бы вызывали отдельно obj.m.call(f), то было бы undefined, тк в примере выше, у нас f.call(f) сформировал объект f.x c 5, к которому мы потом можем обратиться
//а если вызывать отдельно, то f.x у нас нет

// Каким будет результат?
