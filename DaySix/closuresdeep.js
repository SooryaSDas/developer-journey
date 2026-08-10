// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// ------------------------------------
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }
//  outer();

 // nothing will print 
//  Because outer() only returns the inner function. It does not call inner().

// ----------------------------------------

// function counter(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }

// }
// const counterfn = counter();
// counterfn(); // 1
// counterfn(); // 2
// counterfn(); // 3

// -----------------------------------------------
// function counter(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }

// }
// const counterfn = counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(count);
// // output
// // [Function: inner]
// // [Function: inner]
// // [Function: inner]
// // ReferenceError: count is not defined

// ------------------------------------------
// multiple functions

// function outer() {
//     let count = 0;

//     function increase() {
//         count++;
//         console.log(count);
//     }

//     function decrease() {
//         count--;
//         console.log(count);
//     }

//     return {
//         increase,
//         decrease
//     };
// }

// const counter = outer();
// counter.increase(); // 1
// counter.increase(); // 2
// counter.decrease(); // 1

// --------------------------------------

// Common Interview Trap — var + setTimeout

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// output 
// 333
