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

6. deleting properties
delete user.name;

7. checking where this property exist
user.hasOwnProperty("name"); // it give result like true or false

8. Using the in operator - check is this exist or not
console.log("name" in user)

9. object in const

1) const user4 = {
    name: "Soorya"
};
user4.name = "Arun";
console.log(user4.name);  // Arun - this time the object property was reassinging it's possible

2) const user = {
    name: "Soorya"
};
user = {
    name: "Arun"
};
console.log(user); //  TypeError: Assignment to constant variable. - the full object we can't redeclared or reassign


