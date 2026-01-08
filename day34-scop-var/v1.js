// Variable Scope
// 1. Global Scope
// 2. Local
// 3. functional
// 4. block

// global scope
// variable which can be accessed anywhere in the program
// attached to window object
// not used to store sensitive data
// can be accessed by any function
// eg
// var a = 10;
// function add(){
//     console.log(a); // op 10
// }
// add();
// console.log(a); // op 10

// local scope
// variable which can only be accessed within that particular function
// cannot be accessed outside of that function
// eg
// function add(){
//     var a=5;
//     console.log(a); // op 5
// }
// add();
// console.log(a); // error because it is not defined in the global scope


// function scope
// variable which can only be accessed within that particular function
// cannot be accessed outside of that function
// eg
// function add(){
//     let a=5;
//     console.log(a); // op 5
// }
// add();
// console.log(a); // error because it is not defined in the global scope

// block scope
// variable which can only be accessed within that particular block
// cannot be accessed outside of that function
// if we declare a variable using var then it will be accessible outside of the block also
// if we declare a variable using let,const then it will not be accessible outside of the block
// eg if while loop or for loop
// if(true){
//     let a=5;
//     var c=6;
//     console.log(a);
// }
// console.log(a); // error because it is not defined in the global scope
// console.log(c); // op 6


// hoisting
// when we declare a variable without using var,let,const then it will be hoisted to the top of the code
// a=10;  
// console.log(a); // op 10
// var a;
// // output: 10
// // this is called hoisting
// // but if we use var,let,const then it will not be hoisted to the top of the code
// var a;
// a=10;
// console.log(a);
// // output: 10
// this is called hoisting
// so we should always use var,let,const to avoid hoisting
// hoisting is a javascript mechanism where variables and function declarations
//  are moved to the top of their scope before code execution. 
//  this means that no matter where functions and variables are declared, 
// they are moved to the top of their scope regardless of whether their scope is global or local.
// Hoisting allows functions to be safely used in code before they are declared.


// var VS let VS const
// var is function scoped
// let is block scoped
// const is block scoped

// var:
//     - Scope: function scope (not block)
//     - Hoisting: Hoisted and initialized with undefined
//     - Red-declaration: Allowed with same scope
//     - Re- assignement: Allowed

// let:
//     - scope: Block scope ({})
//     - Hoisting: Hoisted but not initialized (TDZ)
//     - Re-declaration: Not Allowedin the same scope
//     - Re-assignement: Allowed

// const:
//     - scope: block scope
//     - Hoisting: Hoisted but not initialized (TDZ)
//     - Re-declaration: Not Allowedin the same scope
//     - Re-assignement: not Allowed

// tbz 
// 

// local and global variable with same name
var a = 10;
// local scope
function add(){
    var a=5;
    console.log(a);
}
add();
console.log(a); // error because it is not defined in the global scope

//global scope
// var b = 20;
// function add(){
//     console.log(b);
// }      


