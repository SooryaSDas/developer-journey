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

function createUser() {

    let username = "Soorya";

    function getUser() {
        console.log(username);
    }

    return getUser;
}

const user = createUser();

user(); // Soorya