

console.log("Number");
let n = 5;
console.log('n:',n);
console.log(typeof n);

let a = 3.14
console.log('a:',a);
console.log(typeof a);
let b = -5;
console.log('b:',b);
console.log(typeof b);

console.log("String");
let s1 = "sujal";
console.log('s1:',s1);
console.log(typeof s1);

let s2 = "sujal jathar";
console.log('s2:',s2);
console.log(typeof s2);

console.log("Bollean")
let isonline = true;
if(isonline)
{
    console.log("Online");
}
else{
    console.log("Offline");
}

console.log("Undefine");
let u1;

console.log("u1 :",u1);
console.log(typeof u1);


console.log("Null");

let n1=null;
console.log("n1: ",n1);
console.log(typeof n1);

// undefine bydefault
// null set by Programmer 
// 
// undefined → variable exists, but JS has not given it a value yet.
// null → variable exists, and you intentionally gave it an empty value.
// 
// undefined → The mailbox is there, but it has never been opened.
// null → The mailbox was opened, but you intentionally left it empty.

// When to Use undefined
    // You don’t normally set variables to undefined yourself — JavaScript does it automatically.
    // Use case: Indicating something is missing or not yet provided.
// When to Use null
    // You set a variable to null to say:
    // “This value is empty on purpose — I expect to fill it later.”
    // 
// symbol (TBD)