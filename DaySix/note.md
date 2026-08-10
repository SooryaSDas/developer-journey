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


for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// output 
// 333

The callbacks don't remember the value of i.
They remember/access the variable i.
And there is only one i:
          ONE i
           ↓
      ┌─────────┐
      │ i = 3   │
      └────┬────┘
           │
      ┌────┼────┐
      ↓    ↓    ↓
     CB1  CB2  CB3
      │    │    │
      ↓    ↓    ↓
      3    3    3


let

Now JavaScript creates a separate i for each iteration.
Iteration 1
i = 0
 ↓
callback remembers this i

Iteration 2
i = 1
 ↓
callback remembers this i

Iteration 3
i = 2
 ↓
callback remembers this i

The callback remembers/accesses its lexical environment. With var, all callbacks access the same i; with let, each iteration has its own i binding.