// this function
const person = {
    name : "Soorya",
    greet : function (){
        console.log(this.name);
    }
    
}
// person.greet(); // Soorya
// console.log(this) // {}

// ---------------------------------------

const obj = {
    name : "sandra",
    greet: function(){
        console.log(this);
    }
}
// obj.greet(); // { name: 'sandra', greet: [Function: greet] }
// this refers to: person

// ----------------------------------------
// this is NOT the function itself

function fn(){
    console.log(this)
}
// fn(); // global value

// -----------------------------------------
// Same function, different this

const person1 = {
    name : "rehna",
    greet: function (){
        console.log(this.name)
    }
}

const person2 = {
    name : "alfiya",
    greet: person1.greet
}

// person2.greet() // alfiya

// -----------------------------

function test(){
    console.log(this);
}
// test();
//-------------- global
const testing = {
    greet: function (){
        console.log(this)
    }
}
// testing.greet(); // { greet: [Function: greet] }

// ----------------------------
function test1(){
    console.log(this);
}
// test1(); // global

const obj1 = {
    test1: test1,
}
// obj1.test1(); // { test1: [Function: test1] } // this refers to obj1

// --------------------------------------
function test2(){
    let a = 10;
    function inner1(){
     console.log(this);
    }
    return inner1();
}
// test2(); // global

//-----------------------------
// with strict mode, this will be undefined
// "use strict"

function fun() {
    console.log(this);
}
// fun(); // undefined

// -----------------------------
const obj2 = {
    name: "soorya",
    fn: function(){
        console.log(this);
    }
}
// obj2.fn(); // { name: 'soorya', fn: [Function: fn] } // this refers to obj2

// -----------------------------
const per = {
    name : "soo",
    function(){
        console.log(this.name);
    }
}
// per.name = "soorya";
// per.function(); // soorya

// -----------------------------
// this and Nested Functions

const user = {
    name : "arya",
    greet(){
        function inner(){
            console.log(this);
        }
        inner();
    }
}
// user.greet(); // global value, because inner function is not a method of user object, so this refers to global object

// ----------------------------------

const users = {
    name: "Soorya",

    greet() {
        const test = () => {
            console.log(this);
        };

        test();
    }
};

// users.greet(); // { name: 'Soorya', greet: [Function: greet] } // this refers to users object because arrow function does not have its own this, it uses the this value from the enclosing lexical context, which is the greet method of the users object.

// ----------------------------------

const use = {
    name: "Soorya",
    fn(){
        function inner(){
            console.log(this);
        } 
        inner();      
    }
}
// use.fn(); // global value, because inner function is not a method of use object, so this refers to global object

// ----------------------------------
