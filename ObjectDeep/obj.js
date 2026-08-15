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
// obj.forEach(key => console.log(key, user[key]))
// result
// name soorya
// place attingal
// age 25



const user1 = {
    name: "Soorya",
    address: {
        city: "Kochi",
        state: "Kerala"
    },
    greet: function(){
        console.log(this.name);
    },
    grow: ()=>{
        console.log("arrow fn");
    }
};

const keyvalues = Object.keys(user1);
// console.log(keyvalues); // [ 'name', 'address', 'greet', 'grow' ]
const values = Object.values(user1);
// console.log(values);
// output
// [
//   'Soorya',
//   { city: 'Kochi', state: 'Kerala' },
//   [Function: greet],
//   [Function: grow]
// ]


// object entries - Object.entries() is used when you want to get both the key and the value from an object.
// console.log(Object.entries(user1))
// output
// [
//   [ 'name', 'Soorya' ],
//   [ 'address', { city: 'Kochi', state: 'Kerala' } ],
//   [ 'greet', [Function: greet] ],
//   [ 'grow', [Function: grow] ]
// ]

const keyvalue = Object.keys(user1);
// keyvalue.forEach(key => console.log(key, user1[key]))
// output
// bstar@saraths-MacBook-Air ObjectDeep % node obj.js
// name Soorya
// address { city: 'Kochi', state: 'Kerala' }
// greet [Function: greet]
// grow [Function: grow]


// for...in
for (let key in user) {
    // console.log(key);
}
// name
// place
// age

for (let key in user) {
    // console.log(key, user[key]);
}
// name soorya
// place attingal
// age 25


// for...in vs Object.keys()
for(let key in user1){
    console.log(key, user1[key])
}
// result
// name Soorya
// address { city: 'Kochi', state: 'Kerala' }
// greet [Function: greet]
// grow [Function: grow]

for(let key in user){
    console.log(key, user[key])
}
// output
// name soorya
// place attingal
// age 25