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

const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique);

output
[ 1, 2, 3, 4, 5 ]


OR

const nums = [1, 2, 2, 3, 4, 4, 5];
const result = [];
for(let i=0; i<nums.length; i++){
  if(!result.includes(nums[i])){
    result.push(nums[i])
  }
}
console.log(result);
//-------------------------------------------

5. 