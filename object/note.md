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

