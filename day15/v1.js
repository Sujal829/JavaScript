// slice method is used to extract a section of a string
// It accepts two parameters: start and end (both are optional)
// start: The index where the slice starts (0-based). If negative, it counts from the end of the string.
// end: The index where the slice ends (0-based). If negative, it counts from the end of the string. If omitted, it defaults to the length of the string.
// rule 1: If start is greater than end, the function returns an empty string.
// start>=end => "" 
const str = "Hello World";
console.log(str.slice(6)); // Output: World
console.log(str.slice(-5)); // Output: World
console.log(str.slice(6, 11)); // Output: World
console.log(str.slice(-5, -1)); // Output: Worl
console.log(str.slice(10,3));// Output: ""
//  substr method is similar to slice method but it does not accept negative values
// syntax : substr(start,end, length)

// substring method is used to extract a section of a string
// It accepts two parameters: start and end (both are optional)
// start: The index where the substring starts (0-based). If negative, it counts from the end of the string.
// end: The index where the substring ends (0-based). If negative, it counts from the end of the string. If omitted, it defaults to the length of the string.
// rule 1: If start is greater than end, the function returns an empty string.
// start>=end => ""
console.log("Substring method:  ");
const str1 = "Hello World";
console.log(str1.substring(6)); // Output: World
console.log(str1.substring(-5)); // Output: " "
console.log(str1.substring(6, 11)); // Output: World
console.log(str1.substring(-5, -1)); //Output: " "
console.log(str1.substring(10,3));// Output: "lo Worl"
//when we use negative index, it considers the index from the end of the string
// when we provide both start and end index negative 

let a=[1,2,3,4,5];
console.log(a.toString());// Output: 1,2,3,4,5

let num = 12.6456;
console.log(num.toFixed(2));  // "12.65"
console.log(num.toFixed(0));  // "13"

let num1 = 12.6456;
console.log(num1.toPrecision(2));  // "13"
console.log(num1.toPrecision(4));  // "12.65"
console.log(num1.toPrecision(6));  // "12.6456"

// charCodeAt(index) method returns the Unicode code point at the specified index in a string
// search method is used to search for a specified value in a string and return its position
// padStart() method pads a string with another string until it reaches a certain length
// padEnd() method pads a string with another string until it reaches a certain length
// match() method searches a string for a match against a regular expression and returns the matches as an array
// matchAll() method returns all matches of a regular expression against a string as an iterator object
// pareseInt() method parses a string argument and returns an integer
// 
// repeat() method returns a new string that contains the specified number of copies of the original string
// ascii  american standard code for information interchange
// match() method searches a string for a match against a regular expression and returns the matches as an array
// matchAll() method returns all matches of a regular expression against a string as an iterator object

// repeat() method returns a new string that contains the specified number of copies of the original string
//eg    
//let str="hello world";
//console.log(str.repeat(3));
// Output: hello worldhello worldhello world