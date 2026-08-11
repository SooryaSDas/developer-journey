1. Higher Order Function
Take another function as an argument
Return another function is known as higher order functions

2. Call back function
Because we pass it into another function and that function calls it.

3. find the difference

1. function greet(){
    console.log("Hello");
    return "done";
}
function execute(fn){
    return fn()
}
execute(greet) // Hello

2. function greet(){
    console.log("Hello");
    return "done";
}
function execute(fn){
    return fn()
}
execute(greet()) 

1. execute(greet) ✅
the first one is You are passing the function itself. 
execute(greet)
       ↓
   fn = greet
       ↓
     fn()
       ↓
    greet()
       ↓
   "Hello"
       ↓
   return "done"
       ↓
execute() returns "done"

2. execute(greet()) ❌
execute(greet());
The () after greet means call greet immediately.
So now the original line effectively becomes:
execute("done");
But "done" is a string, not a function.
So you get:
Hello
TypeError: fn is not a function

3. Functions
A function is a reusable block of code designed to perform a specific task. It helps us organize code and avoid repetition.

4. output
function one() {
    console.log("One");

    function two() {
        console.log("Two");
    }

    return two;
}

const result = one();

console.log("Middle");

result();

// result
// One
// Middle
// Two

const result = one(); 
one() executes.So:One
Then:return two;
Notice:return two
NOT:return two()
We're returning the function itself, not executing it.
So:result → two function
console.log("Middle");
Output:Middle
