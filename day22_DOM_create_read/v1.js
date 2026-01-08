//getElemenyntById(); // this method is used to add content to a specific HTML element
//eg:
let para =document.getElementById("para");
console.log(para); 

//getElemenyntByClassName(); // this method is used to add content to all HTML elements with a specific class name
//eg:
let class1 = document.getElementsByClassName("myClass");
console.log(class1); 

//getElemenyntByTagName(); // this method is used to add content to all HTML elements with a specific tag name
//eg:
let p2 = document.getElementsByTagName("p");
console.log(p2); 

//querySelector(); // this method is used to add content to a specific HTML element using a CSS selector
// it finds the first matching element in the document and returns it
//eg:
let para1 = document.querySelector("#para");
console.log(para1); 


//querySelectorAll(); // this method is used to add content to all HTML elements using a CSS selector
// it finds all matching elements in the document and returns them as a NodeList
//eg:
let cla1 = document.querySelectorAll(".myClass");
console.log(cla1);


//create 
//createElement(); // this method is used to create a new HTML element
//createTextNode(); // this method is used to create a new text node
//appendChild(); // this method is used to add a child element to the end of an existing element

//eg
let p1 = document.createElement("p");
let text = document.createTextNode("This is a new paragraph.");
p1.appendChild(text);
document.body.appendChild(p1);



//update
//appendChild(); // this method is used to add a child element to the end of an existing element
//removeChild(); // this method is used to remove a child element from an existing element
//replaceChild(); // this method is used to replace a child element of an existing element with a new element

//append
//appendChild(); // this method is used to add a child element to the end of an existing element
//insertBefore(); // this method is used to insert a child element before a specified existing element

//remove
//remove(); // this method is used to remove an element from its parent
//removeChild(); // this method is used to remove a child element from a specified parent element
