1. Question 1 — Predict the output

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

output
10
20

//-------------------------------------------

2. 
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

output
object
object
object

//-------------------------------------------

3. Write a function that checks whether a number is even or odd.
function checkNum(a){
    if(a%2 === 0){
        console.log("number is even");
    } else{
        console.log("number is odd");
    }
}
//-------------------------------------------

4. Remove duplicate values from an array.

