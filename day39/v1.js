// closure 
// a Closure is function that has access to its own scope, the outer functions variables and global variable
// A closure gives a function access to variables from outside its scope.
function outer(){
    var b = 20;
    return function inner(){
        b+=10;
        return b;
    }
}
var c = outer();
console.log(c()); // 30
console.log(c()); //40
console.log(c()); //50
    









// currying functions
// - currying is technique of evaluating function with multiple arguments into sequence of functions with single argument
// a function that takes multiple arguments into a series of functions that each take one argument.

function add(a){
    return function(b){
        return a + b;
    }
}
console.log(add(1)(2)); // 3

function log(message){
    return function (context){
        return function (type){
            console.log(message,context,type);
        } 
    }
}

const logMessage = log('hello');
const user = logMessage('sujal');
user('admin');
const user2 = logMessage('manish');
user2('user');
// op 



// infinite currying
// it is the function which can be called again and again with different parameters,
// 
function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }else{
            return a;
        }
    }
}
console.log(add(1)(2)(3)(4)());





//  pure functions
// same input always gives same output
function sqr(n){
    return n*n;
}
console.log(sqr(2));

// impure function
// same input does not give same output
let num = 10;
function changeNum(){
    return num++;
}
console.log(changeNum());// 10
console.log(changeNum());// 11
console.log(changeNum());// 12


// higher order function
// it takes another function as an argument or returns a function as a result
// example map filter reduce etc..
function greet(name){
    return 'hi'+' '+name;
}
function greeting(greet,name){
    return greet(name);
}
console.log(greeting(greet,'sujal'));


function operator(x,y,fn){
    return fn(x,y);
}
console.log(operator(1,2,(a,b)=>{return a*b}));



// First class function
// ability to use function as value
// function stored in variable
// eg arrow function , callback function , anonymous function

