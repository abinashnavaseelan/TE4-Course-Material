console.log("Hello, world!");

console.log("********** Objects **********");

// const car = {
//   maker: "Toyota",
//   model: "Supra",
//   color: "red",
//   year: 2020,
//   horsepower: 800,
//   fuel: "gasoline",
// };

// console.log(car);

// const person = new Object();
// {
//   person.name = "John";
//   person.age = 30;
//   person.city = "New York";
// }

// console.log(person);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array[5]);

// const school = {
//   name: "NTI",
//   address: {
//     street: "Röktagenvägen 19",
//     municipality: "Stockholm",
//     city: "Stockholm",
//     postalCode: "141 52",
//   },
//   classes: [
//     {
//       name: "Te4_25",
//       numberOFStudents: 20,
//     },
//   ],
// };

// console.log(school);

// for (const item in school) {
//   console.log(item, school[item]);
// }
/////////////////////////////////////////////////////
// * Exercise A
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

console.log(book);
book.pages = 180;
///////////////////////////////////////////////////////
// * Exercise B
const person = {
  name: "Alice",
  city: "Stockholm",
};

console.log("Hi, I'm " + person.name + " from " + person.city + ".");

///////////////////////////////////////////////////////
// * Exercise C
const classroom = {
  teacher: "Mr. Smith",
  students: [
    { name: "John", age: 16 },
    { name: "Jane", age: 15 },
    { name: "Jim", age: 17 },
  ],
};
///////////////////////////////////////////////////////
