console.log("Hello, world!");
console.log("Welcome to the Local Storage & Session Storage Lession");

// * 1. SAVE USERNAME (just an example)
localStorage.setItem("name", "Abinash");

// * 2. CREATE ELEMENTS
const clearButton = document.createElement("button");
const themeToggle = document.createElement("button");
const para = document.createElement("p");
const input = document.createElement("input");

// * 3. ATTACH THEM TO PAGE
document.body.append(clearButton, para, themeToggle, input);

// * 4. INITIAL UI SETUP
clearButton.innerText = "Clear localStorage";
themeToggle.innerText = "Toggle Dark/Light Theme";
para.textContent = localStorage.getItem("name");
input.type = "text";
input.placeholder = "Type something to auto-save";
input.value = localStorage.getItem("autosave") || "";

// * 5. THEME TOGGLE (localStorage remembers theme)
themeToggle.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");

  // * If current theme is dark → switch to light, else → switch to dark
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // * override body class and save to localStorage
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});
// * 6. CLEAR EVERYTHING
clearButton.addEventListener("click", () => {
  localStorage.clear();
  para.textContent = "";
  input.value = "";
});

// * 7. AUTO-SAVE TEXT INPUT
input.addEventListener("input", () => {
  localStorage.setItem("autosave", input.value);
});

// * 8. APPLY AUTO-SAVED VALUE ON RELOAD
window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("autosave");
  if (savedValue) input.value = savedValue;
});

// * 9. MULTI TAB THEME SYNC AND INPUT SYNC
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    document.body.className = e.newValue;
  }
  if (e.key === "autosave") {
    input.value = e.newValue;
  }
});

//* Make a To-Do List App: Add tasks → save to localStorage & On reload → restore tasks & Allow delete & clear all.
const todoInput = document.createElement("input");
const addTodoButton = document.createElement("button");
const todoList = document.createElement("ul");
const clearTodosButton = document.createElement("button");

todoInput.type = "text";
todoInput.placeholder = "Enter a task";
addTodoButton.innerText = "Add Task";
clearTodosButton.innerText = "Clear All Tasks";

document.body.append(todoInput, addTodoButton, clearTodosButton, todoList);

// Load saved tasks from localStorage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => {
  const li = document.createElement("li");
  li.textContent = task;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(li);
    saveTasks();
  });
  li.appendChild(deleteButton);
  todoList.appendChild(li);
});

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = [];
  todoList.querySelectorAll("li").forEach((li) => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add new task
addTodoButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
      saveTasks();
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
    saveTasks();
  }
});

// Clear all tasks
clearTodosButton.addEventListener("click", () => {
  todoList.innerHTML = "";
  saveTasks();
});
