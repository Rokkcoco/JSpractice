
const todoListId_1 = "1" // v1()
const todoListId_2 = "2"

const todoLists = [
    // {
    //     id: todoListId_1,
    //     title: "What to learn",
    // },
    {
        id: "2",
        title: "What to buy",
    }
]

const tasks = {
    [todoListId_1]: [  // "1"
        {id: "10", title: "HTML", isDone: false},
        {id: "20", title: "CSS", isDone: false},
        {id: "30", title: "JS/TS", isDone: false}
    ],
    [todoListId_2]: [  // "2"
        {id: "11", title: "MEAT", isDone: false},
        {id: "21", title: "CHEESE", isDone: false},
        {id: "31", title: "BEER", isDone: false}
    ],
}

const getId = () => Math.floor(Math.random() * 100)  // 0 - 100


//C -R- UD

const addTodoList = (todoListTitle) => {
    const todoId = String(getId())
    const newTodo = {
        id: todoId,
        title: todoListTitle
    }
    const updatedTodos = [...todoLists, newTodo]
    console.log(updatedTodos)
    console.log({...tasks, [todoId]: []})
}

addTodoList("What to read")


const deleteTask = (taskId, todoId) => {
    const todoTasks = tasks[todoId]
    const updatedTasks = todoTasks.filter(t => t.id !== taskId)
    const copyTasks = {...tasks, [todoId]: updatedTasks}
}

const deleteTodo = (todoId) => {
    const updatedTodos = todoLists.filter(tl => tl.id !== todoId)
    delete tasks[todoId]
}

// reduce => свёртка
const array = [2,4,5,3]

console.log(array.reduce((sum, el)=>{
    sum = sum + el
    return sum
}, 0))

let students = [
    {   id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: "2",
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: "3",
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: "4",
        name: "John",
        age: 21,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => {
    if(el.id !== 1){
        acc.push(el)
        return acc
    } else {
        return acc
    }
}, []))


const sts = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "2": {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    }
}


console.log(students.reduce((acc, el)=>{
    acc[el.id] = el
    // {"2":   {
    //
    //         name: "Bob",
    //         age: 22,
    //         isMarried: true,
    //         scores: 85
    //     }             }
    delete acc[el.id].id
    return acc
}, {}))

const stsAge = {
    "21": 2,
    "20": 1,
    "22": 1
}

console.log(students.reduce((acc, el)=> {
    if(Object.keys(acc).includes(String(el.age))){
        acc[el.age] = acc[el.age] + 1
        return acc
    } else {
        acc[el.age] = 1
        return acc
    }
}, {}))





