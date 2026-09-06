// 1.
const numbers = [10, 20, 30, 40];
const greaterthan  = numbers.some((data)=>{
    return data >20;
})
// console.log(greaterthan); // true

// 2. nothing matches
const notmatch = numbers.some((Data)=>{
    return Data > 60;
})
// console.log(notmatch); // false

// 3.some() vs find()
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Arun", age: 24 }
];

const equal = users.find((data)=>{
    return data.age === 30;
})
// console.log(equal); // { name: 'Rahul', age: 30 }

const equalsome = users.some((Data)=>{
    return Data.age === 30;
})
// console.log(equalsome); // true

// 4.

