// Synchronous JS
// it is a type of programming where each statement is executed line by line.
// It ensures that statements are executed sequentially, one after another.
// it will execute the task in order. like one after other.
// we have to wait to complete the previous task before moving to the next.
// console.log("Hello Js ");

// function add(a,b){
//     return a+b;
// }
// let sum=add(34,67);
// console.log(sum);
// console.log("Bye");

// Asynchronous Programming in JavaScript
// In JavaScript, asynchronous programming allows your code to run tasks in the background without blocking the main thread.
// This means JS can start one task, and move on to the next while waiting for the first one to finish 
// — perfect for tasks like fetching data from APIs, timers, or reading files.
// we can execut the task parallelly. multiple task at same time.

// timers
// 1. setTimeout(callback, delay) // allow us to schedule a callback function to be executed after a specified amount of time has passed.
// 2. setInterval(callback,delay) // allow us to repeatedly execute a callback function at regular intervals.
// 3. clearTimeout(timerId) // The clearTimeout() method clears a timer set with the setTimeout() method.
// 4. clearInterval(timerId) // The clearInterval() method clears a timer set with the setInterval() method.

// console.log("Started");
//     setTimeout(()=>{
//         console.log("hello world");
// },5000)    
// console.log("Ended");

// // setInterval
// interval = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// clear interval
// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);



// Promise in js is an object that represents the completion or failure 
// of an asyncronous operation and its resulting value.

// const promise=new Promise((resolve,reject)=>{
//     let completed=false;
//     if(completed){
//         resolve('Task Completed');
//     }else{
//         reject('Task Failed');
//     }
// });

// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// }); 


// asyc await in js
async function fetchData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data=await response.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}

// fetchData();


// Function that returns a promise
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Async function using await
async function showData() {
  console.log("Fetching data...");

  const result = await getData(); // waits here until promise resolves
  console.log(result);

  console.log("Task completed!");
}

showData();
