1. What is this?
   this refers to the object/context that is calling the function.
   this is determined by how a function is called, not where the function was writtern.

2. const person = {
   name : "Soorya",
   greet : function (){
   console.log(this.name);
   }

}
person.greet();

is equivalent to: person.name
Output:
Soorya

3.  object - it refers to object name
    function - it refers to global

4.  this is determined by the call site

5.  strict mode vs non-strict
    Non-strict regular function
    ↓
    this
    ↓
    window


    Strict regular function
    ↓
    this
    ↓
    undefined

6. Lexical scope vs this keyword

Lexical scope
Where was the function written?
        ↓
Which variables can it access?


this
How was the function called?
        ↓
What is `this`?

7. this and Nested Functions
This is one of the biggest differences between regular functions and arrow functions.
Arrow functions do not have their own this. They take this from their surrounding lexical context.
Regular nested function:
test()
  ↓
gets its own this

Arrow function:
() => {}
  ↓
doesn't have its own this
  ↓
uses surrounding this

"Arrow functions don't have their own this; they lexically inherit this from their surrounding scope."
                this
                 │
        ┌────────┴────────┐
        │                 │
 Regular function    Arrow function
        │                 │
        ↓                 ↓
 Call determines      Lexical/surrounding
     this                  this

-----------------
8. <!-- call(), apply(), bind() -->

These three methods are used to control the value of this when working with regular functions.

call()
 ↓
arguments individually

apply()
 ↓
arguments as an array

1. call
arguments individually
function.call(thisValue, argument1, argument2, ...);
greet.call(user,"hello","welcome")

2. Apply
apply() does almost the same thing as call().
The main difference is how arguments are provided.
Arguments are passed inside an array:
function.call(thisValue, [argument1, argument2, ...]);
greet.apply(user, ["hello","welcome])

3. bind
bind() is different.
call() and apply() immediately execute the function.
But bind() doesn't execute it immediately.
Instead, it creates a new function with this permanently set to the object you provided.
greet()
 ↓
not executed

newGreet
 ↓
new function
 ↓
this → user


9. call vs bind
call
greet.call(user);
execute greet now with this = user

bind
const wish = greet.bind(user)
wish();
Create a new function where this = user. Execute it later.

CALL
 ↓
Call it NOW

APPLY
 ↓
Call it NOW with an Array

BIND
 ↓
Bind it for LATER

This works with regular functions because regular functions can have their this value controlled by call, apply, and bind.
Arrow functions have lexical this. So call(), apply(), and bind() cannot change an arrow function's this.