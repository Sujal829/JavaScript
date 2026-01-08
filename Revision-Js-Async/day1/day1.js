// function a(callback)
// {
//        console.log("a");
//        callback();
// }
// function b(){
//     console.log("b");
// }
// a(b);

// 1. setTimeout(callback, delay)
// console.log("HI")
// setTimeout(()=>{
//     console.log("hello");
// },2000);
// console.log("end")

// 2 setInterval(callback , delay)
// const a =setInterval(()=>{
//     console.log("MSg");
// },1000);

// setTimeout(()=>{
//     clearInterval(a);
// },4000);

// const p =new Promise((res, rej)=>{
//     rej();
// })
// p.then(()=>{console.log("Hello")})
// .catch(()=>{console.log("Error")})

// const pizzaorder =new Promise((res,rej)=>{
//     let shop = false;
//     if(shop){
//         res("Pizza Deliverd");
//     }
//     else{
//         rej("Not Available");
//     }

// })
// pizzaorder
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.log(err)})


// function a(callback)
// {
//     console.log("a")
//     callback();
// }
// function b(callback)
// {
//     console.log("b")
//     callback();
// }
// function c(callback)
// {
//     console.log("c")
//     callback("msg");
// }

// a(()=>{
//     b(()=>{
//         c((msg)=>{
//             console.log(msg);
//         })
//     })
// })

// function step1(input,callback)
// {
//     console.log("setp1",input);
//     callback(input);
// }
// function step2(input,callback)
// {
//     console.log("setp2",input);
//     callback(input);
// }
// function step3(input,callback)
// {
//     console.log("setp3",input);
//     callback("Done!");
// }

// step1("start",(res)=>{
//     step2(res,(res)=>{
//         step3(res,(msg)=>{
//             console.log(msg);
//         })
//     })
// })

function step1(input) {
    return new Promise((res, rej) => {
        console.log("setp1", input);
        res(input);
    });

}
function step2(input) {
    return new Promise((res, rej) => {
        console.log("setp2", input);
        res(input);
    })

}
function step3(input) {
    return new Promise((res, rej) => {
        console.log("setp3", input);
        res("Done!");
    })
}

// step1("data")
// .then((res)=>step2(res))
// .then((res)=>step3(res))
// .then((msg)=>{console.log(msg)})
// .catch((err)=>{console.log(err)})

// async function main()
// {
//     let a = await step1("data");
//     let b = await step2(a);
//     let msg = await step3(b);
//     console.log(msg);
// }
// main();


// promise all
// it will return the array of promises

// let p1 = Promise.reject("Promise 1");
// let p2 = Promise.resolve("Promise 2");
// let p3 = Promise.resolve("Promise 3");

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log("error",res)
// })

// var a = 10;
// function test(){
//     console.log(a);
// }
// // test();

// function test2()
// {
//     let a=5;
//     console.log(a);
// }
// test2();
// console.log(a);

// function test3()
// {
//     var a=6;
//     console.log(a);
// }
// test3();

// if(true){
//     let b=7;
//     console.log(b);
// }
// console.log(b); // error 

// var let const 
// var -> global scope - hoisted
// let and const -> block scope  - not hoisted - not initilised
// TDZ
// a=10;
// console.log(a);
// var a;

// test();
// function test () {
//     console.log("msg")
// }

// n = 10;
// console.log(n);
// let n;

// ES6 Features
//let and const
// var u = 10;
// u =11;
// var u = 12;

// let s = 5;
// s= 6;
// let s =7
// s =10;

// const pi = 3.14;
// pi = 3;
// const pi=9;

// arrow function
// let arr =()=>{
//     console.log("arrow func");
// }
// arr();

// IIFE -> Immediately Invoked Function Expression
// (function(){
//     console.log("Hello")
// }());
// annonymous function
// (() => {
//     console.log("Hello")
// })();

// class a{
//     constructor(name){
//         this.name=name;
//     }
//     sayHi(){
//         console.log(`hi ${this.name}`);
//     }
//     destory(){
//         delete this.name;
//     }
// }

// const obj=new a('Sujal');
// obj.sayHi();
// obj.destory();
// obj.sayHi();

// template literals

// let name ="Sujal";
// let str = `Lorem ipsum dolor sit amet consectetur,
//  adipisicing elit.Provident reprehenderit architecto ${name}
//  totam repellat exercitationem?Aspernatur molestiae 
//  nemo est aliquid cumque!`;
//  console.log(str);

// spread operator ( ... )
// let arr =[1,2,3];
// let arr2=[...arr];
// console.log(arr2);

// let arr3 =[4,5,6];
// let arr4=[...arr,...arr3];
// console.log(arr4);

// rest parameter (...)


// let numbers = [1,2,3,4];

// function sum (...numbers){
//     return numbers.reduce((a,b)=>a+b)
// }
// console.log(sum(1,2,3,4));


// int a =10;
// a= 10;
// a="string";
// nullishing operator ??
// let user = "";
// let userName =user ?? "Guest";
// console.log(userName);
