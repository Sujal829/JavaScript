// event bubbling
// it is the event that when we click on a button that is child of div then both the events are triggered.
// event bubbling means that if an element triggers an event and has parents, 
// then all those parents also trigger the same event.
// event bubbling can be stopped by using event.stopPropagation() method.
// event bubbling is default behaviour in javascript.

let parent = document.getElementById("parent");
let child = document.getElementById("child");

        // parent.addEventListener('click',function(){
        //     console.log("Parent Div");
        // });

        // child.addEventListener('click',function(event){
        //     event.stopPropagation();
        //     console.log("Child Button");
        // }
        // );

// event.stopPropagation(); // it will stop the bubbling of events
// 


// event  capturing
// it is opposite to event bubbling.
// event capturing means that if an element triggers an event and has parents,
// then all those parents also trigger the same event.
// event capturing is not default behaviour in javascript.
// event capturing can be done by passing true as third argument in addEventListener().

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

        parent.addEventListener('click',function(){
            console.log("Parent Div");
        },true);
        
        child.addEventListener('click',function(event){
            event.stopPropagation();
            console.log("Child Button");
        },false);


// event delegation
// it is a technique where we use event bubbling to handle multiple elements with same class or id.
// it is used to reduce the number of event listeners.
// it is used to improve performance.

let list = document.getElementById("list");

list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.style.backgroundColor = 'red';
        console.log(e.target.dataset.id);
    }   
});

// list.addEventListener('click',function(e){
//         e.target.style.backgroundColor = 'red';
//         console.log(e.target.dataset.id);   
// });
