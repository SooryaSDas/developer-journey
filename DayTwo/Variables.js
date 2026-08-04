// Question 1
// Predict the output first.
// console.log(a);
// var a = 10; // undefined
// ---------------------------------------------------
// Question 2
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// ---------------------------------------------------
// Question 3
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// const a = 10;
// ---------------------------------------------------
// question 4
// greet(); // hello
// function greet(){
//     console.log("hello")
// }
// ---------------------------------------------------
// question 5
// greet(); // TypeError: greet is not a function
// var greet = function(){
//     console.log("hello")
// }
// ---------------------------------------------------
greet(); // ReferenceError: Cannot access 'greet' before initialization
let greet = function(){
    console.log("hello")
}
