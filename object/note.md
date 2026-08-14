1. Object
An object is a way to store related data together using key–value pairs.
const user = {
    name: "Soorya",
    age: 28,
    isDeveloper: true,
    skills: ["JavaScript", "React", "Next.js"]
};
An object can hold many different types of values.
Objects can also contain functions
const obj = {
    name : "soorya";
    greet : function() {
        console.log(this.name);
    }
}
When a function is stored inside an object, we commonly call it a method.


2. How do we access values?
console.log(user.name); - Dot notation
console.log(user["name"]); - Bracket notation

3. Creating Objects in JavaScript

1) Object Literal
const person = {
    name : "soorya",
    age : 25
}

2) new Object()
const user = new Object()
This creates an empty object.
Then you can add properties:
user.name = "Soorya";
user.age = 28;
console.log(user);
{
    name: "Soorya",
    age: 28
}

4. Accessing Object Properties
1) Dot notation
console.log(user.name);
2) Bracket notation
console.log(user["name"]);

5. Adding Properties
JavaScript objects are generally mutable.
user.name = "kavya"