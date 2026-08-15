const obj = {
    name : "soorya",
    greet : function () {
        console.log(this.name);
    }
}

// obj.greet(); // soorya

// Creating Objects in JavaScript
// 1) Object Literal
const user = {
    name : "soorya",
    place : "attingal"
}
// 2) new Object()
const user1 = new Object();
user1.name = "sandra";
user1.place = "attingal";
// console.log(user1); // { name: 'sandra', place: 'attingal' }


// Accessing Object Properties
// 1) dot notation
// console.log(user.name); // soorya
// 2) Bracket notation
// console.log(user["place"]) // attingal

// Updating Properties
user1.name = "yesu";
// console.log(user1); // { name: 'yesu', place: 'attingal' }
// Adding Properties
user1.age = 25;
// console.log(user1) // { name: 'yesu', place: 'attingal', age: 25 }

// Deleting Properties
delete user1.age;
// console.log(user1); // { name: 'yesu', place: 'attingal' }

// Checking Whether a Property Exists
"name" in user1
const check = user1.hasOwnProperty("name");
// console.log(check) // true

//. Object Methods
const user2 = {
    name : "sunu",
    wish : function(name){
        console.log("Good Morning from "+this.name + " to "+ name);

    }
}
// user2.wish("soorya"); // Good Morning from sunu to soorya

// object method in arrow function
const obj3 = {
    istreu : false,
    greet: (a,b)=>{
        console.log(a+b);
        return "done";
         console.log(a+b); // unreachable code
    }
}
// obj3.greet(10,20); // 30

// Nested Objects
const employees = {
    name : "soorya",
    address : {
        street : "attingal",
        pincode : 695102,
        landmark : "near avanavanchery school",
    }
}
// console.log(employees)
// output
// {
//   name: 'soorya',
//   address: {
//     street: 'attingal',
//     pincode: 695102,
//     landmark: 'near avanavanchery school'
//   }
// }

employees.address.pincode = 695103;
// console.log(employees)
// {
//       name: 'soorya',
//   address: {
//     street: 'attingal',
//     pincode: 695103,
//     landmark: 'near avanavanchery school'
//   }
// }

delete employees.address.landmark;
// console.log(employees) // { name: 'soorya', address: { street: 'attingal', pincode: 695103 } }


// Objects Inside Arrays
const pricelist = [
    {
        product : "apple",
        price : 500
    },
    {
        product : "orange",
        price : 200
    },
    {
        product : "avacado",
        price : 600
    }
]
// console.log(pricelist); 
// [
//   { product: 'apple', price: 500 },
//   { product: 'orange', price: 200 },
//   { product: 'avacado', price: 600 }
// ]

// console.log(pricelist[0]) // { product: 'apple', price: 500 }

// Using the in operator - check is this exist or not
// console.log("name" in employees) // true
if ("email" in user) {
    // console.log(user.email); // nothing will print
}


const developer = {
    name: "Soorya",
    age: 28,
    role: "Software Developer",
    skills: ["JavaScript", "React", "Next.js"],

    address: {
        city: "Kochi",
        state: "Kerala"
    },

    introduce() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// console.log(developer.introduce())
// Hi, I'm Soorya
// undefined

const use = {
    name: "Soorya"
};

const anotherUser = use;

anotherUser.name = "Arun";

// console.log(use.name);
// console.log(anotherUser.name);
// // Arun
// // Arun