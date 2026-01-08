// Array : 
//         An array is a special object that stores multiple values in a single variable, in an ordered list.

// syntax:     
//         variable = [ value_1,value_2,...value_N];
//         variable = new Array(value_1,value_2,...value_N);

// Eg:
//         let numbers = [10, 20, 30];
//         let numbers = new Array(10, 20, 30);

// Array Index:
//         Array index start with 0
//         variable[0];
        
// Array can store diffrent datatypes :
//         let mix = [10, "Hello", true, null, {name: "Sujal"}, [1, 2]];


var a = [1,2,3,4,5];
console.log(a);
console.log(typeof a);

let mix = [10, "Hello", true, null, {name: "Sujal"}, [1, 2]];
console.log(mix);
console.log(typeof mix);

// Object:
//         An object is a collection of key-value pairs.
//         Keys are called properties.
//         Values can be of any type — string, number, array, function, or even another object.        

// Syntax:
//         variable = {
//             key: value,
//             key: value,
//         }    

// Eg:
//         let person = {
//               name: "Sujal",
//               age: 21,
//               isStudent: true
//             };
//         name → key
//         "Sujal" → value

var person = {
    name: 'sujal',
    age: 21,
    gender: 'male',
    subject: ['HTML','CSS','JS'],
    add:{city: 'akluj', state:'Maharastra',dist:'Solapur'}
}
console.log(person);
console.log(typeof person);



function a(){
    console.log("hello");
}
console.log(typeof a);