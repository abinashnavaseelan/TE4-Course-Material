console.log("Hello, world!");
console.log("Welcome to the Local Storage & Session Storage Lession");

const myName = "Abinash";
const nameonPage = document.createElement("h1");
nameonPage.innerText = `Hello, ${myName}`;
document.body.appendChild(nameonPage);
localStorage.setItem("name", myName);

const button = document.createElement("button");
button.innerText = "Remove Name from Local Storage";
document.body.appendChild(button);
button.addEventListener("click", () => {
  localStorage.removeItem("name");
  alert("Name removed from Local Storage");
});


