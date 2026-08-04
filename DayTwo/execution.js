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
var a = 100;
function test(){
    var a = 200;
    console.log(a);
}
test();
console.log(a); // 200 100