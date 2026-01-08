// function is non-preemptive data type
// function is a block of code that performs a specific task
// parameters are the input values that are passed to the function
// function to add two numbers
function f1 (){
    a= 10;
    b= 20;
    console.log(a+b);
}
function addNumbers(num1, num2){
    return num1 + num2;
}

f1();
console.log("addition of 2 no:",addNumbers(15, 25)); // calling the function with two numbers
let s=addNumbers(10, 20);
console.log("The sum is: " , s);
