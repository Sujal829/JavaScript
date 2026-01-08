// falsy values
// false
// 0
// ""  empty string  | '' || `` empty template literals 
// null | undefined | NaN | not a number | not defined


// truthy value
// " "   space in the string is also considered as true
// "0"
// []
// {}


// OOPs concept in js 
// Object oriented programming 
//      1. Class : collection of properties and methods
//      2. Object : instance of class / real world entity
//      3. Encapsulation : hiding the data or method inside an object 
//      4. Polymorphism : one thing many forms | same function name but different parameters
//      5. Abstraction : showing only necessary information to user and hiding unnecessary details
//      6. Inheritance : child class can inherit the property from parent class | reusing code
            // -> Single level inheritance
            // -> Multi-level inheritance
            // -> Multiple inheritance
            // -> Hierarchical inheritance

// - javascript is not fully oops language

// Benefits of using oops concepts :
//     1. Code Reusability
//     2. Easy to maintain
//     3. Easy to understand
//     4. Easy to debug
//     5. Easy to extend
//     6. Easy to test


// Encapsulation
// it is used for hiding the data or method inside an object 
// we can achieve encapsulation by using closures

class Car{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }

    drive(){
        console.log(`Driving ${this.model} car with ${this.color} color`);
    }
}
let car1 = new Car("red", "BMW");
car1.drive();
console.log(car1);




// Polymorphism
// it is used for one thing many forms | same function name but different parameters

class bird{
    sound(){
        return 'tweet tweet';
    }
}

class dog{
    sound(){
        return 'bark bark';
    }
}

class cat{
    sound(){
        return 'meow';
    }
}

let b = new bird();
let d = new dog();
let c = new cat();

d.sound(); // bark bark
c.sound(); // meow
b.sound(); // tweet tweet


// Inheritance
// it is used for child class can inherit the property from parent class | reusing code

class Animal{
    constructor(name){
        this.name = name;
    }
}

class dog extends Animal{
    disp (){
    console.log(name); // dog
    }
}

let dog = new Animal('dog'); // Animal {name: 'dog'}
let dog1 = new dog();
dog.disp(); // dog



// Multiple inheritance
// it is used for multiple classes can inherit the property from single class | reusing code

// Hierarchical inheritance 
// it is used for multiple classes can inherit the property from single class | reusing code
// parent -> child1 , child2 , child3
class Animal{
    constructor(name){
        this.name = name;
    }
}
class Bird extends Animal{
    constructor(name, type){
        super(name);
        this.type = type;
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
}
class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
}

let b1 = new Bird('parrot', 'bird');
let d1 = new Dog('dog', 'labrador');
let c1 = new Cat('cat', 'persian');
console.log(b1); // Bird {name: 'parrot', type: 'bird'}
console.log(d1); // Dog {name: 'dog', breed: 'labrador'}
console.log(c1); // Cat {name: 'cat', breed: 'persian'}


// Multilevel inheritance
// it is used for child class can inherit the property from grandparent class | reusing code
// grandparent -> parent -> child
class Animal{
    constructor(name){
        this.name = name;
    }
}
class Bird extends Animal{
    constructor(name, type){
        super(name);
        this.type = type;
    }
}
class Parrot extends Bird{
    constructor(name, type, color){
        super(name, type);
        this.color = color;
    }
}
let p1 = new Parrot('parrot', 'bird', 'green');
console.log(p1); // Parrot {name: 'parrot', type: 'bird', color: 'green'}


// Multiple inheritance
// it is used for multiple classes can inherit the property from multiple class | reusing code
// not possible in js
// A B  | C: A,B
// a b c extend a,b 


// Abstraction
// it is used for showing only necessary information to user and hiding unnecessary details
// we can achieve abstraction by using closures

class coffee{
    brew(){
        console.log('brewing coffee');
    }
    grind(){
        console.log('grinding coffee');
    }
    boil(){
        console.log('boiling water');
    }
    serve(){
        console.log('serving coffee');
    }
    prepare(){
        this.boil();
        this.grind();
        this.brew();
        this.serve();
    }
    prepareCoffee(){
        this.prepare();
    }
}

let coffee = new coffee();
c.prepareCoffee(); // boiling water grinding coffee brewing coffee serving coffee