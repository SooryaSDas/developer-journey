// forEach
const fruits = ["mango", "kiwi", "pinapple", "papaya"];
const result = fruits.forEach(function (fruits){
    // console.log(fruits);
})
// console.log(result); // undefined
// mango
// kiwi
// pinapple
// papaya


// forEach() gives us more than the element
const element = fruits.forEach((fruits, index, array)=>{
    // console.log("fruits list : "+ fruits+ " index: "+ index+ " array: "+ array);
}) 
// console.log(element)
// fruits list : mango index: 0 array: mango,kiwi,pinapple,papaya
// fruits list : kiwi index: 1 array: mango,kiwi,pinapple,papaya
// fruits list : pinapple index: 2 array: mango,kiwi,pinapple,papaya
// fruits list : papaya index: 3 array: mango,kiwi,pinapple,papaya

// using the index
fruits.forEach(function (fruit, index) {
//   console.log(index, fruit);
});
// 0 mango
// 1 kiwi
// 2 pinapple
// 3 papaya


// Arrow function version
// fruits.forEach((fruits)=> console.log(fruits));
// mango
// kiwi
// pinapple
// papaya


// Very Important: forEach() doesn't return a new array
const num = [1,2,3,4,5];
const numresult = num.forEach((num,index)=>{
    // console.log("index: "+ index + " value : " + num)
})
// output: 
// index: 0 value : 1
// index: 1 value : 2
// index: 2 value : 3
// index: 3 value : 4
// index: 4 value : 5

const numres = num.forEach((num)=>{
    return num * 2
})
// console.log(numres)  // undefined

const numfn = num.forEach(function (fn){
    return num * 2
})
// console.log(numfn) // undefined

const fnnum = num.forEach(function (fn){
    // console.log(fn)
})
// result
// 1
// 2
// 3
// 4
// 5


// forEach() vs traditional for loop
// Traditional:
const numbers = [10, 20, 30];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
// result:
// 10
// 20
// 30

