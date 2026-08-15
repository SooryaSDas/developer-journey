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
obj3.greet(10,20); // 30