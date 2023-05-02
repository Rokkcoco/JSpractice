let x = 232;

let y = "";
    x = String(x)
    for (let i = x.length-1; i >= 0; i--)
    y += x[i]
    console.log(x)
    console.log(y);
    if (y === x) {
        console.log("true")
    } else {
        console.log("false");
    }


