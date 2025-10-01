"use strict";

console.log("Hello, world!");

// Arrow function example
const fn = (x) => x * x;
console.log(fn(5)); // Example usage

// Callback function example
function doHomework(subject, callback) {
  console.log(`Finished my ${subject} homework`);
  callback();
}

// Example usage:
doHomework("math", () => {
  console.log("Callback executed!");
});

// Default parameter example
function multiply(a, b = 1) {
  return a * b;
}

// Test with one argument
console.log(multiply(5)); // Output: 5

// Test with two arguments
console.log(multiply(5, 3)); // Output: 15

// Rest operator example
function maxNumber(...nums) {
  return Math.max(...nums);
}

console.log(maxNumber(1, 5, 3, 9, 2)); // Output: 9

// Spread operator example: Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
