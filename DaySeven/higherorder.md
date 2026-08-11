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