"use strict";

console.log("Hello, world!");
console.log("Welcome to the Async lesson.");
console.log("Page Loaded Successfully");

// function logMessage(message) {
//   console.log(message);
// }
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data Retrieved");
//   }, 2000);
// }

// fetchData(logMessage);

// console.log("Operation Completed");

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//     reject("Promise Rejected");
//   });
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Async + Try catch

// const fetchDeta = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Something went wrong :(", error);
//   }
// };
// fetchDeta();

greetlater("Hello, Async World!");
async function greetlater(message) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(message);
}

async function fetchPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data[0].title);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
fetchPosts();

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
  fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
    res.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  ),
])
  .then(([posts, comments, photos]) => {
    console.log("Posts:", posts.length);
    console.log("Comments:", comments.length);
    console.log("Photos:", photos.length);
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });
