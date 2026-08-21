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
fruits.forEach((fruits)=> console.log(fruits));
// mango
// kiwi
// pinapple
// papaya