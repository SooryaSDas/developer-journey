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
obj.greet(); // { name: 'sandra', greet: [Function: greet] }
// this refers to: person