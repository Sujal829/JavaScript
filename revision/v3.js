// this keyword context 
// this is a window object
console.log(this); // window object in browser and global object {} in node js

// insside function
function myFunc(){
    console.log(this); // window object in browser and undefined in node js
}
myFunc();

// inside Object
const person = {
    name: 'sujal',
    age : 20,
    about : function(){
        console.log(this);
    }
};
person.about(); // {name:'sujal',age:20,about:function(){}}

// arrow function
const person1 = {
    name: 'sujal',
    age : 20,
    about : () =>{
        console.log(this);
    }
};
person1.about(); // window object in browser and undefined in node js

const person2 = {
    name: 'sujal',
    age : 20,
    about : () =>{
        const show = function(){
            console.log(this.name);  //  empty if we convert it into arrow function 
             // then it will print the value of name because arrow function does not have its own this keyword 
             // it refers to parent's this keyword which is window object here.
        };
        show();
    }
};
person2.about();

// call apply bind method

const user1 = {
    firstName : "Sujal",
    lastName : "Jathar",
    age : 20,
    about : function(hobby,favMusician){
        console.log(`My Name Is ${this.firstName} And My Age Is ${this.age}.`);
        console.log(`I Like To Play ${hobby} And My Favourite Musician Is ${favMusician}`)
    }
};
user1.about('Cricket','Arijit Singh');

const user2 = {
    firstName : "Rahul",
    lastName : "Sharma",
    age : 25,
};

user1.about.call(user2,'Football','Atif Aslam');
user1.about.apply(user2,['Basketball','Arjit Singh']);
let func = user1.about.bind(user2,'Volleyball','Lata Mangeshkar');
func();










const car ={
    model : 'BMW',
    show(){
        console.log(`${this.name}`); 
    }
} 
car.show(); // undefined 
setTimeout(car.show,4000); // undefined because setTimeout takes only one argument as callback function so it will take only first parameter of show() i.
setTimeout(function(){car.show()},4000); // BMW
setTimeout(car.show.bind(car),4000); // BMW


// Class 
class Car{
    constructor(modal){
        this.modal = modal;
    }
    show(){
        console.log(`${this.model}`);
    }
    delayShow(){
        setTimeout(function () {
            console.log(`${this.model}`);
        },4000);
    }
}
Car.show(); // error
const car1 = new Car("BMW");
console.log(car1.model); // BMW
car1.delayShow(); // undefined  we need to convert it into arrow function to get the output.


const user3 ={
    name : sujal,
}
function hello(){
    console.log(this.name);
}
hello.call(user3); // sujal
hello.apply(user3); // sujal
let func1 = hello.bind(user3);
func1(); // sujal


const team = {
    title: 'Develop',
    members:['Sujal','Rahul'],
    listMembers(){
        this.members.forEach(member=>{
            console.log(`${member} (${this.title})`);
        });
    }
}
team.listMembers(); // Sujal (Develop) Rahul(Develop)

function outer(){
    this.value = 10;
    return function inner(){
        console.log(this.value);
    }
}
const fn = outer();
fn(); // undefined  if we convert inner function into arrow function then it will give us 10.

// var a,b;
// a=1;
// b=2;
// console.log(a+b); // 3
// console.log(a-b); // -1