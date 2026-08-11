function greet(){
    console.log(`Hello, ${this.name}`);
}

const value = {
    name : "John"
}

greet.call(value) // Hello, John