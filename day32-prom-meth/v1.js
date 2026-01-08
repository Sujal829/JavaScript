// callback hell

// function s1(callback){
//     console.log("first function :");
//     callback('data 1');
// }

// function s2(input2,callback){
//     console.log("Second function :",input2);
//     callback("data 2");
// }

// function s3(input3,callback){
//     console.log("Third function :",input3);
//     callback("Data 3");
// }

// s1((res1)=>{
//     s2(res1,(res2)=>{
//         s3(res2,(res3)=>{
//             console.log(res3);
//         })
//     })
// })


// function p1 (inp1){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("first p",inp1);
//         res(inp1)
//     },1000)
// })
// }

// function p2(inp2){
//     return new Promise ((res)=>{
//         setTimeout(()=>{
//             console.log("second p",inp2)
//             res(inp2)
//         },1000)
//     })
// }


// function p3(inp3){
//     return new Promise ((res)=>{
//         setTimeout(()=>{
//             console.log("third p",inp3)
//             res(inp3)
//         },1000)
//     })
// }

// p1('Data')
// .then((res1)=>p2(res1))
// .then((res2)=>p3(res2))
// .then((res3)=>console.log(res3))
// .catch(err=>console.log(err))



// promise 





// promise.all
// promise.allSettled
// promise.race
// promise.any


// Promise.all it takes array of promises and return a single promise
//  which is resolved when all the promises are resolved or rejected 
// if any one of them gets rejected.
const p1 = Promise.resolve('P1');
const p2 = Promise.reject('P2');
const p3 = Promise.resolve('P3');

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res); // 
//}) 

// Promise.allSettled returns an array of objects with status and value.
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
})

// Promise.race returns the first settled promise.
Promise.race([p1,p2,p3]).then((res)=>{
    console.log("RACE",res);
})

// Promise.any returns the first fulfilled promise.
Promise.any([p1,p2,p3]).then((res)=>{
    console.log("ANY:",res);
})
 // diff in race and any is that race will reject if any one of them rejects but any will not.
// RACE Returns the first settled promise → whether it’s resolved OR rejected.
// ANY Returns the first fulfilled promise. If all promises are rejected, then it throws an error.
// ANY Returns the first fulfilled (resolved) promise.