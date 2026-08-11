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
"use strict"

function fun() {
    console.log(this);
}
fun(); // undefined