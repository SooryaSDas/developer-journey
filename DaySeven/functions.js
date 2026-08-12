// Function Declaration
// function add(num1,num2){
//     return num1+num2;
// }
// add(10,20); // 30

// -------------------------------------
// Function Expression - Here the function is created and assigned to a variable.
// const add = function(a,b){
//     return a+b;
// }
// add(10, 20);

// -------------------------------------
// Anonymous Function
// const add = function (a,b){
//     return a+b;
// }
// add(20,10);

// ------------------------------------
// "arguments" Object

// function add(a,b){
//     console.log(arguments);
// }

// add(10,20,30,40) // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
// // the arguments object contains all arguments passed to the function. 

// --------------------------------------

// function num(a,b){
//     console.log(a);
//     console.log(b);

//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);

// }
// num(10,20,30);
// // result 
// // 10
// // 20
// // 10
// // 20
// // 30

// --------------------------------------

// higher order functions
// function greet(){
//     console.log("Hello");
// }
// function execute(fn){
//     fn();
// }

// execute(greet); // Hello


// ---------------------------------------
// HOF vs Callback

// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }

// execute(greet);

// // Higher-Order Function
// execute
// Because it receives a function.

// // Callback Function
// greet
// Because we pass it into another function and that function calls it.

// ---------------------------------------
// .// 1. d/f

// function greet(){
//     console.log("Hello");
//     return "done";
// }
// function execute(fn){
//     return fn()
// }
// execute(greet) // Hello


//// 2.
// function greet(){
//     console.log("Hello");
//     return "done";
// }
// function execute(fn){
//     return fn()
// }
// execute(greet()) // TypeError: fn is not a function. beacuse The () after greet means call greet immediately.


// ---------------------------

// function greet() {
//     console.log("Hello");
// }

// const result = greet();

// console.log(result); // Hello

/// -----------------------------

function one() {
    console.log("One");

    function two() {
        console.log("Two");
    }

    return two;
}

// const result = one();

// console.log("Middle");

// result();

// result
// One
// Middle
// Two

// -------------------------
const test = () => {
    10 + 20;
};

console.log(test()); // undefined

// -------------------------



