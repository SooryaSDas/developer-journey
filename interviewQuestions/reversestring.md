1. Reverse a string

const str = "hello";
const reverse = str.split("").reverse().join("")
console.log(reverse)

output
olleh

split("") converts the string into an array of characters.

reverse() reverses the array.

join("") combines the characters into a string again.