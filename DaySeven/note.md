// /Function Declaration
function add(num1,num2){
    return num1+num2;
}
add(10,20); // 30
The important difference is how the function is created/assigned, not what the function does when called.


/// Function Expression - Here the function is created and assigned to a variable.
const add = function(a,b){
    return a+b;
}
add(10, 20);


/// Anonymous Function - function dont have name after the fucntion
const add = function (a,b){
    return a+b;
}
anonymose functions are common when passing the functions as callback

/// Named Function Expression
const add = function calculate(a,b){
    return a+b
}
This is a named function expression.
There are two names/identifiers to understand:
const add = function calculate(a, b) {
             ↑
         function name
You normally call it using: add(10, 20);
calculate(10, 20); // ❌
because calculate isn't available as a normal variable outside the function expression.

one of the major advantage of named function expression is debugging and recursion. 


/// Parameters & Arguments
function add (a,b){
    return a+b;
}
add(10,10); // 20
parameters - define in the function definition (a,b), Parameters are placeholders for values.
Arguments - arguments are actual values 

// arguments
Parameter
↓
Variable in function definition

Argument
↓
Value passed during function call

Default Parameter
↓
Fallback value when argument is missing

arguments
↓
Object containing arguments passed to a regular function


/// return
the return do 2 things:
1. it send a value back where the function was called
2.it immediately stoped the function execution
return immediately ends the current function execution and sends a value back to the caller.

// first class function
it's a function that js allows to store in varibles, pass as an argument, and return from another function.