// // spread operator
// // definition: it is used to expand an array or object into individual elements

// let arr1 = [2, 3, 5];
// let arr2 = [...arr1]; // copy of the original array
// arr2.push(6);
// console.log(arr1); // 2, 3, 5
// console.log(arr2); // 2, 3, 5, 6

// let arr3 = [1,2,3,4];
// let arr4 = arr3;    // reference of the original array
// console.log(arr3); // 1,2,3,4
// console.log(arr4); // 1,2,3,4
// arr4.pop();
// console.log(arr3); // 1,2,3
// console.log(arr4); // 1,2,3

// let user = {
//     name : "sujal",
//     age : 20,
// }
// let p = {
//     ...user,
//     name : "shubham",
    
    
// }
// console.log(p); // {name:"shubham",age:20,name:"sujal"}

// let s = 'hello'
// let c = [...s];
// let d = {...s};
// console.log(d) //{0:'h',1:'e',2:'l',3:'l',4:'o'}
// console.log(c) // ['h','e','l','l','o']

// let arr = [1,2,2,3,1,4,1] ;
// let obj = {};
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++;
//     }else{
//         obj[arr[i]]=1;
//     }
// }
// console.log(obj);