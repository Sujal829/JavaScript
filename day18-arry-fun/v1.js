let a=[];
let b=new Array(10); // creates an array with 10 elements
console.log(b);
//fill method to fill the array with the given value
// start: The index at which to start filling (0-based).
// end: The index at which to stop filling (0-based). If omitted, it defaults to the length of the array.
// syntax: arr.fill(value, start, end)
b.fill(5); // fills array with 5
console.log(b);
b.fill(6, 2); // fills array with 6 from index 2 to the end
console.log(b);
b.fill(7, 2, 5); // fills array with 5 from index 2 to index 5 (inclusive)
console.log(b);


// forEach loop to iterate over array elements
// syntax: arr.forEach(callback(currentValue, index, array), thisArg)
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array forEach() is called upon.
// thisArg: Optional. A value to use as this when executing callback.
// Example:
let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function(num, index) {
  console.log(index + ": " + num);
});

// map() method to create a new array with the results of calling a provided function on every element in the array
// syntax: arr.map(callback(currentValue, index, array), thisArg)
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map() is called upon.
// thisArg: Optional. A value to use as this when executing callback.
// Example:
let numbers2 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers2.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//diffrence between map and forEach
// forEach: it does not return a new array, it just performs a function on each element
// map: it returns a new array with the results of calling a provided function on every element in the array

// filter() method to create a new array with all elements that pass the test implemented by the provided function
// syntax: arr.filter(callback(currentValue, index, array), thisArg)
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// Example:
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function(num) {
  return num % 2 == 0;
});
console.log(evenNumbers); // Output: [2, 4]

let numbers33 = [1, 2, 3, 4, 5];
let evenNumbers3 = numbers33.filter(num => num % 2 == 0);
console.log(evenNumbers3); // Output: [2, 4]

// reduce() method to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// Reduces the array to a single value (sum, product, etc.).
// syntax: arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
// accumulator: The accumulator accumulates the callback's return values.
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// initialValue: Optional. The initial value to use as the first argument to the first call of the callback.
// Example:
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // Output: 15

//every() method tests whether all elements in the array pass the test implemented by the provided function
// syntax: arr.every(callback(currentValue, index, array), thisArg)
// Example:
let numbers5 = [1, 2, 3, 4, 5];
let allEven = numbers5.every(function(num) {
  return num % 2 == 0;
});
console.log(allEven); // Output: false

//some() method tests whether at least one element in the array passes the test implemented by the provided function
// syntax: arr.some(callback(currentValue, index, array), thisArg)
// Example:
let numbers6 = [1, 2, 3, 4, 5];
let anyEven = numbers6.some(function(num) {
  return num % 2 == 0;
});
console.log(anyEven); // Output: true

//find() method returns the value of the first element in the array that satisfies the provided testing function
// syntax: arr.find(callback(currentValue, index, array), thisArg)
// Example:
let numbers7 = [1, 2, 3, 4, 5];
let firstEven = numbers7.find(function(num) {
  return num % 2 == 0;
});
console.log(firstEven); // Output: 2

//findIndex() method returns the index of the first element in the array that satisfies the provided testing function
// syntax: arr.findIndex(callback(currentValue, index, array), thisArg)
// Example:
let numbers8 = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers8.findIndex(function(num) {
  return num % 2 == 0;
});
console.log(firstEvenIndex); 
// Output: 1


// number methods 
// toString(): converts a number to a string
// toFixed(): formats a number using fixed-point notation
// toExponential(): converts a number to exponential notation
// toPrecision(): formats a number to a specified precision
// parseInt(): parses a string and returns an integer
// parseFloat(): parses a string and returns a floating point number
// isNaN(): determines whether a value is NaN or not
// Number.isInteger(): determines whether a value is an integer
// Math.floor(): rounds a number down to the nearest integer
// Math.ceil(): rounds a number up to the nearest integer
// Math.round(): rounds a number to the nearest integer


// falsy value 
// undefined
// null
// 0
// ""
// NaN
// false


// .valueOf();
// it returns the primitive value of the object

null == undefined; //true
null === undefined; //false

null == 0; //false
null === 0; //false