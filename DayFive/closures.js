// function outer() {

//     let name = "Soorya";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// const fn = outer();

// fn(); // Soorya

// ---------------------------------------------

// function createUser() {

//     let username = "Soorya";

//     function getUser() {
//         console.log(username);
//     }

//     return getUser;
// }

// const user = createUser();

// user(); // Soorya

// ---------------------------------------------

// function outer() {

//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// 1
// 2
// 3

// ----------------------------------------
// let a = 10;

// function one() {
//     console.log(a);
// }

// function two() {
//     let a = 20;
//     one();
// }

// two(); // 10

// // ------------------------------------------
// let a = 10;

// function one() {

//     function two() {
//         console.log(a);
//     }

//     return two;
// }

// function three() {

//     let a = 30;

//     const fn = one();

//     fn();
// }

// three(); // 10

// // --------------------------------
// let x = 10;

// function one() {

//     let x = 20;

//     function two() {

//         console.log(x);

//     }

//     function three() {

//         let x = 30;

//         two(); 

//     }

//     three();
// }

// one(); // 20

// // ----------------------------------
// let a = 10;

// function one() {

//     let a = 20;

//     function two() {

//         let b = 30;

//         function three() {

//             console.log(a);
//             console.log(b);
//             console.log(c);

//         }

//         let c = 40;

//         three();
//     }

//     two();
// }

// one(); // 20 30 40