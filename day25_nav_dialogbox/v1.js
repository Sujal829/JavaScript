//window object is the global object in javascript
console.log(window);

let btn = document.getElementById('btn');
let backbtn=document.getElementById('backbtn');
let nextbtn=document.getElementById('nextbtn');
let ref=document.getElementById('refreshbtn');
let prev=document.getElementById('prevbtn');
let index=document.getElementById('indexpage');
let forward=document.getElementById('fordwardbtn');
if(btn){
function btnclick(){
    window.location.href="about.html";
}
btn.addEventListener("click",btnclick);
}

if(backbtn){
    function back(){
    window.history.back();
}
backbtn.addEventListener("click",back);
}

if(nextbtn){
    function next(){
    window.location.href="service.html";
}
nextbtn.addEventListener("click",next);
}

if(ref){
    function refresh(){
        location.reload();
    }
ref.addEventListener("click",refresh);
}

if(prev){
    function previous(){
        history.go(-1);
    }
prev.addEventListener("click",previous);
}

if(forward){
    function forward1(){
        history.forward();
    }
forward.addEventListener("click",forward1);
}   

if(index){
    function home(){
        window.location.href="v1.html";
    }
index.addEventListener("click",home);
}