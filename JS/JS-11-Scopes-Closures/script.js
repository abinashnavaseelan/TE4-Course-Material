"use strict";

console.log("Hello, world!");

console.log("Welcome to the Scopes & Closures Lesson!");

//*  Teacher Example
// const global = "I am a global variable";

// const repeatvar = () => {
//   const global = "I am a local variable";
//   const scoped = "I am a scoped variable";
//   console.log(scoped);
// };

// repeatvar();

// if (true) {
//   var variableVar = "I am a var variable";
//   console.log(variableVar);
// }

// console.log(variableVar);

// const outer = () => {
//   let counter = 0;

//   const inner = () => {
//     counter++;
//     console.log(counter);
//   };

//   return inner;
// };

// outer()();
// const count = outer();

// count();
// count();
// count();
// count();
// count();
// count();
// count();

//* Multiplier Example
function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5));

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
  };
}

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.reset());
console.log(myCounter.increment());
