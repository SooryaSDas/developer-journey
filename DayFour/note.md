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

4. Lexical
Lexical means based on where the code is written/defined in the source code, not where it is called.

5. Lexical Environment
A Lexical Environment is an internal structure that stores identifiers and their values and maintains a reference to the outer Lexical Environment.

6. Two main parts
1. Environment Record
2. Outer Lexical Environment Reference

7. Environment Record
Environment Record is where the bindings/identifiers are stored.

8. Outer Lexical Environment Reference
It provides a connection from the current Lexical Environment to its outer/parent Lexical Environment, allowing JavaScript to perform variable lookup in the outer scope.

9. 