"use strict";

console.log("Hello, world!");

// * Functions
// * Hoisted

function great(name, age) {
  return `Hello I'm ${name} and I'm ${age} years old`;
}
console.log(great("Dexter Morgan", 30));

// * Not Hoisted
const add = function (a, b, c) {
  return a + b + c;
};
console.log(add(2, 6, 2));

// Calculate BMI - name, weight, height, age
const calculateBMI = function (name, weight, height, age) {
  const bmi = weight / (height * height);
  return `Hello I'm ${name}, I'm ${age} years old. My BMI is ${bmi.toFixed(2)}`;
};
console.log(calculateBMI("Dexter Morgan", 70, 1.75, 30));
