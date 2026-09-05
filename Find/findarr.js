// 1.
const numbers = [10, 20, 30, 40, 50];

const greater = numbers.find((data)=>{
    return data > 20
})
// console.log(greater) // 30

// 2.
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Arun", age: 30 }
];

const equal = users.find((data)=>{
    return data.age <= 24;
});
console.log(equal);

// 3.


