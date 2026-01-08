// Garbage collection
// Garbage collector is a program that automatically frees up memory when it's not needed anymore.
// It does this by tracking all the variables and objects in your code, and deleting any that are no longer being used.
// This helps to prevent memory leaks, which can cause performance issues or even crashes.


function test () {
    let obj = {name: "sujal"};
    console.log(obj.name);
}
test();
test = null;
//test(); // error because test is null now so we cannot call it again



// Destuctor 
// 


class timer {
    constructor() {
        this.counter=0;
        this.intervalId = setInterval(() => {
            this.counter++;
            console.log(this.counter);
        }, 1000);
    }
        destory(){
            clearInterval(this.intervalId);
            console.log("Stop");
        }
}

const myTimer = new timer();
setTimeout(()=> myTimer.destory(),5000); // after 5 seconds the timer will be destroyed



// Prototypel inheritance
// Every object has an internal property called [[Prototype]], which links it to another object.


let parent = {
    name : 'parent',
    greet: function(){
        console.log('Hello');
    }
}
console.log(parent);
const obj = Object.create(parent);
console.log(obj);
obj.name = 'child';
console.log(obj.name);
console.log(obj.greet());


function Person(name){
    this.name=name;
}
Person.prototype.sayHello=function(){
    console.log(`hello ${this.name}`);
}
const person=new Person('sujal');
person.sayHello();  


// --proto--
// The __proto__ property is a reference to the prototype of an object.
// It allows you to access properties and methods defined on the prototype chain.

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {   // add speak method to Animal prototype
    console.log(`${this.name} makes a noise.`);
}

const dog = new Animal('Dog'); // create a new instance of Animal with name 'Dog'
dog.__proto__.bark = function() {   // add bark method to Animal prototype using __proto__
    console.log(`${this.name} barks.`);
}
dog.bark(); // output: Dog barks.


