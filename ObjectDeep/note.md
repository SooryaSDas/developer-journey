1. how to get all property names:
const user = {
    name: "Soorya",
    age: 28,
    city: "Kochi"
};

console.log(Object.keys(user));

2. find key
Object.keys(user);

3. find values
Object.values(user);

4. Object.entries
Object.entries() is used when you want to get both the key and the value from an object.

5. for in
for (let key in user) {
    console.log(key, user[key]);
}

6. for...in vs Object.keys()
for(let key in user){
    console.log(key, user[key])
}

7. Object Destructuring
object destructuring is the shortcut for taking the values from object and putting them into the variables.
eg : const user = {
    name : "soorya",
    place : "attingal"
}
const {name, place } = user
console.log(name);

8. Object Spread Operator ...
it take properties from one object and copy to another one object
Spread does NOT modify the original object

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
console.log(san.greet())  // sandra is 26 years old , undefined

console.log(spreadop.greet()) // sandra is 25 years old , undefined

When duplicate properties exist, the property that comes later wins.
for example if current code take the age second and spread the spreadop first right, we can tall the age first then we can spread the operator and see
const sandra = {
    age:26,
    ...spreadop
}
console.log(sandra.greet()); // sandra is 25 years old , undefined
console.log(spreadop.greet()) // sandra is 25 years old , undefined


// Adding a new property
const saan = {
    ...spreadop,
    study: "BCA"
}
console.log(saan)

// Rest Operator with Objects ...
This is very similar in syntax to spread, but the job is completely different.
const res = {
    namess : "kanmani",
    place : "Ernakulam"
}
 const {namess, ...rest} = res;
console.log(namess); // kanmani
console.log(rest); // { place: 'Ernakulam' } // collects everything that hasn't already been taken:


// Rest vs Spread
Spread → expands/copies , "Take everything out and spread it."
Rest -> collect remaining, "Take this one, and put the rest into a new object."


// Object Reference vs Copy

1. Object Reference
const sandras = {
    fullname : "sandra satheesh",
    age : 26
}
const copy = sandras


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
console.log(sandras); // { fullname: 'soorya s das', age: 26 }
console.log(sandraspread); 


Spread creates a shallow copy, not a completely independent deep copy.

// Shallow Copy 
The outer object is copied, but the inner objects are still referenced. If you change an inner object in the copied object, it will also affect the original object. 

const shallo = {
    name : "soorya",
    address : {
        city : "trivandrum"
    }
}
const copyshallo = {...shallo};
const add = copyshallo.address === shallo.address
console.log(add); // true - Because both point to the same nested object.

const add2 = copyshallo === shallo;
console.log(add2); // false


// deep copy
structuredClone is a built-in method in JavaScript that creates a deep copy of a given object, including all nested objects and arrays. This means that changes made to the copied object will not affect the original object, and vice versa.
Shallow copy copies only the first level. Deep copy recursively creates independent copies of nested objects.
eg : 
const user = {
    name: "Soorya",
    address: {
        city: "Kochi"
    }
};

const copy = structuredClone(user);

copy.address.city = "Trivandrum";

console.log(user.address.city);
console.log(copy.address.city);