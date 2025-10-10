"use strict";

console.log("Hello, world!");
console.log("Welcome to the JSON API lession.");

const studentJSON = '{"name":"Abinash","grade":4,"passed":true}';
const studentObj = JSON.parse(studentJSON);
console.log(studentObj.name);
const newStudentJSON = JSON.stringify(studentObj);
console.log(newStudentJSON);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const ul = document.createElement("ul");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch((error) => console.error("Error fetching users:", error));
