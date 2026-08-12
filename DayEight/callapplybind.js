///call - arguments individually

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

// one.call(person, "Hi"); // Hi,soorya

// -----------------------------------
function callex(message,wish){
    console.log(message, this.name, wish);
}
const callob = {
    name : "soorya"
}

callex.call(callob, "Good Morning", "Have a Nice Day"); // Good Morning soorya Have a Nice Day
 
// -----------------------------------

/// apply - argument as an array
