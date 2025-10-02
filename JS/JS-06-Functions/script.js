"use strict";

console.log("Hello, world!");

console.log("Functions in JavaScript");

// * Functions
// * Hoisted
// * Declaration

function great(name, age) {
  return `Hello I'm ${name} and I'm ${age} years old`;
}
console.log(great("Dexter Morgan", 30));

// * Not Hoisted - EXPRESSION
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

// * Not Hoisted - ARROW FUNCTION
const subtract = (a, b) => a - b;
const sum = (a, b) => {
  return a - b;
};

// * Function Calling Other Functions
// * Function within a function
calulatescore(85, 59);
function calulatescore(aliceScore, bobScore) {
  const getGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  const aliceGrade = getGrade(aliceScore);
  const bobGrade = getGrade(bobScore);

  console.log(
    `Alice got a ${aliceGrade} with ${aliceScore} points and Bob got a ${bobGrade} with ${bobScore} points. ${
    aliceScore === bobScore ? "They tied!" : aliceScore > bobScore ? "Alice wins!" : "Bob wins!"
  };

