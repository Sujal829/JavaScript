// for of loop 
// it is used to iterate over the values of an iterable object such as array or string.
// syntax:
    // for(const variable of iterable){
    //     // code block to be executed
    // }

let arr = [2, 4, 5, 7];
for (const num of arr) {
    console.log(num);
}
// output: 2 4 5 7

let str = "hello";
for (const char of str) {
    console.log(char);
}
// output: h e l l o


// for in loop
// it is used to iterate over the properties of an object.
// syntax:
    // for(const key in object){
    //     // code block to be executed
    // }
    
let obj = {name:"sujal", age:20};
for (const key in obj) {
    console.log(key);
}
// output: name age

let obj1 = {name:"sujal", age:20};
for (const value in obj1) {
    console.log(obj[value]);
}
// output: sujal 20

// diffrence between for of and for in loop
// for of loop iterates over the values of an iterable object.
// for in loop iterates over the keys of an object.
// for of loop can only be used with iterable objects.
// for in loop can be used with both iterable objects and non-iterable objects.



// symbol 
// it is a primitive data type that represents a unique identifier.
// 
// syntax:
    let symbolName = Symbol();
    console.log(symbolName); // OP Symbol()
    console.log(typeof symbolName); // op symbol

    let id = Symbol('id');
    let id1 = Symbol('id');
    console.log(id == id1); // op false
    console.log(id === id1); // op false
    

    console.log(Symbol() === Symbol()); // op false
    console.log(Symbol("foo") === Symbol("foo")); // op false


    // Object

let marks = Symbol('Makrs');
let student = {
    name : 'Sujal',
    class : 12,
    [marks] : 98
}

console.log(student);
console.log(student[marks]); // op 98

// prevent property name 

let age = Symbol('age');
let person = {
    name : 'Sujal',
    [age] : 20
}
let person1 = {
    name : 'Sujal',
    [age] : 22
}
console.log(person); // op { name: 'Sujal', [Symbol(age)]: 20 }
console.log(person1); // op { name: 'Sujal', [Symbol(age)]: 22 }


// BigInt
// it is a primitive data type that represents large integers.

console.log(Number.MAX_SAFE_INTEGER); // op 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // op -9007199254740991

// syntax:
    let bigIntValue = BigInt(12345678901234567890);
    console.log(bigIntValue); // op 12345678901234567890n
    console.log(typeof bigIntValue); // op bigint




// Map() // it returns a new Map object.
// map() 


// it is a collection of key-value pairs.
// syntax:
    // let map = new Map([['key1','value1'],['key2','value2']]);
    let map = new Map([
        ['name','sujal'],
        ['age',20],
        ['city','delhi']
    ]);
    console.log(map); // op Map(3) {'name' => 'sujal', 'age' => 20, 'city' => 'delhi'}

// set() // it returns a set of unique values.
    let per = new Map();
    per.set('name','sujal');
    per.set('age',20);

    console.log(per); // op Map(2) {'name' => 'sujal', 'age' => 20}

//  get() // it returns the value of a specified key.

    console.log(per.get('name')); // op sujal
    console.log(per.get('age')); // op 20

console.log(map.size); // op 3

    
// Set() // it returns a set of unique values.    
// syntax:
//    let set = new Set();
    let set = new Set([1,2,2,3,3,3,4,4,5,6,6,7,8,8,8,9]);
    console.log(set); // op Set(9) {1, 2, 3, 4, 5, 6, 7, 8, 9}
    set.add(10);
    set.add(11);
    console.log(set); // op Set(11) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, …}
    set.delete(1);
    console.log(set); // op Set(10) {2, 3, 4, 5, 6, 7, 8, 9, 10, …}
    set.clear();
    console.log(set); // op Set(0) {}


// class 
// it is a blueprint for creating objects.
// class is the collection of properties and methods.
// properties are variables and methods are functions.

// syntax:
    // class ClassName{
    //     constructor(){
    //         // code block
    //     }
    // }

class emp {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getDetails(){
        console.log(`Name:${this.name}, Age:${this.age}, Salary:${this.salary}`);
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

let emp1 = new emp('sujal',20,50000);
emp1.getDetails(); // op Name:sujal, Age:20, Salary:50000
emp1.greet(); // op Hello sujal

