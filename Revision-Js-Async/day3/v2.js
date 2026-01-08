// event Bubling
// const parent = document.getElementById('parent');
// const btn = document.getElementById('btn');
// const inp = document.getElementById('inp');
// parent.addEventListener("click",()=>{
//     console.log("Parent Clicked");
// });

// btn.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("Button click");
// })

// inp.addEventListener("keyup",()=>{
//     console.log("input");
// })

// event Capturing
// const parent = document.getElementById('parent');
// const btn = document.getElementById('btn');
// parent.addEventListener("click",()=>{
//     console.log("Parent Clicked");
// },true);

// btn.addEventListener("click",()=>{
//     console.log("Button click");
// })

// event delegation
// const list = document.getElementById('list');
// list.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){
//         e.target.style.color = "blue";
//     }
// })


// Debouncing
// const serch = document.getElementById('serch');
// function showtext(text){
//     console.log(text);
// }
// function debounce(fn,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn(...args);
//         },delay)
//     }
// }
// const fun = debounce(showtext,1000);
// serch.addEventListener("keyup",(e)=>{fun(e.target.value)});

// Throttling

// const sub = document.getElementById('submit');

// function showtext(){
//     console.log("Clicked");
// }
// function throt (fn,delay){
//     let flag = true;
//     return function(){
//         if(flag){
//             fn();
//             flag=false;
//             setTimeout(()=>{flag=true},delay);
//         }
//     }
// }
// const fun = throt(showtext,3000);
// sub.addEventListener("click",fun);

// Erros in js
// try{
//     let a=5;
//     let b = 10;
//     console.log(a+b);
//     throw new Error("Error Occured");
// }
// catch(err){
//     console.log(err);
// }

// "use strict";
// x =10;

// Memoization
//    function memoization(fn){
//         const cache={};
//     return function(n){
//         if(cache[n]){
//             console.log(`catched${cache[n]}`);
//             return cache[n];
//         }else{
//             let result=fn(n);
//             cache[n]=result;
//             return result;
//         }
//     }
// }   
// const  fn = (n)=>{
//     if(n===0 || n===1){
//         return 1;
//     }else{
//         return n*fn(n-1);
//     }
// }
//     const factorial=memoization(fn);
//     console.log(factorial(5));
//     console.log(factorial(6));
//     console.log(factorial(5));

// memory leack
// // Example:
// var arr=[];
// for(let i=0;i<10000;i++){
//     arr.push(i);
// }
// arr=null;


// Observables
// function createObservable(subscribe){
//     return {subscribe};
// }

// const observable = createObservable((observer)=>{
//     observer.next('Hello');
//     observer.next('From observable');

//     setTimeout(()=>{
//         observer.next('After timeout');
//         observer.complete();
//     }, 4000)
    
// });
 
//  observable.subscribe({
//      next: (data)=>console.log(data),
//      error:(err)=> console.error(err),
//      complete:()=>console.log("completed")
//  });

