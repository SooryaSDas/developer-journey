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

function add(a,b){
    console.log(arguments);
}

add(10,20,30,40) // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
// // the arguments object contains all arguments passed to the function. 