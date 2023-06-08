//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"


function repeatString(string, repeat, thirdparam) {
    let arr = []
    for (let i = 0; i < repeat; i++) {
        arr[i] = string
    }
    return arr.length > 0 ? arr.join(thirdparam) : ""
}
//new Array(repeat).fill(string).join(thirdparam) !!! new array делает количество элементов, а потом заполняем пустой массив с 3 элементами через fill
console.log(repeatString("yo", 3, " "))
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

function checkStart(string, tester) {
    for (let i = 0; i < tester.length; i++) {
        if (!string.toLowerCase().includes(tester[i])) {
            return false
        }
    }
    return true
}

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function truncateString(string, numbers) {
    let arr = [...string]
    let res = []
    for (let i = 0; i < numbers; i++ ) {
        res[i] = arr[i]
    }
    return res.join('') +"..."
}

console.log(truncateString("lol lol wqe", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

function getMinLengthWord(word) {
    let arr = word.split(' ')
    let res = arr[0]
    for (let i = 0; i < arr.length-1; i++ ){
        if (arr[i].toLowerCase().length < res) {
            res = arr[i]
        }
    }
    console.log(res)
    return res
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(string) {
    let arr = string.toLowerCase().split(' ')
    let res = ""
    for (let i = 0; i < arr.length-1; i++) {
        if (i === arr.length -2) {
            res += arr[i][0].toUpperCase() + arr[i].slice(1)
        }
        else {
            res += arr[i][0].toUpperCase() + arr[i].slice(1) + ' '
        }
    }
    return res + "!"
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

function isIncludes(string, tester) {
    let arr = string.toLowerCase().split('')
    for (let i = 0 ; i < tester.length; i++) {
        if (!arr.includes(tester[i].toLowerCase())) {
            return false
        }
    }
    return true
}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))


const isIncludesStrict = (string, substring) => {
    string = string.toLowerCase();
    substring = substring.toLowerCase();
    for (const char of substring) {
        if (!string.includes(char)) {
            return false;
        }
        string = string.replace(char, '');
        console.log(string)
    }
    return true;
}

console.log(isIncludesStrict("Incubator", "Cut"))
console.log(isIncludesStrict("Incubator", "table"))
console.log(isIncludesStrict("Incubator", "inbba"))
console.log(isIncludesStrict("Incubator", "inba"))
console.log(isIncludesStrict("Incubator", "Incubatorrr"))




  




