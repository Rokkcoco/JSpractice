// Lexical Environment, замыкание, рекурсия

// let car = "bmw";

// const startEngine = () => {
//   console.log(`Start ${car}`);
// };

// startEngine();

// car = "audi";

// const car = "bmw";

// const startEngine = () => {
//   const car = "audi";

//   return () => {
//     console.log(car);
//   };
// };

// const foo = startEngine();

// foo();

// const globalLE = {
//   environmentsRecords: {},
//   outer: LE || null,
// };
// ------ globalLE {}

// let car = "bmw"; // globalLE {car: "bmw"} --> null

// const foo = () => { // globalLE {car: "bmw", foo: function}
//   // fooLE {} --> globalLE

//   const startEngine = () => { // fooLE {startEngine: function}
//     //[[env]] --> fooLE
//     // startEngineLE {}
//     const car = "toyota";
//     console.log(`Start ${car}`);
//   };
//   startEngine();
// };

// car = "audi"; // globalLE {car: "audi", foo: function}

// foo();

//  globalLE {foo: function, a: undefined}

// foo(); //  globalLE {foo: function, a: undefined}
// console.log(a); //  globalLE {foo: function, a: undefined}
// console.log(b); //  globalLE {foo: function, a: undefined}
// var a = 12; //  globalLE {foo: function, a: 12}
// let b = 11; //  globalLE {foo: function, a: 12, b: 11}

// function foo() {
//   console.log("foo");
// }

// const bar = function () { //  globalLE {foo: function, a: 12, b: 11, bar: fun}
//   console.log("foo");
// };
// const baz = () => {
//   console.log("foo");
// };

// bar()

// globaLE {}

const counter = () => {
  let count = 0;
  return () => {
    debugger;
    console.log(++count);
  };
};

const counter1 = counter(); // globaLE {counter: func, counter1: func}
// const counter2 = counter();
counter1();
counter1();
counter1();

//globalLE {pow:}
// let count = 0;
// const pow = (x, n) => {
//   console.log(++count);
//   return x * pow(x, n - 1);
// };

// console.log(pow(2, 3));
