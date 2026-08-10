// Function Declaration
function add(num1,num2){
    return num1+num2;
}
add(10,20); // 30
The important difference is how the function is created/assigned, not what the function does when called.

// Function Expression - Here the function is created and assigned to a variable.
const add = function(a,b){
    return a+b;
}
add(10, 20);