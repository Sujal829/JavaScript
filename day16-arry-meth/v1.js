// //push() method to add new elements to the end of an array
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // Output: [1, 2, 3, 4]

// //pop() method to remove the last element from an array
// arr.pop();
// console.log(arr); // Output: [1, 2, 3]

// //unshift() method to add new elements to the beginning of an array
// arr.unshift(0);
// console.log(arr); // Output: [0, 1, 2, 3]

// //shift() method to remove the first element from an array
// arr.shift();
// console.log(arr); // Output: [1, 2, 3]
 
// // queeue (FIFO)
// let queue = [];
// queue.push(1); // Add 1 to the queue
// queue.push(2); // Add 2 to the queue
// let removed1 = queue.shift(); // Remove 1 from the queue
// console.log(removed1); // Output: 1
// console.log(queue); // Output: [2]

// // stack (LIFO)
// let stack = [];
// stack.push(1); // Add 1 to the stack
// stack.push(2); // Add 2 to the stack
// let removed2 = stack.pop(); // Remove 2 from the stack
// console.log(removed2); // Output: 2
// console.log(stack); // Output: [1]

// //sort() method to sort the elements of an array in ascending order
// let arr1 = [3, 1, 2, 4];
// arr1.sort();
// console.log(arr1); // Output: [1, 2, 3, 4]


//splice() method to add/remove elements from an array
// it will affect the original array
// it returns the removed elements as an array
// it can also remove elements at specific indices
// if only one argument is provided, it removes the element at that index
// if two arguments are provided, it removes elements from the start index to the end index (exclusive)
//splice(start, deleteCount, item1, item2,...)
let arr=[1,2,3];
arr.splice(1, 0, 5); // Insert 5 at index 1
console.log(arr); // Output: [1, 5, 2, 3]

arr.splice(1, 1); // Remove 1 element at index 1
console.log(arr); // Output: [1, 2, 3]

arr.splice(1 , 2, 5); // Replace 2 elements at index 1 with 5
console.log(arr); // Output: [1, 5, 3]
console.log(arr); // Output: [1, 2, 7, 3]

arr.splice(3); // Remove all elements from index 3 to the end
console.log(arr); // Output: [1, 2]

//slice() method to extract a section of an array
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]

//concat() method to merge two or more arrays
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let mergedArr = arr3.concat(arr4);
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]


//reverse() method to reverse the order of elements in an array
arr.reverse();
console.log(arr); // Output: [3, 2, 1]

//sort() method to sort the elements of an array in ascending order
arr.sort();
console.log(arr); // Output: [1, 2, 3]

let arr5 =  [5,3,2,7,6,8];
console.log("Sort:",arr5.sort());

//join() method to concatenate all elements of an array into a string
let joinedArr = arr.join(" ");
console.log(joinedArr); // Output: "1 2 3"

//indexOf() method to find the first occurrence of a value in an array
let index = arr.indexOf(2);
console.log(index); // Output: 1

//lastIndexOf() method to find the last occurrence of a value in an array
index = arr.lastIndexOf(2);
console.log(index); // Output: 1

//copywithin() method to copy elements of an array to a new position
//syntax: arr.copyWithin(target, start, end)
// it will affect the original array
// if only one argument is provided, it copies the entire array
// if two arguments are provided, it copies elements from the start index to the end index (exclusive)

arr.copyWithin(1, 0);
console.log(arr); // Output: [1, 1, 2, 3]
