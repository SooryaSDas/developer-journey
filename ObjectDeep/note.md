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