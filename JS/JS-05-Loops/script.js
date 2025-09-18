"use strict";

console.log("Hello, world!");

// for loop "Example"
/// for (let i = 1; i <= 5; i++) {
//   console.log(`Number`);
// }

// First Task "for loop"
for (let count = 1; count <= 10; count++) {
  console.log(`The count is: ${count}`);
}

// while loop "Example"
// let count = 1;
// while (count <= 5) {
//   console.log(`The count is: ${count}`);
//   count++;
// }

// Second Task "while loop"
let count = 10;
while (count >= 1) {
  console.log(`The count is: ${count}`);
  count--;
}

// do...while loop "Third Task"
let sum = 0;
let number = 1;
do {
  sum += number;
  console.log(`Current sum: ${sum}`);
  number++;
} while (sum <= 20);

// for...of loop "Fourth Task"
const people = [
  "The Watermelon Bender",
  "The Banana Warrior",
  "The Fried Chicken Bucket",
  "The Koolaid Colector",
];
for (const person of people) {
  console.log(`This is the squad ${person}`);
}
