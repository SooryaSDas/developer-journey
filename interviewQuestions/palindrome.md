Check whether a string is a palindrome

Question: A palindrome reads the same forward and backward.

const str = "madam";

const reversed = str.split("").reverse().join("");

console.log(str === reversed);

Explanation: Both strings are "madam", so the comparison returns true.

2) 2nd way

const str = "madam";

let reverse = "";
for(let i = str.length-1; i>=0; i--){
  reverse += str[i];
}
if(reverse == str){
  console.log("palindrome");
} else{
   console.log(" not palindrome");
}

result
palindrome

Here, the loop starts from the last character and moves backward until it reaches index 0.


number
-----------
let num = 121;
let original = num;
let reverse = 0;

for (; num > 0; num = Math.floor(num / 10)) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
}

console.log(original === reverse ? "Palindrome" : "Not a palindrome");


