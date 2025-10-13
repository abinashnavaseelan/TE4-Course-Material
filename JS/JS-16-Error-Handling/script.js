"use strict";

console.log("Hello, world!");
console.log("welcome to the Error Handling lession!");

// const divide = (a, b) => {
//   try {
//     if (b === 0) throw new Error("Division by zero is not allowed.");
//     {
//       console.log(a / b);
//     }
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };
// divide(20, 2);
// {
// }

// Exercise: A
const multiply = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  return a * b;
};

try {
  const result = multiply(5, 2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}

// Exercise: B
const getUserAge = (obj) => {
  if (!obj || typeof obj.age === "userAge") {
    throw new Error("Age property is missing.");
  }
  return obj.age;
};

try {
  const user = { name: "Alice" };
  const age = getUserAge(user);
  console.log("User age:", age);
} catch (error) {
  console.error("Error:", error.message);
}
