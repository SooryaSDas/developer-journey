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
var a = 10;
function one() {
    var a = 20;
    function two() {
        console.log(a);
    }
    two();
}
one();
console.log(a); //20 10

