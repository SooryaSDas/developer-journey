1.  forEach()
forEach() is an array method used to execute a function once for every element in an array.
array.forEach(function (element) {
  // code
});

forEach()
   ↓
accepts a function
   ↓
calls that function
   ↓
for every array element

2. The callback receives the element
forEach() gives us more than the element
The callback can receive three arguments:
array.forEach(function (element, index, array) {
  
});

3. Very Important: forEach() doesn't return a new array
const num = [1,2,3,4,5];
const numfn = num.forEach(function (fn){
    return num * 2
})
// console.log(numfn) // undefined


4. forEach() vs traditional for loop
// Traditional

5. Break
// can we use break
const breakresult = numbers.forEach((fn)=>{
     if(numbers === 2){
        break;
    }
     console.log(numbers); // SyntaxError: Illegal break statement
})
❌ No.
You cannot directly use break inside forEach() like this.
This is another reason forEach() isn't simply a replacement for every for loop.

6. 