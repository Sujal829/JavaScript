// Deboucing
// throttlning is a technique used to control how often a function can be executed. It ensures that the function is not called too frequently, which helps prevent performance issues and unwanted side effects.

//Errors in js 
// strics mode
// memoization
// memory leak

// 1 Debouncing
//      debounce is a technique used to delay the execution of a function
//  until after a certain amount of time has passed since its last invocation.
//  [input box ] -> rahul
//  name | conatct | salary | DOJ | 

function debouce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(args)
        },delay)
    }
}

function fetchData(query){
    console.log("fetching data",query);
}
const debouncedFetchData=debouce(fetchData,3000);

document.getElementById('searchInput').addEventListener('keyup',(e)=>{
    const query=e.target.value;
    debouncedFetchData(query); // call the debounced function instead of fetchData directly
}) 


//2 Throttling
//     throttling is a technique used to limit the rate at which a function can be invoked.
//  It ensures that the function is only executed once every specified interval,
//  regardless of how many times it's triggered within that interval.

function throttle(fn, delay) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
}

const throttledFunction = throttle(() => console.log("button clicked"), 3000);

document.getElementById('button').addEventListener('click', throttledFunction);

// Error in JS:
// 1 SyntaxError: This error occurs when there is an issue with the syntax of your code. For example, forgetting to close a bracket or using an invalid keyword will result in this type of error.
// 2 ReferenceError: This error occurs when you try to access a variable or object that does not exist. For example, trying to use a variable before declaring it will result in this type of error.
// 3 TypeError: This error occurs when you perform an operation on a value that is of the wrong type. For example, trying to add a string and a number without converting them first will result in this type of error.
// 4 RangeError: This error occurs when you pass a value outside the valid range for a particular operation. For example, passing a negative index to an array method like splice() will result in this type of error.



// how to handle errors in js?
// try catch finally

try{
    console.log(a+b);
}catch(err){
    console.log(err.message);
}finally{
    console.log("i am always executed");
}



// strict mode
// it is a feature introduced in ECMAScript 5 
// that allows you to write more secure JavaScript code by enforcing stricter rules and preventing common mistakes.
// it is enabled by adding "use strict"; at the beginning of a script or function.


"use strict";
// x=10; // throws reference error because x is not declared
// console.log(x);




// memoization
// Memoization is a technique used to optimize functions by caching their results 
// so they don't have to be recalculated each time they're called.
// same input gives same output
// Memoization is an optimization technique that stores the results of expensive function calls 
// and returns a cached result when the same inputs occur again, avoiding re-computation

    function memoization(fn){
        const cache={};
    return function(n){
        if(cache[n]){
            console.log(`catched${cache[n]}`);
            return cache[n];
        }else{
            let result=fn(n);
            cache[n]=result;
            return result;
        }
    }
}   
const  fn = (n)=>{
    if(n===0 || n===1){
        return 1;
    }else{
        return n*fn(n-1);
    }
}
    const factorial=memoization(fn);
    console.log(factorial(5));
    console.log(factorial(6));
    console.log(factorial(5));

// Memory Leak
// A memory leak occurs when unused variables are still occupying space in memory 
// even though they are no longer needed.
// This can cause performance issues and eventually lead to crashes.

// // Example:
// var arr=[];
// for(let i=0;i<10000;i++){
//     arr.push(i);
// }
// arr=null;
