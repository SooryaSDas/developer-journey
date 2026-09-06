// find() → returns the FIRST matching element
// If no match exists:
// find() → returns undefined
// It doesn't continue searching after the first match.

// 1. print greater than 18
const numbers = [10, 15, 20, 25, 30, 25];

const greaterthan = numbers.find((data)=>{
    return data > 18;
})
// console.log(greaterthan); // 20 

// 2. find exact value
const exact = numbers.find((data)=>{
    return data == 20;
})
// console.log(exact); // 20

// 3. No match
const nomatch = numbers.find((data)=>{
    return data === 100;
})
// console.log(nomatch); // undefined

// 4. Objects
const users = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Arun", age: 35 }
];

const obj = users.find((data)=>{
    return data.age >= 30;
})
// console.log(obj) // { name: 'Rahul', age: 30 }

// 5. Multiple matches
const multiple  = numbers.find((data)=>{
    return data == 25;
})
// console.log(multiple) // 25

// 6. Find by name
const users2 = [
  { name: "Soorya", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Arun", age: 24 }
];

const findname = users2.find((Data)=>{
    return Data.name === "Arun";
})
// console.log(findname) // { name: 'Arun', age: 24 }

// 7.What will this print?
const numbers2 = [10, 20, 30, 40];

const num = numbers2.find((data)=>{
    // console.log(data);
    return data > 20;
});
// console.log(num);
// result
// 10
// 20
// 30
// 30

// 8. find() vs filter()
const numb = [10, 20, 20, 30, 20];

const result = numb.find((num) => {
  return num === 20;
});

// console.log(result); // 20

// 9. 
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

const priceresult = products.find((product)=>{
    return product.price === 1000;
})
// console.log(priceresult); // { name: 'Mouse', price: 1000 }

// 10
