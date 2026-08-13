// function greet() {
//     console.log("Hello");
// }

// const result = greet();

// console.log(result); // hello undefined
 // ---------------------------------------------------------
// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }

// execute(greet); // hello

//---------------------------------------------------------
const user = {
    name: "Soorya",

    regular: function () {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user.regular(); // Soorya
user.arrow(); // undefined