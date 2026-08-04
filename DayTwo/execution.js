// var a = 10;
// function test(){
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();
// console.log(a);
// ---------------------------------------------------------

// var a = 10;
// function test(){
//     console.log(a);
//     a = 20;
//     console.log(a);
// }
// test();
// console.log(a); // 10 20 20

// ---------------------------------------------------------
// var a = 100;
// function test(){
//     var a = 200;
//     console.log(a);
// }
// test();
// console.log(a); // 200 100
// ---------------------------------------------------------

// var a = 100;
// function one() {
//     console.log(a);
//     a = 200;
// }
// one();
// console.log(a);// 100 200
// ---------------------------------------------------------

// var a = 10;
// function one() {
//     var b = 20;
//     function two() {
//         console.log(a);
//         console.log(b);
//     }
//     two();
// }
// one();

// ---------------------------------------------------------
// var a = 10;
// function one() {
//     var a = 20;
//     function two() {
//         console.log(a);
//     }
//     two();
// }
// one();
// console.log(a); //20 10

// ---------------------------------------------------------

// var a = 10;
// function one() {
//     console.log(a);
//     var a = 20;
//     function two() {
//         console.log(a);
//         a = 30;
//         console.log(a);
//     }
//     two();
//     console.log(a);
// }
// one();
// console.log(a);

// ---------------------------------------------------------

// var a = 1;
// function first() {
//     var a = 2;
//     second();
//     function second() {
//         console.log(a);
//     }
// }
// first(); // 2

// ---------------------------------------------------------

var a = 1;
function first() {
    second();
    function second() {
        console.log(a);
    }
}
first(); // 1