// Scope in JS
// lexical scope
// defination : Scope defines where you can access variables, functions or objects.
// 
function a() {
    var b = 10;
}
a();
console.log(b); // undefined

var c = 30;
function d() {
    console.log(c);
}
d(); // 30

// Clouser in JS is the combination of function and its lexical environment.

function e() {
    var f = 50;
    return function g() {
        console.log(f);
    }
}
e()();


// global scope
// Definition: Global scope means that variable is accessible from anywhere within your code.

const url = 'https://jsonplaceholder.typicode.com';
const getpost = async () => {
    const response = await fetch(`${url}/posts`);
    const data = await response.json();
    console.log(data);
}
getpost();


// local scope
// Definition: Local scope means that variable is only accessible within the block it was declared.


function h() {
    let i = 60;
}
h();
console.log(i); //undefined

// Block scope
// Definition: Block scope means that variable is only accessible within the block it was declared.
if (true) {
    let j = 70;
}
console.log(j); //undefined

// Function scope
// Definition: Function scope means that variable is only accessible within the function it was declared.
function k() {
    let l = 80;
}
k();
console.log(l); //undefined


function test() {
    if (true) {
        var m = 90;
        let b = 2;
        const c = 3
    }
    console.log(m) // 90
    console.log(b) // ReferenceError: b is not defined
    console.log(c) // ReferenceError: c is not defined

}
test();


let x = 5;
function show() {
    console.log(x);
    let x = 10;
}
show(); //ReferenceError: Cannot access 'x' before initialization
// because we are trying to access x before initializing it. and let are not hoisted so it will give error.

var y = 5;
function show1() {
    console.log(y);
    var y = 10;
}
show1(); // undefined
// because var are hoisted so it will print undefined.
console.log(y); // 5


let c = 5;
function outer() {
    let c = 10;
    if (true) {
        let c = 15;
        console.log(c);// 15  
    }
    console.log(c); // 10
}
outer();
console.log(c); // 5
// 15 10 5

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i) // 3 3 3 because var are hoisted so it will print last value of i which is 3.
    }, 1000);
}
console.log(i) // 3
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i) // 0 1 2 because let are not hoisted so it will print each value of i separately.
    }, 1000);
}
console.log(i); // ReferenceError: i is not defined

for (var i = 0; i < 3; i++) {
    const show = (i) => {
        setTimeout(() => {
            console.log(i)
        }, 1000);
    };
    show(i);
}

