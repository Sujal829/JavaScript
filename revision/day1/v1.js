// synchronous code 
// it will execute line by line 
// console.log("hello");
// console.log("world");



// Asychronous JS 
// it is a non blocking code
// it will not wait for the previous task to complete and move on to next task
// execution parallelly

// timers
// 1. setTimeout(callback, delay)
// 2. setInterval(callback,delay)
// 3. clearTimeout(timerId)
// 4. clearInterval(timerId)

// callback()
// promise
// async await

// asynchronous code 
// console.log("hello");
// setTimeout(()=>{
//     console.log("hello world")
// },2000)
// console.log("bye");


//setInterval();
//it is used to execute a function repeatedly after a specified interval of time.
//syntax:setInterval(callback,interval);
//setInterval(()=>{},interval);

// let count = 0;
// const timerId=setInterval(()=>{
//     console.log(count++);
// },1000);



// Promise 
// promise is an object that represents the eventual completion or failure of an asynchronous operation.
// syntax: const promise=new Promise((resolve,reject)=>{});
// pending
// fulfilled -> return resolved  -> execute then()
// rejected -> return rejected  -> execute catch()

function fetchData(){
    return new Promise((resolve,reject)=>{
        // resolve("data fetched successfully");
        reject("error fetching data");
    });
}

// fetchData().then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error);
// });
    
// asys await 
// asyc returns a promise
// await waits for the promise to be resolved or rejected
// await can only be used inside an async 

function login(userId,userName,pass)
{
    return new Promise((res,rej)=>{
        console.log(userName," Login");
        res({userId:userId,name:userName})
    })
}

function profile(data){
    return new Promise((res,rej)=>{
        console.log(data.name,"Profile");
        res({orderId: 1,orderName: "laptop",qty:5})
    })
}

function order(order){
    return new Promise((res,rej)=>{
        console.log(order);
        res("order successfull")
    })
}

async function main(){
const login1 = await login(2,"sujal","password");
const profile1 = await profile(login1);
const order1 = await order(profile1);
console.log(order1);
}
main();
