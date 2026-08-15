// key()
const user= {
    name : "soorya",
    place: "attingal",
    age : 25
}

// console.log(Object.keys) // [Function: keys]
// console.log(Object.keys(user))
// output
// [ 'name', 'place', 'age' ]

const count = Object.keys(user);
// console.log(count.length) // 3

// calling key in obj
// 1. forEach
// Object.keys(user).forEach(key => console.log(key))
// output
// name
// place
// age

// 2. map
// Object.keys(user).map(key => console.log(key))
// output
// name
// place
// age


// calling value in obj
// console.log(Object.values(user)) // [ 'soorya', 'attingal', 25 ]

// calling values
// with values
// Object.values(user).map(key => console.log(key))
// result
// soorya
// attingal
// 25


const obj = Object.keys(user);
obj.forEach(key => console.log(key, user[key]))
// result
// name soorya
// place attingal
// age 25