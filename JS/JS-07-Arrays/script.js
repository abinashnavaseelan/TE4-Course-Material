"use strict";

console.log("Hello, world!");

console.log("Arrays");

// Example "Reference" code
// const items = ["Fried Chicken", "Banana", "Watermelon", "Koolaid"];
// console.log(items.length);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// Exercise 1

const colors = ["Red", "Green", "Blue"];
console.log(colors.length);
colors.push("Yellow");
colors.push("Purple");
colors.shift("Red");

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Exercise 2

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);
numbers.splice(2, 1, 99);
console.log(numbers);

for (const number of numbers) {
  console.log(number * 2);
}

// Exercise 3

const shoppingCart = ["Milk", "Eggs", "Bread", "Apples", "Chicken"];
console.log(shoppingCart.length);
shoppingCart.shift("Bread");
shoppingCart.includes("Milk")
  ? console.log("You already have Milk in your cart")
  : shoppingCart.push("Milk");
console.log(shoppingCart);
for (const item of shoppingCart) {
  console.log(item);
}
