const greet = ()=>{
    console.log("Hello");
}

greet(); // Hello

// Implicit Return
const addtwo = (a,b)=> a+b;
addtwo(10,10); // 20

// Explicit Return
const add = (a,b)=>{
    return a+b;
}
add(20,30) // 50