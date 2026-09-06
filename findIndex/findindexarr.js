// 1.
const numbers = [10, 20, 30, 40];
const findindex = numbers.findIndex((data)=>{
    return data > 20;
});
// console.log(findindex); // 2

// 2. 
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Arun", age: 35 }
];
const age = users.find((data)=>{
    return data.age > 30;
})
// console.log(age); // { name: 'Arun', age: 35 }

// 3.
const ageindex = users.findIndex((data)=>{
    return data.age > 30;
})
// console.log(ageindex); // 2

// 4.
// What if nothing matches?
const agedata = users.find((data)=>{
    return data.age > 40;
})
// console.log(agedata); // undefined

// 5.
const findindexdata = users.findIndex((data)=>{
    return data.age > 50;
})
// console.log(findindexdata); // -1