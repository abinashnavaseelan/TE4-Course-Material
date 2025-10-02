"use strict";

console.log("Hello, world!");

console.log("DOM Basics");

const h1 = document.getElementById("title");
console.log(h1);

const msg = document.getElementsByClassName("Welcome to my page");
console.log(msg);

const headings = document.querySelectorAll(".item");

for (const heading of headings) {
  console.log(heading.textContent);
}

const button = document.createElement("button");

const body = document.querySelector("body");
body.appendChild(button);

button.innerText = "Click Me";
button.style.color = "white";
button.style.backgroundColor = "blue";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

button.addEventListener("click", function () {
  console.log(this.click);

  alert("Button Clicked!");
});

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "red";
box.style.marginTop = "20px";
body.appendChild(box);

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "red";
});
