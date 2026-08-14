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

// Adding Properties
user1.name = "yesu";
console.log(user1); // { name: 'yesu', place: 'attingal' }
user1.age = 25;
console.log(user1) // { name: 'yesu', place: 'attingal', age: 25 }