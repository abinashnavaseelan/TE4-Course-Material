"use strict";

console.log("Hello, world!");
console.log("JS-04 Control Flow");

let age = "18";
let hasAticket = true;
console.log(typeof age);

if (age < 18 && hasAticket) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

// Trafic Light
let trafficLight = "green";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Go");
}

let secretNumber = 7;

let userGuessInput = "55";
let userGuess = Number(userGuessInput);

if (typeof userGuess !== "number" || isNaN(userGuess)) {
  console.log("Invalid guess");
} else if (userGuess === secretNumber) {
  console.log("Correct! You guessed the number.");
} else if (userGuess > secretNumber) {
  console.log("Too high!");
} else if (userGuess < secretNumber) {
  console.log("Too low!");
}

let totalAmount = 10000;

if (totalAmount > 100) {
  let discount = totalAmount * 0.1;
  let finalAmount = totalAmount - discount;
  console.log("You spent a lot!");
  console.log(`Discount applied: $${discount}`);
  console.log(`Final amount: $${finalAmount}`);
} else {
  console.log("Thank you for your purchase.");
}

if (totalAmount >= 100) {
  let discount = totalAmount * 0.2;
  let finalAmount = totalAmount - discount;
  console.log("Special offer: You get a 20% discount!");
  console.log(`Discount applied: $${discount}`);
  console.log(`Final amount: $${finalAmount}`);
}

if (totalAmount < 50) {
  console.log("No discount applied.");
  console.log(`Final amount: $${totalAmount}`);
}

// bmi calculation
const MyHeight = 1.86;
const MyWeight = 100;

const myBmi = MyWeight / MyHeight ** 2;
console.log(`My BMI is ${myBmi}`);
