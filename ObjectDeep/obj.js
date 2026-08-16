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
    // console.log(key, user1[key])
}
// result
// name Soorya
// address { city: 'Kochi', state: 'Kerala' }
// greet [Function: greet]
// grow [Function: grow]

for(let key in user){
    // console.log(key, user[key])
}
// output
// name soorya
// place attingal
// age 25


// Object Destructuring
const person = {
    name : "soorya",
    place: "attingal",
    age : 20
}
const {name, place } = person;
// console.log(name); // soorya
// console.log(place); // attingal

// if we need to change the variable name
const {name : personname} = person;
// console.log(personname) // soorya

// Default values - The default is only used when the property is undefined.
const {names, age=23} = person;
// console.log(person) // { name: 'soorya', place: 'attingal', age: 20 }

//
const user3 = {
    naam: "Soorya"
};

const { naam, ages = 28 } = user3;

// console.log(naam); // Soorya
// console.log(ages); // 28

// ---------------------------------------

// Nested Object Destructuring
const mydata = {
    name : "soorya",
    address : {
        places : "attingal",
        pincode : 695103,
        street: "avanavanchery"
    }
}
const {
    address: { places }
} = mydata;
// console.log(place) // attingal

// ---------------------------------------

// Object Spread Operator ... 
const spreadop = {
    name : "sandra",
    place : "attingal",
    age : 25,
    greet: function(){
        console.log(this.name+ " is "+ this.age+ " years old ")
    }
}
const san = {
    ...spreadop,
    age: 26
}
// console.log(san.greet())  // sandra is 26 years old , undefined

// console.log(spreadop.greet()) // sandra is 25 years old , undefined

// ---------------------------------------
// When duplicate properties exist, the property that comes later wins.

const sandra = {
    age:26,
    ...spreadop
}
// console.log(sandra.greet()); // sandra is 25 years old , undefined
// console.log(spreadop.greet()) // sandra is 25 years old , undefined

// Adding a new property
const saan = {
    ...spreadop,
    study: "BCA"
}
// console.log(saan)
//result
// {
//   name: 'sandra',
//   place: 'attingal',
//   age: 25,
//   greet: [Function: greet],
//   study: 'BCA'
// }


// Rest Operator with Objects ...
const res = {
    namess : "kanmani",
    place : "Ernakulam"
}
 const {namess, ...rest} = res;
// console.log(namess); // kanmani
// console.log(rest); // { place: 'Ernakulam' } // collects everything that hasn't already been taken
// console.log(res); // { namess: 'kanmani', place: 'Ernakulam' }



// Rest vs Spread
// Spread → expands/copies , "Take everything out and spread it."
// Rest -> collect remaining, "Take this one, and put the rest into a new object."



// Object Reference vs Copy

// 1. Object Reference
const sandras = {
    fullname : "sandra satheesh",
    age : 26
}
const copy = sandras;
// console.log(copy); // { fullname: 'sandra satheesh', age: 26 }
copy.fullname = "soorya s das";
// console.log(copy); // { fullname: 'soorya s das', age: 26 }
// console.log(sandras); // { fullname: 'soorya s das', age: 26 }


// 2. Spread operator
const sandraspread = {
    ...sandras,
    address : {
        city : "Kochi",
        state : "Kerala"
    },
    greet : function(){
        console.log(this.address.city);
    }

}
sandraspread.fullname = "soorya s das";
// console.log(sandras); // { fullname: 'soorya s das', age: 26 }
// console.log(sandraspread); 
// {
//   fullname: 'soorya s das',
//   age: 26,
//   address: { city: 'Kochi', state: 'Kerala' },
//   greet: [Function: greet]
// }


// Shallow Copy
// The outer object is copied, but the inner objects are still referenced. If you change an inner object in the copied object, it will also affect the original object. 
const shallo = {
    name : "soorya",
    address : {
        city : "trivandrum"
    }
}
const copyshallo = {...shallo};
const add = copyshallo.address === shallo.address
// console.log(add); // true - Because both point to the same nested object.

const add2 = copyshallo === shallo;
// console.log(add2); // false

copyshallo.address.city = "kochi";
console.log(shallo.address.city); // kochi
console.log(copyshallo.address.city); // kochi