// EventLoop

// console.log("a");

// setTimeout(function () {
//   console.log("timeout");
// }, 0);

// console.log("b");

// console.log("c");

// (function log1() {
//   console.log(1);
// })();

// setTimeout(function firstFN() {
//   console.log(2);
// }, 1000);

// setTimeout(function secondFN() {
//   console.log(3);
// }, 1000);

// setTimeout(function thirdFN() {
//   console.log(4);
// }, 1000);

// (function log5() {
//   console.log(5);
// })();

//-------------------------

// function a() {
//   console.log("a");
// }
// function b() {
//   console.log("b");
// }
// function c() {
//   console.log("c");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("create promise");
//   setTimeout(function timer() {
//     res(console.log("timeout"));
//   }, 0);
// }).then(() => {
//   console.log("res");
// });

// b();
// c();

// ----------------

// setTimeout(() => {
//   console.log(1);
// });

// new Promise(function (res, rej) {
//   console.log(2);
//   res();
// }).then(() => {
//   console.log(3);
// });

// console.log(4);

// 2 3 1 4
// 2 3 4 1

// 2 4 3 1

// -----------------------
// p1 w1 w2 a1 a2 p2 s1 s2
// p1 w1 w2 a1 a2 a3 p2 p3 s1 s2
// p1 p2 w1 a1 w2 p3 a3 a2 s1 s2
// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// });

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2().then()
//   console.log("8");
// }

// async function test2() {
//   console.log("9");
// }

// await test1();
// console.log("10");

// ------------------------
// console.log(1); // 1 4 10 5 6 7 2 3 9 8

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((res, rej) => {
  console.log(4);
  res(5);
}).then((data) => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);

      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

// console.log(10);

// import fetch from "node-fetch";

// const colors = fetch("https://google.com");

// export default await colors;
