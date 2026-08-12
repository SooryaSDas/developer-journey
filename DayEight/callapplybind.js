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

// callex.call(callob, "Good Morning", "Have a Nice Day"); // Good Morning soorya Have a Nice Day
 
// -----------------------------------
/// apply - argument as an array
function persons(age, city){
    console.log(this.name);
    console.log(age);
    console.log(city);
}
const person1 = {
    name : "soorya"
}
person1.name = "sandra"
const person2 = {
    name : person1.name
}

persons.apply(person1,[20,"trivandrum"]);
// output
// sandra
// 20
// trivandrum

persons.apply(person2,[25,"trivandrum"]);
// output
// sandra
// 25
// trivandrum