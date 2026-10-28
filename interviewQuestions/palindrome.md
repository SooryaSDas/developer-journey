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
