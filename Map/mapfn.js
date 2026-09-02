const arr = [10,20,30,40];
// const multiple = arr.map((num)=>{
//     return num * 2;
// })
// console.log(multiple) // [ 20, 40, 60, 80 ]

const multiplereturn = arr.map((data)=>{
    // console.log(data*2);
})
// console.log(multiplereturn)
// result 
// 20
// 40
// 60
// 80
// [ undefined, undefined, undefined, undefined ]

// 1. Add 10 to every number
const addten = arr.map((num)=>{
    return num + 10
})
// console.log(addten) // [ 20, 30, 40, 50 ]

// 2. Convert names to uppercase
const names = ["soorya", "rahul", "arun"];

const upper = names.map((names)=>{
    return names.toUpperCase()
})
console.log(upper) // [ 'SOORYA', 'RAHUL', 'ARUN' ]