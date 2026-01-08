// async await
// async is a keyword which returns promise , 
// even if we return normal value it will convert into promise
// syntax
// async function fun(){
//     // block of coe 
// }


// await is used to wait for the promise to resolve or reject


// function fun(){
//     return new Promise ((res)=>setTimeout(()=>{res("data")},4000));
// }


// async function main1(){
//     console.log("inside async")
//     let data = await fun(); // it will wait until promise gets resolved
//                             // extract the result from promise and store in variable
//     return data;
// }
// function fun(){
//     return new Promise ((res)=>setTimeout(()=>{res("data")},4000));
// }
// console.log(main1());
// console.log("end")


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
