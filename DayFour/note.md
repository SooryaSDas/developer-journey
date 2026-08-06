1. What is Lexical Scope?
Lexical Scope means a function can access variables from the scope where it is defined (written).

2. How does JavaScript search for a variable?
JavaScript first searches the current scope. If the variable isn't found, it follows the outer lexical environment to the parent scope. This continues until the variable is found or the global scope is reached. If it's still not found, a ReferenceError is thrown.

3. 