//syncronous code
// means that we have to wait for one task to complete before executing the next task
//


//asyncronous code
// means that we can execute multiple tasks at a time
// non-blocking
// execution parallelly

// timers
// 1. setTimeout(callback, delay)
// 2. setInterval(callback,delay)
// 3. clearTimeout(timerId)
// 4. clearInterval(timerId)

// callback()
// promise
// async await

//setTimeout();
// it is used to execute a function after a specified amount of time.
// it takes two arguments:
// 1. callback function
// 2. delay in milliseconds
// syntax: setTimeout(callback,delay);
//setTimeout(() => {})

console.log("Started");
    setTimeout(()=>{
        console.log("hello world");
},5000)    
console.log("Ended");

//setInterval();
//it is used to execute a function repeatedly after a specified interval of time.
//syntax:setInterval(callback,interval);
//setInterval(()=>{},interval);

let count = 0;
const timerId=setInterval(()=>{
    console.log(count++);
},1000);
setTimeout(()=>{
clearInterval(timerId);
},5000);


//callstack
//it is a stack data structure which stores all the functions that need to be executed
// when a function is called,it is pushed into the callstack and when it returns,it is popped out from the callstack
//when there is no more function to be executed,the callstack becomes empty

// webapis
// webapis is the 
//it is an api provided by browser which provides some functionalities like setTimeout,setInterval etc..
//web apis are asynchronous
//web apis are non blocking
// web apis are non blocking because they do not block the main thread
// setTimeout() and setInterval() are part of web apis dom fetch 
// provided by browser


//micro task queue
//it contains all the tasks which are related to event loop
// it contains only one task 
// it contains only one task which is promise()
//promise() , async await (always run before normal callbacks)
// micro task has higher priority than macrotask
// promise() always runs before setTimeout()
// promise() always runs before setInterval()


//macro task queue
//it contains all the tasks which are not related to event loop
// it contains only one task which is settimeout()
//setTimeout
//setInterval

// Microtasks = smaller, high-priority tasks (Promises, queueMicrotask).
// Macrotasks = bigger, scheduled tasks (setTimeout, setInterval, I/O).

//event loop
//it is responsible for checking whether the callstack is empty or not
//if the callstack is empty,it will check the macro task queue and micro task queue
// if the macro task queue is not empty,it will take the first task from the macro task queue and push it into the callstack

// JavaScript is single-threaded (one chef).
// Event loop is the waiter deciding the order of tasks.
// Microtasks are VIP customers (served first).
// Macrotasks are normal customers (served after VIPs).
