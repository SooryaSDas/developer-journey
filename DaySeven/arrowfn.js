const greet = ()=>{
    console.log("Hello");
}

greet(); // Hello

// Implicit Return
const add = (a,b)=>{
    let result = a+b;
    return (console.log(result))
}
add(10,10); // 20