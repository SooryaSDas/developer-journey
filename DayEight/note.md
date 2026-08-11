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


