// function outer() {

//     let name = "Soorya";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// const fn = outer();

// fn(); // Soorya

// ---------------------------------------------

// function createUser() {

//     let username = "Soorya";

//     function getUser() {
//         console.log(username);
//     }

//     return getUser;
// }

// const user = createUser();

// user(); // Soorya

// ---------------------------------------------

// function outer() {

//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// 1
// 2
// 3

// ----------------------------------------
// let a = 10;

// function one() {
//     console.log(a);
// }

// function two() {
//     let a = 20;
//     one();
// }

// two(); // 10

// ------------------------------------------
let a = 10;

function one() {

    function two() {
        console.log(a);
    }

    return two;
}

function three() {

    let a = 30;

    const fn = one();

    fn();
}

three(); // 10