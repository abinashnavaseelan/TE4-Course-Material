"use strict";

console.log("Hello, world!");
console.log("Welcome to the JavaScript Math Operators exercise.");

// -> Exercise 1:
let A = 25;
let B = 15;
let C = 10;

let addition = A + B + C;
let subtraction = A - B - C;
let multiplication = A * B * C;
let division = A / B / C;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

let result = addition;
console.log("Result:", result);

// -> Exercise 2:
if (result > 50 && result < 100) {
  console.log("The result is greater than 50 and less than 100.");
} else {
  console.log("The result is NOT in the range 50-100.");
}

// -> Exercise 3:

let score = 85;

let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else {
  grade = "C";
}

console.log("Score:", score);
console.log("Grade:", grade);
