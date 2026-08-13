<!-- this -->
1. Regular function
How was the function called?
          ↓
Determines `this`

2. Arrow function
Doesn't create its own `this`
          ↓
Uses surrounding lexical `this`

3. Lexical Environment
it contains the identifiers avaialble in a particular scope and referece to it's outer lexical environment.
Current Lexical Environment
          ↓
Outer Lexical Environment
          ↓
Global Lexical Environment

4. Lexical Scope
lexical scope depends on where the code is writtern not where the function is called. 

5. Scope
function scope
block scope
global scope

6. Hoisting + TDZ
Hoisting
JavaScript's creation phase makes declarations available before normal execution reaches them.

TDZ
The period where let/const exist in their scope but cannot be accessed before initialization.

7. Execution Context
Execution Context
        ↓
Memory Creation Phase
        ↓
Code Execution Phase

8. Global Execution Context
JavaScript starts
      ↓
Global Execution Context created
      ↓
Global code executes
      ↓
Functions may create their own execution contexts
      ↓
Program finishes

9. Call Stack
Global Execution Context
        ↓
Function Execution Context
        ↓
Function Execution Context
eveything is done under the call stack
LIFO
Last In
First Out

10. Stack Overflow
The Call Stack keeps growing until the stack limit is exceeded.
RangeError:
Maximum call stack size exceeded

11. Lexical Environment
A Lexical Environment contains the identifiers available in a particular scope and a reference to its outer lexical environment
Current Lexical Environment
          ↓
Outer Lexical Environment
          ↓
Global Lexical Environment

12. Lexical Scope
Lexical scope depends on where the code is written, not where the function is called.

13. Variable Lookup / Scope Chain
Current Scope
      ↓
Outer Scope
      ↓
Outer Scope
      ↓
Global Scope
      ↓
ReferenceError

14. Shadowing
a same variable with same name is declared inside of an block is know as shadowing
let a = 10;

function test() {
    let a = 20;

    console.log(a);
}

test(); // 20

console.log(a); // 10

15. Closures
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2

16. Functions
Function Declaration
function one (){
    console.log("one");
}
one();

Function Expression - just assign to a variable
const fn = function one(){
    console.log("one");
}

17. Arrow Function
const add = (a, b) => a + b;

18. Parameters vs Arguments
function add(a, b) {
    return a + b;
}
add(10, 20);
a, b       → Parameters
10, 20     → Arguments

19. Return
function test() {
    return 10;

    console.log("Hello");
}
"Hello" will never execute because return ends that function execution.

20. Function vs Function Call
greet - Reference to the function.
greet() - Execute the function.

21. First-Class Functions
stored in variables
passed as arguments
returned from functions
stored in objects/arrays

22. Higher-Order Functions
accepts a function as an argument, or returns a function

23. Callback functions
A function passed to another function to be invoked by it is a callback.
function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}
execute(greet);

execute → Higher-Order Function
greet   → Callback

24. this
this is determined by how the function is called.
Arrow functions: Do not have their own this; they use the surrounding lexical this.
