"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet();
person2.greet();

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }
}

const account1 = new BankAccount("Alice", 100);
account1.deposit(50);
account1.withdraw(30);
account1.withdraw(200);

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows: Meow! Meow!`);
  }
}

class Bird extends Animal {
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

const animals = [
  new Dog("Buddy"),
  new Cat("Whiskers"),
  new Bird("Tweety"),
  new Dog("Max"),
  new Cat("Luna"),
];

animals.forEach((animal) => animal.makeSound());
