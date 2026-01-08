// Promise is a javascript object for asynchronous operation.

//promise is the class in JS.
// syntax
// new Promise();

// Promise in js is an object that represents the completion or failure 
// of an asyncronous operation and its resulting value.

// it will give you data later 

// why do we need promise?

// callback hell
// callback function inside another call back function
// nested callbacks
// not easy to understand
// difficult to identify the issue or error
// hard to maintain
// Simulating async tasks with setTimeout
// eg:
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 done ");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 done ");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 done ");
//     callback();
//   }, 1000);
// }

// // Callback Hell  (nested)
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps finished ");
//     });
//   });
// });



// Benefits of using promises
// 1. Easy to read code
// 2. Easy to handle errors
// 3. Better handling of asynchronus operations
// 4. Better flow control
// 5. Better Error Handling
    
// states of promise
// pending, fulfilled, rejected
// pending -> still running (not yet finished) 
// fulfilled -> success
// rejected -> failed

//      if fullfilled -> execution goes to then()

//      if rejected -> execution goes to catch()

// A promise does not return true/false.
// Instead, it resolves (success) or rejects (failure).
// .then() handles success, .catch() handles errors.

// const pendingPromise = new Promise();
// console.log("Pending Promise:",pendingPromise);

// const resolvedPromise = new Promise((resolve)=>{
//     console.log("Resolved Promise");
// });
// console.log("Resolved Promise:",resolvedPromise);

// const myPromise = new Promise(function(resolve,reject){
//     // doing some heavy work (network,read files)
//     // resolve -> when job done successfully
//     // reject -> when job fails
//     resolve('done');
// })
// console.log(myPromise);

// const rejectedPromise = new Promise(function(resolve,reject){
//     // doing some heavy work (network,read files)
//     // resolve -> when job done successfully
//     // reject -> when job fails
//     reject('error');
// })


// =============================================================================

// const promise = new Promise((res,rej)=>{
//     let sucess = true;
//     if(sucess){
//         res('success')
//     }else{
//         rej('failure')
//     }
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });    


let pizzaOrder = new Promise((resolve, reject) => {
  let restaurantOpen = true;

  if (restaurantOpen) {
    resolve("Pizza delivered 🍕");
  } else {
    reject("Restaurant closed ❌");
  }
});

pizzaOrder
  .then(pizza => console.log("Success:", pizza))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Order finished ✅"));


// fetch() is a built-in JavaScript function used to make HTTP requests 
// It’s asynchronous → it returns a Promise.
// // fetch web api
// fetch('https://jsonplaceholder.typicode.co/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error=>{console.log(error);})
  

// call back to promise conversion
// function getdata(cb){
//     setTimeout(()=>{
//         cb('Data!');
//     },1000)
// }

// getdata((data)=>{ console.log(data)});

// function getDatabyPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Data by promise');
//         },1000)
//     })
// }
// getDatabyPromise()
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})
    
    
