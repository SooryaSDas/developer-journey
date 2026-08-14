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
console.log(user1); // { name: 'sandra', place: 'attingal' }


// Accessing Object Properties

