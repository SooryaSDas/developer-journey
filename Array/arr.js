const fruits = ["apple", "orange"];
// console.log(fruits.length) // 2

//push
fruits.push("mango");
// console.log(fruits); // [ 'apple', 'orange', 'mango' ]

// pop
fruits.pop();
// console.log(fruits) // [ 'apple', 'orange' ]

const unshifted = fruits.unshift("banana", "grapes");
// console.log(unshifted) 
// [ 'apple', 'orange' ]
// 4

// console.log(fruits); // [ 'banana', 'grapes', 'apple', 'orange' ]

// Array operations
//1.  includes()
// console.log(fruits.includes("kiwi")); // false

//2.  indexOf
// console.log(fruits.indexOf("banana")); // 1
// What if the value doesn't exist? -1
// console.log(fruits.indexOf("Banana")); // -1
// indexOf() returns -1 when it cannot find the value.


// 3. lastIndexOf()
const numarr = [10, 20, 30, 10, 40];
// console.log(numarr.lastIndexOf(10)) // 3
// console.log(numarr.lastIndexOf(80)); // -1 (not found)
// console.log(numarr.indexOf(10)) // 0 first value in 'indexof'


// slice()
const result = numarr.slice(1,4);
// console.log(result); // [ 20, 30, 10 ]
// console.log(numarr.slice(-3));  // [ 30, 10, 40 ]
// console.log(numarr.slice(3, 8)) // [ 10, 40 ]
// console.log(numarr.slice(8)) // []


// splice()
const splicearr = [10, 20, 30, 40, 20, 60];
// arr.splice(start, deleteCount);
const spliceresult = splicearr.splice(1,2);
// console.log(splicearr); // [ 10, 40, 20, 60 ]
// console.log(spliceresult) // [ 20, 30 ]

// adding elements
const splicearr1 = [10, 20, 30, 40, 20, 60];
const res = splicearr1.splice(4,1,50);
// console.log(res); // [ 20 ]
// console.log(splicearr1) // [ 10, 20, 30, 40, 50, 60 ]