function greet(){
    console.log(`Hello, ${this.name}`);
}

const value = {
    name : "John"
}

// greet.call(value) // Hello, John

// ---------------------------------
// with parameter
function one(message){
    console.log(message + ','+ this.name);
}
const person = {
    name : "soorya"
}

one.call(person, "Hi"); // Hi,soorya