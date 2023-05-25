// sort
const names = ["Donald", "", ,"Alex", "Bob"]
names.sort()
console.log(names)
//1. сортирует строки по алфавиту "из коробки", т.е. без доп. параметров

const names_2 = ["Donald", "alex", "Alex", "bOB", "Юрий", "игорь", "01_user"]
console.log(names_2.sort())
//2. сортирует строки по unicode "из коробки", т.е. без доп. параметров
// symbols => numbers => latin UpperCase => latin LowerCase =>
// other UpperCase => other LowerCase

console.log(names)
//3. работает мутабельно (сортирует массив на месте)

console.log(names === names.sort()) //true
//4. возвращает ссылку на исходный массив

const nums = [1000, -3, 777, 9, 9999,]
console.log(nums.sort())
//5. для остальных случаев необходимо параметром передать функцию сравнения
// (callback)

// const compFunc = (a, b) => {      // по возрастанию
//   if (a > b){   // надо поменять местами, >0
//       return 1000
//   } else {
//       return -1
//   }
// }
const compFunc = (a, b) => b - a   // по убыванию

console.log(nums.sort(compFunc))
//6. Функция сравнения должна возвращать число большее или меньшее 0

console.log(nums.reverse())
//7. Вместе с sort часто используется revers


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b) => a.age - b.age))
//9. Сортировка массива объектов по числовым значения

// console.log(students.sort((a, b)=> a.name.localeCompare(b.name)))
console.log(students.sort((a, b)=> {
    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -10
    } else {
        return 10
    }
}))

// bubble sort

const numbers = [56,23,12,99,64]

for (let j = 0; j < numbers.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            // переставляем местами:
            // let temp = numbers[i]
            // numbers[i] = numbers[i + 1]
            // numbers[i + 1] = temp
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if(isSorted)break
}


// n * n  // 25
// (n - 1) * ((n - 1)/2) //8

console.log(numbers)