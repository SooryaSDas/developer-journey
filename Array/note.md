1. What is an Array?
An array is an ordered collection of values stored in a single variable, where each value can be accessed using its index.
const fruits = ["Apple", "Banana", "Mango"];
          Array
            ↓
 ┌──────────┼──────────┐
 ↓          ↓          ↓
Apple     Banana      Mango
 0          1           2
 ↑          ↑           ↑
         Indexes

2. Arrays are technically objects in JavaScript.
const fruits = ["Apple", "Banana"];
console.log(typeof fruits); // object

An array is a special type of object designed for ordered collections.
Object → key/value data
Array → ordered/list data

// Array Operations
1. includes() - includes() is used to check whether a particular value exists inside an array.
includes() checks the value exactly.
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("mango"));
false
"Mango" ≠ "mango"

2. indexOf() - indexOf() is used to find the index (position) of a value in an array.
console.log(fruits.indexOf("banana")); // 1

// What if the value doesn't exist? -1
console.log(fruits.indexOf("Banana")); // -1
// indexOf() returns -1 when it cannot find the value.

includes() → existence → true / false
indexOf() → position → index / -1
Also, indexOf() does not modify the original array.

3. lastIndexOf() - last occurance (last position) of a value in an array.

const nums = [10, 20, 10, 30];
console.log(nums.lastIndexOf(10)); // 2

Finds the first occurrence - indexOf
find the last occurrence - lastIndexOf


3. slice() - slice() = "Give me a section of the array, without changing the original."
const nums = [10, 20, 10, 30];
console.log(nums.slice(1, 3)); // [20, 10]

slice(start, end)
       ↓     ↓
    included  NOT included

// Original array is NOT modified
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(arr); // [10, 20, 30, 40, 50]
console.log(result); // [20, 30, 40]

arr
 ↓
[10, 20, 30, 40, 50]

slice()
 ↓
new array
 ↓
[20, 30, 40]


// Negative indexes
Positive:   0    1    2    3    4
            ↓    ↓    ↓    ↓    ↓
Value:     10   20   30   40   50
            ↑    ↑    ↑    ↑    ↑
Negative:  -5   -4   -3   -2   -1

arr.slice(-2); // [40, 50]
console.log(arr.slice(-3)); // [30, 40, 50]

 