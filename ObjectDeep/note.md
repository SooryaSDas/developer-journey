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
