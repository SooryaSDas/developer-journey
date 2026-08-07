1. What is Lexical Scope?
Lexical Scope means a function can access variables from the scope where it is defined (written).

2. How does JavaScript search for a variable?
JavaScript first searches the current scope. If the variable isn't found, it follows the outer lexical environment to the parent scope. This continues until the variable is found or the global scope is reached. If it's still not found, a ReferenceError is thrown.

3. Difference between Scope and Lexical Environment

* Scope  = Where can I access this variable?

1.Defines where a variable can be accessed.
2.A language concept.
3.We can reason about it from the code.
4.Example: Global Scope, Function Scope, Block Scope.

* Lexical Environment = Where does JavaScript store it, and where does it look next?
1.Stores variables and maintains a link to the outer environment.
2.Used by the JavaScript engine during variable lookup.
3.Contains an Environment Record + Outer Lexical Environment reference.

Scope is a language concept that determines where variables are accessible, while a Lexical Environment is an internal mechanism used by the JavaScript engine to store bindings and maintain references to outer environments for variable lookup.

4. 