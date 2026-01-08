for(var i=0;i<3;i++){
    console.log(i); // output: 0,1,2 because var is function scoped.
    setTimeout(function(){
        console.log(i); // output: 3,3,3 because var is function scoped and it will be executed after the loop has been completed. if we use closure then it will work as expected. 
    },2000)
}


const add = (a,b)=>(a+b); // arrow function with implicit return statement. 
console.log(add(4,6));// output: 10