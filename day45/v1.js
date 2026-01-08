// Regular Expression
// Regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// Regular Expressions are also called Regex or RegEx.
// 
// - use like finding email , phone number etc.
// regx is used to form validation
// exp = /pattern/modifiers;
// match()
// test()
// replace()

// test() method returns boolean value.
// to check whether the string matches with given pattern or not.
let str = "hello world";
let regex = /world/;    // pattern are case sensitive
let regex2 = /World/;
console.log(regex.test(str)); // true
console.log(regex2.test(str));  // false

// match() method return array if it finds any match otherwise null.
let str1 = 'My phno is : 1234567890';
// num also callled as digit
// \d means digit
// + means one or more occurance
const regexdigit = /\d+/;
console.log(str1.match(regexdigit)); // [ '1234567890', index: 13, input: 'My phno is : 1234567890' ]


// replace() method replaces the matched part with new string.
let str4 = 'My phno is : 1234567890';
const regexdigit1 = /\d+/;
console.log(str4.replace(regexdigit1,'**********')); // My phno is : **********
// g =  means global
const regexdigit2 = /\d+/g;
console.log(str4.replace(regexdigit2,'**********')); // My phno is : **********


// when we want to create aregex dynamically then we will use constructor function 
let word = 'apple';
let sentence = 'Apple apple Apple are tasty!';
let regexword = new RegExp(word,'gi');
// i case insensitive
console.log(sentence.match(regexword)); // ['Apple', 'apple', 'Apple']


// common symbols
// .   => any charcter except newline
// \w  => alphanumeric character (a-z,A-Z,0-9)
// \W  => non-alphanumeric character
// \s  => whitespace character
// \d  => digits
// \D  => non-digits
// ^   => startswith
// $   => endswith
// *   => zero or more times
// +   => one or more times
// ?   => optional
// {n} => exactly n times
// {n,m} => at least n and maximum m times
// |   => either or
// ()  => group
// []  => range
// {}  => quantifier
// \   => escape character
// \A  => start of string
// \Z  => end of string



let str8 = '$Ra3hu5l6n7@'
function sumofDigits(str8){
    const digit = str8.match(/\d/g);
    console.log(digit);
    return digit.reduce((acc,val)=>{
        acc+=Number(val);
        return acc;
    },0);
}
console.log(sumofDigits(str8)); 
 


// 2. Nullishing coalescing operator(??)
// -> ?? is used to provide default values to variables.
// -> It only works on nullish values(null and undefined)
// -> It doesnot work on falsy values(false,0,"",NaN) // falsy values are treated as valid values
// -> It has higher precedence than || operator.
// -> right side operand is evaluated only when left side operand is null or undefined.

let userName = null;
let disp = userName ?? "Guest";
console.log(disp); // Guest
userName = '';
disp = userName ?? "Guest";
console.log(disp); // ''


// 3. Date and it's methods:
// -> Date object represents date and time.
// -> Date object is created by using new keyword.
// -> Date object is based on milliseconds since January 1st, 1970 UTC.
// -> Date object is immutable.
// -> Date object is timezone independent.


let currentDate = new Date();
console.log(currentDate); // 
// GMT+0530 (India Standard Time) = timezone , of UTC = Universal Time Conversion)
console.dir(currentDate);
console.log(typeof currentDate); // object
console.log(currentDate.toString()); // Wed Aug 09 2023 15:46:38 GMT+0530 (India Standard Time)

console.log(currentDate.getFullYear()); //  
console.log(currentDate.getMonth()); // 0 = january
console.log(currentDate.getDate()); // 
console.log(currentDate.getDay()); // 0 = sunday
console.log(currentDate.getHours()); // 
console.log(currentDate.getMinutes()); //
console.log(currentDate.getSeconds()); // 
console.log(currentDate.getMilliseconds()); // 

const dob = new Date(1990,10,12);
console.log(dob); // Thu Nov 12 1990 00:00:00 GMT+0530 (India Standard Time)
console.log(dob.toDateString()); // 12/11/1990
console.log(dob.toLocaleDateString()); // 12/11/1990
console.log('tolocal time',dob.toLocaleTimeString()); // 00:00:00
console.log('get time',dob.getTime()); // timestamp(milliseconds from Jan 1st, 1970)



// math 
// math is an object which contains properties and methods related to mathematical constants and functions.
// Math is not a constructor function.
// Math is a static object.

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LOG2E); // 1.442695040

let dec = 6.8;
console.log(Math.round(dec)); // 7
console.log(Math.floor(dec)); // 6
console.log(Math.ceil(dec)); // 78
console.log(Math.pow(2,3)); // 8
console.log(Math.sqrt(4)); // 2
console.log(Math.max(1,2,3,4,5)); // 5
console.log(Math.min(1,2,3,4,5)); // 1
console.log(Math.random()); // random number between 0 and 1


