every() → checks if all match
every() checks whether every single element satisfies the condition.

const numbers = [10, 20, 3, 40];

const result = numbers.every((num) => {
  return num > 5;
});

console.log(result);
10 → > 5 ✅
20 → > 5 ✅
3  → > 5 ❌ ← STOP
Output:
false

Compare some() and every()

This is very important:

some()  → Is AT LEAST ONE true?
every() → Are ALL true?


find()       → Give me the first matching item - ELEMENT
findIndex()  → Give me the position of the first match - index
some()       → Is there at least ONE match? - true
every()      → Are ALL true? - true


