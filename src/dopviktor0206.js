const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = {...user, friends: [...user.friends]}
console.log(deepCopyUser)

//2. Создайте полную (глубокую) массива students
let deepCopyStudents = students.map(t => ({...t}))
console.log(deepCopyStudents)

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = {...superUser, friend: superUser.friends.map(t => ({...t}))}
console.log(deepCopySuperUser)

//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
let sortedByScores = [...students].sort((a, b) => b.scores - a.scores)
console.log(sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(t => t.scores >= 100)
console.log(bestStudents)

//6. Сформируйте массив имён студентов (map)
let studentsNames = students.map(t => t.name)
console.log(studentsNames)

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(t => ({...t, isStudent: true}))
console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick = students.map(t => t.name === "Nick" ? {...t, isMarried: true}: t)
console.log(studentsWithMarriedNick)

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {...superUser, friends: superUser.friends.filter(t => t.id !== 1)}
console.log(superUserCorrect1)

//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {...superUser, friends: superUser.friends.map(t => t.id === 2 ? {...t, name: "Donald"}: t)}
console.log(superUserCorrect2)

//11. добавьте в список друзей нового друга
const newFriend = {
    id: 5,
    name: "Nick",
    age: 27,
    isMarried: false,
    scores: 99
}
let superUserCorrect3 = {superUser, friends: [...superUser.friends, newFriend]}

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
let bestStudent
function getIt(arr) {
    let value = 0
    let name = ''
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].scores > value) {
            value = arr[i].scores
            name = arr[i].name
        }
    }
    return name
}
console.log(getIt(students))




//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = students.reduce((acc, array) => acc + array.scores, 0)
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// friends: ["Alex", "Nick", "John", "Helen", "Ann"]
const students14 = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,

    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];
// if (students[0]["friends"].includes(students[i].name )) {
const addFriends = (stud) => {
    let newArray = []

    for (let i = 0; i < stud.length; i++) {
        newArray.push({...stud[i], friends: stud.map(s => s.name)
                .filter(n => n !== stud[i].name)})

    }
    return newArray
}
console.log(addFriends(students14));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]
const students15 = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];
function getBestStudents(stud, ind = 0) {
    const arr = [...stud].sort((a, b) => b.scores - a.scores)
    if (ind === 0) {
        return arr[0]
    }
    else {
        const res = []
        for (let i = 1; i <= ind; i++) {
            res[i] = arr[i] || null
        }
        return res
    }
}

console.log(getBestStudents(students15, 10))

//12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, st) => {
    return acc.scores > st.scores ? acc : st;
});





