//dialogbox in js 
// it is used to show the message on screen
//1. alert box
//2. confirm box
//3. prompt box

//1 alert box
// display a message and an ok button
//used for simple notification
alert("hello world");

//confirm box
//display a message with 2 buttons ok and cancel
var result=confirm("do you want to continue");
console.log(result);
if (result==true) {
    console.log("user clicked ok")
}
else{
    console.log("user cancelled")
}

//prompt box
//display a message along with input field and ok and cancel button
var name=prompt("enter your name","guest");
console.log(name);
