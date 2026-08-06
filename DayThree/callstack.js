// function one() {
//     console.log("One");
// }

// one(); //one
// ---------------------------------------

// function one() {
//     console.log("One");
// }

// function two() {
//     one();
// }

// two(); // One
// ---------------------------------------
// function one() {
//     console.log("One");
// }

// function two() {
//     console.log("Two");
// }

// one(); // one
// two(); // Two

// ---------------------------------------

// function one() {
//     console.log("One");
//     two();
// }

// function two() {
//     console.log("Two");
// }

// one(); // One Two

//---------------------------------------

// function one() {
//     console.log("One");
//     two();
//     console.log("One End");
// }

// function two() {
//     console.log("Two");
// }

// one(); 
//One
// Two
// One End

//---------------------------------------

// function one() {
//     two();
// }

// function two() {
//     three();
// }

// function three() {
//     console.log("Hello");
// }

// one(); // Hello

// ---------------------------------------

// console.log("Start");

// function one() {
//     console.log("One");
// }

// one();

// console.log("End");
// output:
// Start
// One
// End

// // ---------------------------------------

// console.log("A");

// function one() {
//     console.log("B");
//     two();
//     console.log("C");
// }

// function two() {
//     console.log("D");
// }

// one();

// console.log("E"); 
// A
// B
// D
// C
// E

// // ---------------------------------------

// function one() {
//     console.log("1");
//     two();
//     console.log("2");
// }

// function two() {
//     console.log("3");
//     three();
//     console.log("4");
// }

// function three() {
//     console.log("5");
// }

// one();
// 1
// 3
// 5
// 4
// 2

// ---------------------------------------
// Execution Context + Call Stack
// var a = 10;

// function one() {
//     console.log(a);
// }

// one(); //10

// ---------------------------------------
