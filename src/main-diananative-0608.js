// __proto__ и prototype
// __proto__ и prototype - это всё свойства объекта. 
// Любой объект в javaScript имеет свойство __proto__ Но свойство prototype имеют только функции 
// конструкторы или классы.

// Каждое свойство __proto__ ссылается на prototype класса с помощью которого был создан объект.



let str = 'я строка';
let str1 = new String('я строка')
let numb = 5;

numb.hasOwnProperty(5)


console.log(str.__proto__ === String.prototype); // true
console.log(numb.__proto__ === Number.prototype)

// __proto__ хранит в себе свойства и методы prototype именно поэтому мы можем использовать методы и
// свойства на объекте даже если он их не имеет.

let str2 = 'я строка'.toLocaleUpperCase(); 
console.log(str2); // Я СТРОКА

//Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа.
// В программировании такой механизм называется «прототипным наследованием». Многие интересные возможности языка и техники программирования основываются на нём.


//new Array map

let arr = []
console.dir(arr)


//prototype
function Users(name, age) {
    this.age = age
    this.name = name
    this.sayHi = function (){
        console.log(this.name)
    }
}

Users.prototype.sayYourName = function (){
    console.log(this.name)
}

Users.prototype.kids = []

let john = new Users('John', 22)
let mark = new Users('Mark', 32)
mark.sayHi()
mark.sayYourName()

mark.kids.push('Adam')

console.log(john.__proto__ === mark.__proto__ === Users.prototype)

// Так же если мы создадим свой класс и с помощью него сделаем экземпляр, то __proto__ этого 
// экземпляра будет ссылаться на prototype нашего класса.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userSay() {
        return `Я ${this.name} и мой возраст ${this.age}`
    }
    sayHi = () => {
        console.log(this.name)
    }
}

let ivan = new User('Иван', 45); // сделаем нашего ивана

let hi = ivan.sayHi
let say = ivan.userSay
window.hi()

//<button onClick={hi}/>
//button.hi()

//<button onClick={say}/>
//button.say}/>()
//window.say}/>()

console.log(ivan.userSay()); // Я Иван и мой возраст 45. Все работает.
// теперь проверим чему равен __proto__ ивана
console.log(ivan.__proto__ === User.prototype); // true
// в тоже время наш класс по сути функция поэтому
console.log(User.__proto__ === Function.prototype); // true

// __proto__
// Есть у всех, поэтому классы и функции имеющие prototype тоже имеют __proto__

console.dir(String.prototype.__proto__); // Object
// Прототип любой строки ссылается на объект, так как все в js объекты. Это будет касаться любого типа данных.
console.log(Function.prototype.__proto__); // Object
console.log(Array.prototype.__proto__); // Object
// у всех них прото ссылается на  Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// в свою очередь __proto__ объекта ссылается на null - это конечная станция.
console.dir(Object.prototype.__proto__); // null



// Немного про наследовательность и цепочку прототипов
let str3 = 'hi'; // у нас есть строка.

Object.prototype.fun = function name(params) { // в Object.prototype мы добавили свою функцию.
    return params.toLocaleUpperCase(); // просто делаем капс.
};

console.log(str3.fun('hi')); // используем ее на строке и она работает выдовая нам HI

// __proto__ нашей str ссылается на String.prototype которого __proto__ в свою очередь ссылается на 
// Object.prototype. Когда js не находит свойство или метод в __proto__ он указывает на следующий 
// __proto__ по цепочке. Это называется цепочка прототипов.

// Помним что разные __proto__ разных по типу объектов  - совершенно независимые разные объекты.
// У одинаковых по типу объектов всегда один и тот же объект __proto__ ( они равны)

const man1 = {}; //new Object
const man2 = {}; //new Object


console.log(man1.__proto__ === man2.__proto__ ); //true у них __proto__ один и тот же, какой то 3 объект


const arr1 = [];
const arr2 = [];

console.log(arr1.__proto__ === arr2.__proto__); // true у них __proto__  так же равны 

let age = 19;
let num = 100;

console.log(age.__proto__ === num.__proto__); // true

// проверим теперь массив и число
console.log(arr1.__proto__ === num.__proto__); // false  у них разные типы объекта


// и так далее
let str4 = '111';
console.log(str4.__proto__ === age.__proto__); // false


// Подробнее о свойстве prototype
// У любого объекта есть __proto__ но prototype есть только у функции конструктор и класса. __proto__ 
// позволяет перемещаться по цепочке прототипов. А prototype это свойство функции которое позволяет
// добавлять что-то в конструктор. Например выше я уже добавлял в Object.prototype свою функцию.
// prototype будет так же и у простых функций, внутри функций всегда есть конструктор, даже если мы не
// используем его. prototype ссылается на конструктор!

// Это все встроенный классы, они все имеют прототип
Object.prototype;
Promise.prototype;
Function.prototype;
Boolean.prototype;
Number.prototype;
String.prototype;
Array.prototype;

// Каждый prototype - это независимый объект, с определенным набором свойств и методов так как 
// prototype это всегда независимый объект, они сами по себе, поэтому они не равны между собой

console.log(Array.prototype === Object.prototype); // false и тд

//Примитивы
let a = new Number(2)
console.dir(a)

// __proto__ ссылается на prototype класса с помощью которого был создан объект. Когда мы создали 
// массив то его __proto__ будет равно Array.prototype потому что __proto__ ссылается на этот 
// прототип. __proto__ есть у любого объекта, а prototype у class либо function. Так же и __proto__
// есть у функций и классов это свойство есть У ВСЕХ!

// Немного примеров.
console.log(Object.__proto__ === Function.prototype)

console.log(Array.__proto__ === Function.prototype)

console.log(Promise.__proto__ === Function.prototype)

console.dir(Function.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);

console.log(Array.prototype.__proto__ === Object.prototype)

console.dir(Function.__proto__ === Function.prototype);

//Примеры
//1
class Samurai {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log(this.name)
    }
}

const shogun = new Samurai("Dimych")

console.dir(shogun.__proto__.__proto__)
console.dir(shogun.__proto__.constructor.__proto__)
console.dir(shogun.__proto__.__proto__.__proto__)


//2
class Samurai {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log(this.name)
    }
}

class Shoguns extends Samurai {
    constructor() {
        super();
        // Конструктор класса shogun
    }
}


const myShogun = new Shoguns();
console.dir(myShogun.__proto__)
console.dir(myShogun.__proto__.__proto__.constructor.__proto__ )
console.dir(myShogun.__proto__.__proto__.__proto__ )
console.dir(myShogun.__proto__.__proto__.__proto__.__proto__ )

//у кого нет прото?
//Object.create(null) - объект без прото
//Object.create({}) - объекто с пустым объектом в качестве прото
//Object.create(Object.prototype) - создание объекта как мы создаем обычный объект через его литерал {}


//Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
//В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом,
// либо null.
//Объект, на который ссылается [[Prototype]], называется «прототипом».

//animal.prototype
//class , function declaration
let animal = {
    eats: true,
    walk() {

    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
};
console.dir(rabbit)
rabbit.walk();

//Задача
//1
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log(rabbit.jumps);

//2
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

//for in проходит по наследованным ключам
//hasOwnProperty

//С точки зрения производительности, для современных движков неважно, откуда берётся свойство – из объекта или из прототипа.
// Они запоминают, где было найдено свойство, и повторно используют его в следующем запросе.


//Современный подход на получение/установку прототипов
//Object.getPrototypeOf/Object.setPrototypeOf

//Примеры с freecodecamp
// Array.prototype.myFilter = function (callback) { //Метод фильтр через функцию
//     const newArray = [];
//     // Only change code below this line
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this) == true) {
//             newArray.push(this[i])
//         }
//     }
//     // Only change code above this line
//     return newArray;
// };

//    Array.prototype.myMap = function(callback) { //Метод map через функцию
//        const newArray = [];
//        for (let i = 0; i < this.length; i++) {
//            newArray.push(callback(this[i], i, this));
//        }
//        return newArray;
//    };

// ? БУДЕМ СМОТРЕТЬ ПРИМЕРЫ НАСЛЕДОВАНИЯ ?
// ? БУДЕМ СМОТРЕТЬ ПРИМЕРЫ НАСЛЕДОВАНИЯ ?
// ? БУДЕМ СМОТРЕТЬ ПРИМЕРЫ НАСЛЕДОВАНИЯ ?



