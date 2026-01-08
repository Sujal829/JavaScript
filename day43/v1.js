// function ExecutionContext(){}
// function a(){}

// Global Execution Context
//      stack
// stack memory
// heap memory

// global execution context

// - when code starts , it creat the global execution context
// - contex has:
//    Memory creation phase
        // varaiable & Functions are allocated in memory
        // execution phase: code runs line by line
// - only one GEC exists for the whole program.  


// 2. Call stack:
    //- woorks on LIFO to keep track of execution 
    // - 

// satck memory - stores variables and functions primitives values(numbers,string,bool,null)
// heap memory - stores objects, arrays etc.



// Global code
let x = 10; // primitive value stored in stack memory
let user = {name : "sujal"}; // object stored in heap memory

function greet(msg){
    let text = msg +' ' +user.name;
    return text;
}

function main(){
    let msg = greet('hello');
    console.log(msg);
}
main();

// Global execution context
// memory allocation
// x -> undefined
// user -> undefined
// greet -> function
// main -> function

// execution phase
x=10; //stored in stack memory
user={name:"sujal"};//stored in heap memory

greet("hello"); //pushed into call stack
msg="hello"; //stored in stack memory
console.log(msg); //printed hello








// 🌍 What is an Execution Context?
// An Execution Context (EC) is the environment where JavaScript code is evaluated and executed.
// It’s like a workspace or container that holds everything JS needs to run your code — variables, functions, and the value of this.

// 🧩 1️⃣ Types of Execution Contexts
// There are 3 main types:

// Type	                                            Description
// Global Execution Context (GEC)	        Created when the JS program starts.
// Function Execution Context (FEC)	        Created whenever a function is invoked.


// 🏁 Global Execution Context (GEC)
// When you start running any JS file:
// The GEC is created.


// 🧮 Function Execution Context (FEC)
// Each time you call a function, JavaScript creates a new execution context for that function.
// ➡️ Each FEC is independent but can access:
// Its own variables
// Outer scopes (via scope chain)


// ⚙️ 2️⃣ The Execution Context Lifecycle
// Each context (GEC or FEC) is created in two phases:

// 🔹 (1) Creation Phase (Memory Creation / Hoisting)
// During this phase:
// A new execution context is created.
// Memory (Variable Object) is allocated for:
// Variables (var → initialized as undefined)
// Functions (whole function is hoisted)

// 🔹 (2) Execution Phase
// Now, the code runs line by line:
// Variables get assigned actual values.
// Functions get executed.
// New contexts may be created (for function calls).

// ⚙️ 3️⃣ The Execution Stack (Call Stack)
// All Execution Contexts are managed using a stack structure (LIFO — Last In, First Out) called the Call Stack.

let a = 10;

function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
}

first();
console.log("End");


// 🧭 Step-by-Step Execution:
// Global Context created
// Variables a, first, and second added.
// a is set to 10.
// first() called
// A new Function Execution Context (FEC) for first is created.
// Added on top of Call Stack.
// Inside first, second() is called.
// A new FEC for second is created and added to stack.
// second finishes → removed from stack.
// first finishes → removed from stack.
// Back to Global Context → console.log("End") runs.
// GEC is finally popped off after the script ends.

