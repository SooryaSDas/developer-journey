// forEach
const fruits = ["mango", "kiwi", "pinapple", "papaya"];
const result = fruits.forEach(function (fruits){
    console.log(fruits);
})
console.log(result);
// mango
// kiwi
// pinapple
// papaya
// undefined

// forEach() gives us more than the element
const element = fruits.forEach((fruits, index, array)=>{
    console.log("fruits list : "+ fruits+ " index: "+ index+ " array: "+ array);
}) 
console.log(element)
// fruits list : mango index: 0 array: mango,kiwi,pinapple,papaya
// fruits list : kiwi index: 1 array: mango,kiwi,pinapple,papaya
// fruits list : pinapple index: 2 array: mango,kiwi,pinapple,papaya
// fruits list : papaya index: 3 array: mango,kiwi,pinapple,papaya

