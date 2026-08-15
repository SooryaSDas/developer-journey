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
