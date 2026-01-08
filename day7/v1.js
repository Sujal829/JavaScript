let number = 10;

// Simple if
if (number > 5) {
    console.log("Number is greater than 5");
}

// if...else
if (number % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// Nested if...else
if (number > 0) {
    if (number < 20) {
        console.log("Number is positive and less than 20");
    } else {
        console.log("Number is positive and 20 or more");
    }
} else {
    console.log("Number is not positive");
}

let day = 3; 

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}
