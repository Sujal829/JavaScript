// for(var i=0;i<5;i++){
//     console.log(i)
// }

// var i=5;
// while(i<5){
//     console.log(i)
//     i++ //  i = i + 1; 
// }

var isCheckout = true;
var count=0;
while(isCheckout){
    console.log('still shopping...');
    var yes = 5;
    if(yes===count){
        isCheckout=false;
        console.log('User checked out!');
    }
    count++;
}

var i = 1;
while(i<=10){
     console.log("2 x " +i+" = "+(2*i));
    // console.log(i*2); 
    i++;  
}

// unknown iteration
// we are not sure how many times a loop should run

// comment prompt code

// let answer;

// while(answer !== 'yes'){
//     answer=prompt("Are you not hungry? it's time to eat!");
// }
// console.log('Thank you for eating with us!');


var isCaptchaMatching = prompt('Enter captcha!');

while (isCaptchaMatching !== 'ZwK10') {
    isCaptchaMatching = prompt('Wrong captcha! Try again:');
}

console.log('Captcha matched!');
