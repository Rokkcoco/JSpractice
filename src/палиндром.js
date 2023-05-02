let word = "пельлеП";
let a = '';
let b = '';
 for (let i = 1; a.length <= Math.round([word.length / 2 -1]); i++) {
        a += word[Math.round([word.length / 2 - i])]
        b = word.slice(Math.round([word.length / 2 -1]), word.length)
        } if (a.toLowerCase() == b.toLowerCase()) {
            console.log("Слово является палиндромом!")
        } else { console.log("Слово не является палиндромом!")}




