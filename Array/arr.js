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

