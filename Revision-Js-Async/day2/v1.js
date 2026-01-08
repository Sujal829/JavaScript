import {add} from './maths.js'
import  sujal from './maths.js'
function login(greet,callback)
{
    console.log(greet);
    let id = 1;
    let pass = 123;
    let user = {id:id,password:pass};
    console.log(`user login ${user.id}`);
    callback(user);
}
function display(user , callback){
    console.log("profile")
    console.log("user",user.id);
    console.log("pass",user.password)
    let post = [
        {no: 1, title:"post1"},
        {no: 2, title:"post2"},
        {no: 3, title:"post3"}
    ]
    callback(post);
}
function showPost(posts){
    posts.forEach(function(post){
        console.log(post.title);
    })
}

// login("Welcome",(res)=>{
//     display(res,(res)=>{
//         showPost(res);
//     })
// })

// destructuring
// let arr = [12,13,14];
// console.log(arr);
// let [a,b,c]=arr;
// console.log(a)
// console.log(b)
// console.log(c)

// let obj ={
//     name: "sujal",
//     lastname: "jathar"
// }
// console.log(obj)
// let {name,lastname}=obj;
// console.log(name);
// console.log(lastname);

// Symbol
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };
// let id = Symbol('id');
// person[id] = 140353;
// console.log(person);

// BigInt()
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9007199254740991+2);
// console.log(BigInt(9007199254740991)+BigInt(2))

// Map()
// let map = new Map([
//     ["fname","Sujal"],
//     ["lname","Jathar"],
//     ["age",26]
// ]);
// map.set("gender","male");
// console.log(map)
// let fname = map.get("fname");
// console.log(fname);

// Set Methods
// let set = new Set([1,2,3,4,5,3,2,1,4,5,3,3,2,2]);
// console.log(set);
// set.add(3);
// console.log(set);

// Class 

// class a {
//     // static property
//     static count = 10;

//     // static method
//     static greet(){
//         console.log("Hello");
//     }
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
    
//     getname(){
//         console.log(this.name);
//     }
//     getage(){
//         console.log(this.age);
//     }
// }
// const obj= new a("sujal",26);
// console.log(obj.name);
// console.log(obj.age);

// console.log(a.count);
// a.greet();

// const obj =new a();
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age)
// obj.getname();

// Modules
// console.log(add(5,6));
// console.log(sujal(10,5));

// constructor
// constructor is a function that invoke when we create a object of that class 
// we use constructor for initilize the value in our class


// access modifier
// private - only accessible inside the 
// class b{
//     #count = 20;
//     getCount(){
//         return this.#count;
//     }   
// }
// const obj1 = new b();
// console.log(obj1.getCount());
// console.log(obj1.#count);

// protected - only accessible inside the class and its child classes
// class c {
//     _count = 20;
    // getCount(){
    //     return this._count;
    // }
// }
// class d extends c{
//      getCount(){
//         return this._count;
//     }
// }
// const boj2 = new d();
// console.log(boj2.getCount());

// set and get method 


class student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name=name;
    }

}
// const obbj =new student("sujal",26);
// console.log(obbj.getName);
// obbj.setName="manish";
// console.log(obbj.getName);

// closure function 

// function outer(){
//     var x=10;
//     return function inner(){
//         x++;
//         console.log(x);
//     }
// }

// const innerrr =outer();
// innerrr();
// innerrr();
// innerrr();

// currying function 
// function sum(a){
//     return function add(b){
//         return a+b
//     }
// }
// console.log(sum(3)(5));

// infinite currying function 
// function sum(a){
//     return function add(b){
//         if(b){
//             return sum(a+b);
//         }
//         else{
//             return a;
//         }
//     }
// }
// console.log(sum(3)(4)(5)(6)());

// pure function 
// function add1 (a,b){
//     return a+b;
// }
// console.log(add1(3,4));
// console.log(add1(3,4));


// // impure function 
// let a=10;
// function add2(b){
//     a=a+1;
//     return a+b;
// }
// console.log(add2(5));
// console.log(add2(5));
// console.log(add2(5));

// higher order function 
// function a(callback){
//     console.log("a")
//     callback();
// }
// function b(){
//     console.log("b");
// }
// a(b);

// first class function 
// let a =function(){
//     console.log("hello");
// }
// a();

// generator function

// function* gen(){
//     console.log("hhello");
//     yield 1;
//     console.log("bye");
//     yield 2;
// }
// let g =gen();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// iterator function
// let arr=[1,2,3];
// const it=arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// call VS apply VS bind

let obj ={
    name:"sujal",
    age:26
}

function disp(tal,city){
    console.log(this);
    console.log(`Hello ${this.name} tal ${tal}  city ${city}`)
}
// disp.call(obj,"solapur","pune");
// disp.apply(obj,['solapur','pune']);
// let bound =disp.bind(obj,'solapur','pune');
// bound();

// let obj5 ={
//     name:"sujal",
// }
// obj5.__proto__.getname=function(){
//     console.log(this.name);
// }
// // console.log(obj5);
// obj5.getname();



// copy object 
// reference copy
// let object={
//     name:'sujal',
// }
// let object2 = object;
// console.log(object2);
// object2.name='manish';
// console.log(object);

// shallow copy
// let object={
//     name:'sujal',
//     address:{
//         city:'pune',
//         state:'maharastra'
//     }
// }
// let object2 ={...object};
// console.log(object2);
// object2.name='manish';

// console.log(object);
// console.log(object2);

// object2.address.city='mumbai';
// console.log(object);
// console.log(object2);

// Deep Copy
// let object={
//     name:'sujal',
//     address:{
//         city:'pune',
//         state:'maharastra'
//     }
// }
// let object2 = structuredClone(object);
// // console.log(object2); 
// object2.address.city='mumbai';
// console.log(object);
// console.log(object2);

