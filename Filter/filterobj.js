// 1.
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 26 },
  { name: "Arun", age: 24 }
];
const above30 = users.filter((user)=>{
    // return console.log(user.age >=25)
})
// result
// true
// true
// false

// 2. 
const aboveconsole = users.filter((user)=>{
    return user.age >=25
})
console.log(aboveconsole)
// result
// [ { name: 'Soorya', age: 25 }, { name: 'Rahul', age: 26 } ]

// 3. find available products
const products = [
  { name: "Laptop", price: 50000, available: true },
  { name: "Phone", price: 20000, available: false },
  { name: "Mouse", price: 1000, available: true }
];

const available = products.filter((data)=>{
    return data.available == true
})

console.log(available)
// result
// [
//   { name: 'Laptop', price: 50000, available: true },
//   { name: 'Mouse', price: 1000, available: true }
// ]