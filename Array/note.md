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

