const { use } = require("react");

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
// console.log(upper) // [ 'SOORYA', 'RAHUL', 'ARUN' ]


// 3. Understand return
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
//   console.log(num);
});

// console.log(result);
// result
// 1
// 2
// 3
// [ undefined, undefined, undefined ] - because it's not return anything

const reuslt1 = numbers.map((data)=>{
    return;
}) 
// console.log(reuslt1) // [ undefined, undefined, undefined ]

// 4. get only the names
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 26 },
  { name: "Arun", age: 24 }
];

const namesonly = users.map((user)=>{
    return {
    name: user.name,
    age: user.age + 1
  };
})
console.log(namesonly)