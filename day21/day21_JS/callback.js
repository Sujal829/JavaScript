function greet(name, cb){
    console.log('Hello ', name);
    console.log("let's have lunch together!");
    console.log("They called waitor");
    console.log("They ordered a food");
    console.log('Ate the food!');
    console.log('paid the bill');
    cb();
}

function sayGoodbye(){
    console.log('Goodbye!');
}

greet('John', sayGoodbye);

console.log('--------------------------------------------------------------');

function getFruitList(arr, cb){

    let fruitsAvailableStock= ['apple', 'banana', 'mango', 'pineapple'];

    let filteredFruitList = fruitsAvailableStock.filter(fruit => arr.includes(fruit));
    
    let soldOutItem = arr.filter(fruit => !filteredFruitList.includes(fruit));
    soldOutItem.length && console.log('The item is sold out!', soldOutItem);
    
    cb(filteredFruitList);
}

function myCart(fruits){
    console.log('I love this fruits', fruits);
}
let myFav = ['apple', 'orange'];

getFruitList(myFav, (fruits)=>{
    console.log('I love this fruits', fruits);
});

let myFav2 = ['banana', 'mango'];

getFruitList(myFav2, myCart);

const getNumers = (num,i) => console.log(num)
function getNum(num,i) {
    console.log(num)
}

// Higher order functions: method which takes callback as an argument
[1,2,3,4,5].forEach(getNumers);
let result = [1,2,3,4,5].map((num,i) => num*2);
console.log('result ', result);
let desc= [1,2,3,4,5].sort((a,b) => b - a);
console.log(desc);

function myMap(arr, cb){
    let result = []; //[2,4,6,8]
    for(let item of arr){
        result.push(cb(item))
    }
    return result;
}

let myResult = myMap([1,2,3,4], (num) => num*2);
let myResult2 = myMap([1,2,3,4], (num) => num/2);
console.log('myResult',myResult);
console.log('myResult2',myResult2);
