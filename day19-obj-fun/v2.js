// what is function in js 
// A function is a block of code designed to perform a specific task.
//  It takes zero or more arguments, performs a task, and optionally returns a value.
// function is a reusable piece of code that performs a specific task.
// function is a set of instructions that performs a specific task.

// types of function in js
// built-in function
// user defined function

// built-in function
// this is a pre-defined function which is already available in js.
// example of built-in function
// alert()
// console.log()
// sort()

// user defined function
// this is a user-defined function which is created by the user.
//example of user defined function
// function name(parameters) {
//     //body of the function
// }

//function declaration

// function syntax
// function name(parameters) {
//
//  // body of the function
//  }

// function call
// name(arguments);

//function declaration
function greet() {
}
greet(); // Output: Hello, World!

//function definition
function greet() {
  console.log("Hello, World!");
}

// function without parameters
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// example of function with parameters in js
function greet(name) {
  console.log("Hello, " + name);
}
greet("Sujal"); // Output: Hello, Sujal

// function with return statement
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15
let sum = addNumbers(5, 10); // Output: 15

// function with default parameter value
function multiplyNumbers(a = 1, b = 1) {
  return a * b;
}
let product = multiplyNumbers(5, 2); // Output: 10

//function type

// function expression / anonymous functions
// functions can be assigned to variables as values.
// function has no name. it is called anonymous function.
// let greet = function() {
//   console.log("Hello, World!");
// };
// greet(); // Output: Hello, World!
// function expression


//immediate invocation function expression IIFE
// (function() {
//   console.log("Hello, World!");
// })(); // Output: Hello, World!

//arrow function
// syntax
// let greet = () => {
//   console.log("Hello, World!");
// };
// greet(); // Output: Hello, World!



//function 
//callback function
// function greet(callback) {
//   console.log("Hello, World!");
//   callback();
// };
// function showMessage() {
//   console.log("Hello, World!");
// }
// greet(showMessage); // Output: Hello, World! Hello, World!



//constructor function
// this is a special type of function that creates objects.
// its calls the constructor function with new keyword
//built in constructor
// let a= new String();
//let a = new Number();
// let a = new Array();

// custom constructor
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// let myCar = new Car("Toyota", "Camry", 2020);
// console.log(myCar); // Output: Car { make: "Toyota", model: "Camry", year: 2020 }
// this keyword is used to create new objects
// this keyword is used to access and modify properties of an object

//js events 
// JavaScript events are actions that occur when a user interacts with a document or a website.
// example of event listener

function greet() {
    console.log("Hello, World!");
}

function showMessage() {
    alert("Hello, World!");
}