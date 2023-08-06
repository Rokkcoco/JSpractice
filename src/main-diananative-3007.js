// Вспомним как создаются объекты

function Person(name, age) {
    this.name = name;
    this.age = age
}

// Что эта функция возвращает?

const person = new Person("Elena", 27)
console.log(person);


// Классы в JS появились в ES6 и являются новым синтаксическим сахаром для ООП.

// Объявление класа

class Person {
    // определяет свойства объекта и инициализирует их при создании нового объекта 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
    }
}

// Для чего нужен constructor?
// Это метод,который вызывается при создании нового объекта на основе класса. Он определяет 
// начальное состояние объекта и устанавливает его свойства.

// При создании нового объекта на основе класса Person с помощью оператора new 
// конструктор вызывается автоматически:

const person2 = new Person("Evgeniy", 35)
console.log(person2);

// методы в JavaScript-классах хранятся в прототипе объекта, а не в самом объекте.
// Person.prototype.sayHello = function() {
//     console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
// }

person.sayHello();

// Геттеры и сеттеры 
// Геттеры и сеттеры — это специальные методы, которые позволяют получать (get) и устанавливать (set) 
// значения свойств объекта.
// Геттеры и сеттеры обычно используются для контроля доступа к свойствам объекта.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
//     setAge(value) {
//         if (value < 0) {
//             console.log("Возраст не может быть отрицательным");
//             return;
//         }
//         this.age = value;
//     }
// }


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get age() {
        return this.age;
    }
    set age(value) {
        if (value < 0) {
            console.log("Возраст не может быть отрицательным");
            return;
        }
        this.age = value;
    }
}

const man = new Person("Pavel", 25);
console.log(man.age); // 25
man.age = 30;
conmansole.log(man.age); // 30
man.age = -10; // Возраст не может быть отрицательным
console.log(man.age); // 30 

// Защищенные. Статические. Приватные

// Статические
// Статические свойства и методы в JavaScript-классах — это свойства и методы, которые принадлежат самому классу, а не
// его экземплярам.
// Статические свойства и методы объявляются с использованием ключевого слова static.

// Какие статические методы вы знаете?

class Person {
    static count = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.count++;
    }
    static getAge() {
        return this.age;
    }
    static getCount() {
        return this.count;
    }
}

const vlad = new Person("Vlad", 23);
const pavel = new Person("Pavel", 25);
console.log(Person.count); // 2
console.log(Person.getAge());
console.log(Person.getCount());

// Защищенные
// В JS защищенные свойства - это свойства объекта, к которым можно получить доступ только из методов
// класса (геттеров и сеттеров) или его наследников.
// Обычно, в классе защищенные свойства начинаются с символа подчеркивания _ .

class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        this._surname = "Ivanov";
    }
    get age() {
        return this_.age;
    }
    set age(value) {
        if (value < 0) {
            console.log("Возраст не может быть отрицательным");
            return;
        }
        this._age = value;
    }
    addSurname() {
        return this._surname;
    }
}

const man2 = new Person("Evgeniy", 35)
console.log(man2._surname);
console.log(man2.addSurname());

// Использование защищенных свойств позволяет скрыть детали реализации класса и обеспечить его 
// безопасность.
// Защищенного свойства на самом деле не существует в стандарте языка.Это просто договоренность между 
// разработчиками, что свойство с нижним подчеркиванием мы не будем менять на прямую, а будем
// использовать геттер и сеттер.

// Приватные
// Свойства, которые начинаются с символа # в JS называются приватными свойствами (private fields). Они были добавлены в 
// стандарт ECMAScript 2019 и позволяют определять свойства, которые могут быть доступны только внутри класса (обращаются
// к ним через this), где они были определены.
// Приватные свойства не могут быть прочитаны или изменены извне класса.

class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getName() {
        this.#sayHi()
    }
    setName(name) {
        this.#name = name;
    }
    #sayHi() {
        console.log(this.#name);
    }
}
const person = new Person("Pavel");
console.log(person.getName()); // "Pavel"
person.setName("Alina");
console.log(person.getName()); // "Alina"
// console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an en
person.getName();

// Итого:
// Защищенные - это договоренность и нужны для get и set.
// Статические - можем “достучаться” через класс, а не экземпляр класса (объект).
// Приватные - для использования только внутри класса, и “достучаться” к ним мы можем только через this.


// Наследование 
// Классы наследуются с помощью ключевого слова extends при определении дочернего класса. Класс-потомок наследует свойства 
// и методы родительского класса, и может добавлять собственные свойства и методы.

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name); // в дочернем конструкторе нет this 
        this.name = name
        this.title = title;
    }
    introduce() {
        console.log(`Привет, меня зовут ${this.name} и я ${this.title}`);
    }
}
const john = new Employee("Pavel", "Developer");
// john.sayHello(); // "Привет, меня зовут Pavel"
// john.introduce(); // "Привет, меня зовут Pavel и я Developer
john.superSayHello()

// Вызываешь у дочернего super() - вызывается constructor родителя.


// Переопределение методов (в ООП - полиморфизм)

// В JavaScript, методы классов могут быть переопределены путем создания нового метода с тем же именем, что и 
// унаследованный метод. При вызове метода на экземпляре класса будет вызываться переопределенный метод, а не
// унаследованный.

class Animal {
    makeSound() {
        console.log("Animal is making a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // "Woof woof!"

// class Animal {
//     makeSound() {
//         console.log("Animal is making a sound");
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log("Woof woof!");
//     }
// }

// const dog = new Dog();
// dog.makeSound(); // "Woof woof!"


// instanceof
// Оператор в JavaScript, который используется для проверки, является ли объект экземпляром определенного класса.
// Он возвращает значение true , если объект является экземпляром указанного класса, и false , если он не является.

class Animal { }
class Dog extends Animal { }
class Car { }
class Cat extends Animal { }

const dogi = new Dog();
console.log(dogi instanceof Dog); // true
console.log(dogi instanceof Car); // false
console.log(dogi instanceof Animal); // true
console.log(dogi instanceof Object); // true
console.log(dogi instanceof Cat); // false

// Оператор instanceof проверяет не только прямое наследование, но и косвенное.
// Если объект является экземпляром любого из классов в цепочке наследования, то оператор instanceof вернет true.

// Важно отметить, что оператор instanceof работает только с классами и не может использоваться для проверки объектов, 
// созданных с помощью конструктора функции или литерального объекта.


// Примеси (mixins)
// В JS не существует множественного наследования. То есть мы не можем наследовать класс от нескольких классов.
// Примеси как раз и решают эту проблему. Они представляют собой способ повторного использования кода, позволяющий 
// добавлять в классы дополнительные свойства и методы из других объектов.

// Примеси могут быть определены как отдельные объекты, содержащие методы и свойства, которые могут быть добавлены к любому
// классу. Для этого используется ключевое слово mixins.

const myMixin = {
    mixinMethod() {
        console.log('Этот метод из миксина');
    }
};

const myMixin2 = {
    newProperty: "Новое свойство"
}

class MyClass {

}

Object.assign(MyClass.prototype, myMixin, myMixin2); //  ИМЕННО В ПРОТОТИП мы "ПОДМЕШИВАЕМ" метод
const obj = new MyClass();
obj.mixinMethod(); // 'Этот метод из миксина'
console.log(obj.newProperty);

// Примеси могут быть использованы для добавления функциональности в классы.
// Они также могут быть использованы для упрощения кода, разделяя его на более
// мелкие, переиспользуемые блоки.

// !!! Важно учитывать, что использование примесей может привести к конфликтам
// имен методов, если они имеют одинаковые имена. Поэтому необходимо
// внимательно выбирать имена методов, а также контролировать их использование
// в коде.

// ООП 
// Что такое инкапсуляция? Наследование? Полиморфизм? Абстракция?

// Наследование
// Механизм, который позволяет одному классу (дочернему) наследовать свойства и методы 
// другого класса (родителя).

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} шумит.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} лает.`);
    }
}
const myAnimal = new Dog("Jack");
myAnimals.speak(); // "Jack лает."



// Инкапсуляция
// Механизм ООП, который ограничивает доступ к свойствам и методам класса снаружи (сокрытие деталей).

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0) {
            console.log("Невозможно установить отрицательный баланс");
            return;
        }
        this._balance = amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Недостаточно средств");
            return;
        }
        this.balance -= amount;
    }
}
const account = new BankAccount(100);
console.log(account.balance); // 100
account.balance = -50; // Невозможно установить отрицательный баланс
console.log(account.balance); // 100
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(200); // Недостаточно


// Полиморфизм
// Возможность использовать один и тот же метод для различных инстансов класса (объектов).

class Shape {
    draw() {
        console.log("Рисуем фигуру");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Рисуем круг");
    }
}
class Square extends Shape {
    draw() {
        console.log("Рисуем квадрат");
    }
}
const shape = new Shape();
const circle = new Circle();
const square = new Square();
shape.draw(); // "Рисуем фигуру"
circle.draw(); // "Рисуем круг"
square.draw(); // "Рисуем квадрат"


// Абстракция
// Создание структуры свойств и методов, которые могут быть использованы для представления конкретного объекта или
// категории объектов. Посмотри вокруг. Тебя окружают объекты!! Реализуешь их в JS - это и будет абстракцией.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    honk() {
        console.log('Бип-бип!');
    }
}
const myCar = new Car('BMW', 'X5');
console.log(myCar.make); // 'BMW'
console.log(myCar.model); // 'X5'
myCar.honk(); // 'Бип-бип!'


// Задания:
// 1. Создай класс Rectangle с двумя свойствами: width и height . Добавь метод
// getArea() , который будет возвращать площадь прямоугольника.

// 2. Создай класс Square , который наследует свойства и методы класса Rectangle и
// имеет дополнительное свойство sideLength . Переопредели метод getArea() так,
// чтобы он возвращал площадь квадрата.

// 3. Создай класс Teacher с одним свойством name и методом gradeStudent(student,
// grade) , который будет добавлять оценку grade в массив оценок студента
// student .

// 4. Создай класс BankAccount с двумя свойствами: balance и ownerName . Добавь
// методы deposit(amount) и withdraw(amount) , которые будут добавлять и снимать
// сумму amount со счета соответственно. Добавь метод getBalance() , который
// будет возвращать текущий баланс счета.

// 5. Создай класс Product с двумя свойствами: name и price . Добавь метод
// priceWithTax , который будет возвращать цену товара с учетом налога на
// продажи в размере 10%. Процентную ставку нужно хранить в приватном
// свойстве.



