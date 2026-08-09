1. What is a Closure?
A function remembers and can access variables from its outer lexical environment, even after the outer function has finished executing.
eg: 
function outer() {
    let name = "Soorya";

    function inner() {
        console.log(name);
    }

    return inner;
}
inner() is created inside outer():
outer()
│
├── name = "Soorya"
│
└── inner()
Because inner() was created there, it can access: name, so inner(); prints Soorya

But where does the "closure" happen?
const fn = outer();
outer() runs and returns inner:
outer()
   ↓
return inner
   ↓
fn → inner
Now outer() has finished.

But inner still remembers the environment where it was created:

fn
 ↓
inner
 ↓
outer's Lexical Environment
 ↓
name = "Soorya"

So if we do:
fn();
JavaScript can still find:
name → "Soorya"
and prints: Soorya

outer()
  ↓
name = "Soorya"
  ↓
inner() created
  ↓
inner remembers outer environment
  ↓
return inner
  ↓
outer() finishes
  ↓
fn() calls inner
  ↓
inner finds name
  ↓
"Soorya"

A closure allows a function to remember variables from the place where it was created, even after that outer function has finished.