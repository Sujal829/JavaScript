// Generator function
// it is a special type of function that can be paused and resumed
// it uses the * symbol to indicate that it is a generator function
// it returns an iterator object which has next() method
// it can be used to create iterators for custom data structures
// it can also be used to implement coroutines

// syntax
function* generate(){
    yield 1;
    yield 2;
}

const gen = generate();
console.log(gen);
console.log(gen.next());// {value: 1, done: false} |
console.log(gen.next());// {value: 2, done: false}
console.log(gen.next());// {value: undefined, done: true}

//eg:
function* idGenerator(){
    let i=0;
    while(true){
        yield i++;
    }
}

const ids=idGenerator();
console.log('ID: ',ids.next().value);// 0
console.log('ID: ',ids.next().value);// 1
console.log('ID: ',ids.next().value);// 2


// iterator 
// it is an object that implements the iterable protocol
// it has a next() method that returns the next value when called
// it is used to iterate over collections like arrays, strings etc.
// it is used to create custom iterators for custom data structures
// it is used to implement generators
// works with arrays,strings,map,set
let arr=[1,2,3];

const it=arr[Symbol.iterator](); // get built in iterator from array
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }





// this 
// every function has access to 'this' keyword
// it refers to the current execution context
// it can refer to different things depending on how it is being invoked
// it can refer to the global object or the object that owns the function
// it can refer to the object that invokes the function
// it can refer to the object that contains the function
// it can refer to the object that is returned by the function
// it can refer to the object that is passed as argument to the function

// arrow functions do not have their own 'this'

// eg :
let obj = {
    name : 'john',
    age : 25,
    fun : function(){
        console.log(this);
    }
}
console.log(obj.fun());  // { name: 'john', age: 25, fun: [Function: fun] } |


// call VS apply VS bind
// to change the context of this keyword
// call() - calls a function with a given this value and arguments provided individually
// syntax : func.call(thisArg,arg1,arg2,...)
// eg :
function greet(city){
    console.log(this);
    console.log(`Hello ${this.name} from ${city}`);
}

let per = {
    name:'John',
    age:25,
    skills:['js','react']
}
let per2={
    name:'Jane',
    age:26,
    skills:['python','django']
}
greet.call(per,'Solapur'); 
greet.call(per2,'pune');

const bindGreet=greet.bind(per);
bindGreet('solapur');  // Hello John from solapur

// appply

greet.apply(per,['Solapur']); // Hello John from Solapur

// | Method  | When it runs?                | How to pass arguments?              |
// | ------- | ---------------------------- | ----------------------------------- |
// | `call`  | Immediately                  | List of arguments (comma-separated) |
// | `apply` | Immediately                  | Array of arguments                  |
// | `bind`  | Later (returns new function) | List or array (like call)           |



// apply() - calls a function with a given this value and arguments provided as an array
// syntax : func.apply(thisArg,[arg1,arg2,...])
// eg :
// function greet(name){
//     console.log(this);
//     console.log(`Hello ${name}`);
// }
// greet.apply(null,['Sujal']); // Hello Sujal

// bind() - creates a new function that, when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.
// syntax : func.bind(thisArg,arg1,arg2,...)
// eg :
// function greet(name){
//     console.log(this); 
//     console.log(`Hello ${name}`);
// }
// const boundGreet=greet.bind(null,'Sujal');
// boundGreet();// Hello Sujal

