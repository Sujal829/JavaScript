// ES5

// ES6 Features:
// ECMAScript V6
// Modern JavaScript

// New Features:
// 1. let and const
// 2. Arrow Functions
// 3. Template Literals
// 4. Default Parameters
// 5. Destructuring
// 6. Spread Operator and Rest Parameter
// 7. Promises
// 8. Classes
// 9. for of Loop
// 10. Maps and Sets
// 11. Symbols
// 12. Modules
// 13. Generators
// 14. Async/Await

// Template literals are string literals allowing embedded expressions.
// literals are used to create strings that have multiple lines.
// You can use multi-line strings and string interpolation features with them.
// They were called "template strings" in prior editions of the ES2015 specification.
// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
// Template literals can contain place holders. These are indicated by the dollar sign and curly braces (${expression}). 

let num = 100;
let name = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Fugit consequatur vel animi rerum, molestiae optio architecto, sit omnis 
beatae doloremque, nam sunt quibusdam amet at tempora libero aliquid ut 
dolorum veniam similique facilis? Inventore perferendis 
adipisci eius temporibus ${num} sapiente nulla vitae repudiandae nam ducimus? 
Deserunt minima accusantium quasi at amet quam perspiciatis earum tempora 
incidunt omnis in illo unde et modi voluptas, ad saepe consequuntur iusto 
eum nesciunt? Nihil rerum deleniti molestiae sed maxime 
exercitationem? Qui, pariatur impedit. Cumque ex, facere corrupti voluptates
 officiis beatae itaque provident rerum, sint nisi qui enim saepe similique optio.
  Nostrum deleniti molestiae vitae tempore.`;
console.log(name);
// when we use $ then we can write any variable inside {}
// it will convert into string automatically
let name2 = 'Sujal';
console.log(`Hello ${name2}`);


// default parameters
function add(a,b=1){
    return a+b;
}
console.log(add(1)); // op 2
console.log(add(1,2)); // op 3

function greet(name='Gust'){
    console.log(`Hello ${name}`);
    }
greet(); // Hello Gust
greet('Sujal'); // Hello Sujal



// array destructuring
const arr = [1,2,3];
const [a,b,c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// object destructuring
const obj = {
    firstName: 'Sujal',
    lastName: 'Jathar'
};
const {firstName,lastName} = obj;
console.log(firstName); // Sujal
console.log(lastName); // Jathar

const obj1 = {
    firstName: 'Sujal',
    lastName: 'Jathar',
    obj2:{
        age: 20,
        city:'Pune'
    }
}
const {obj2:{age}} = obj1; // nested object destructuring 
console.log(age); // 20


// spread operator (...)
// spread operator is used to copy all elements from one array to another array
// spread operator is also used to merge two arrays
// spread operator is also used to pass arguments to function

const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2); // [1,2,3]

const arr3 = [4,5,6];
const arr4 = [...arr1,...arr3];
console.log(arr4); // [1,2,3,4,5,6]

// rest parameter (...)
// collects multiple elements and put them into an array
// rest parameter is used to collect all remaining elements into an array
// rest parameter must be last argument in function


let numbers = [1,2,3];
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0);
    
}
console.log(sum(numbers)); // 6

console.log(sum(1,2,3,4,5)); // 15

let user = {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@gmail.com'
}
console.log(user.id,user.name,user.email);

let {id, ...other} = user;
console.log(id); // 1
console.log(other); // {name: 'John Doe', age: 30, email: 'johndoe@gmail.com'}

