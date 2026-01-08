// // 

// function login(useId,userName,pass,callback){
//     setTimeout(
//         ()=>{
//             console.log(userName,"login");
//             callback({userId:useId,name:userName})
//         }
//     ,1000)
// }

// function profile(name,callback){
//     setTimeout(()=>{
//         console.log(name.name," User Logined");
//         callback({id: 1, producr1:"laptop"})
//     },1000)

// }

// function viewOrder (oreder,callback){
//     setTimeout(() => {
//         console.log(oreder);
//         callback("ooreder sucessfull");
//     }, 1000);
// }


// login(1,"sujal","sujal@123",(res1)=>{
//     profile(res1,(res2)=>{
//         viewOrder(res2,(final)=>{
//             console.log(final);
//         })
//     })
// })


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

login(1,"sujal","sujal@123")
.then((res)=>profile(res))
.then((res)=>order(res))
.then((res)=>console.log(res))
.catch(err=>console.log(err))
