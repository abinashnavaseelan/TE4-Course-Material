"use strict";

console.log("Hello, world!");
console.log("Welcome to the Advanced Arrays lesson.");

const favouriteMovies = [
  "Terminator",
  "The Matrix",
  "Spider-Man",
  "The Dark Knight",
  "Fast & Furious",
];
console.log(favouriteMovies[1]);

favouriteMovies.push("Mortal Kombat");
console.log(favouriteMovies);

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const ticTacToeBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"],
];
console.log(ticTacToeBoard[1][1]);

const values = [10, 20, 30, 40, 50];
const totalSum = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalSum);
