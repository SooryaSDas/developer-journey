// let language = "JavaScript";

// function learn() {
//   let topic = "Closure";

//   function explain() {
//     console.log(language);
//     console.log(topic);
//   }

//   explain();
// }
// learn();
//  output
//  JavaScript
// Closure

// ---------------------------------------------------------------------------------------------------

// function one() {

//     function two() {
//         let x = 10;
//     }

//     function three() {
//         console.log(x);
//     }

// }
// output : no, Because three()'s Outer Lexical Environment points to one(), not to two().

// ---------------------------------------------------------------------------------------------------

// let a = 10;

// function one() {

//     let b = 20;

//     function two() {

//         console.log(a);
//         console.log(b);
//         console.log(c);

//     }

//     two();

// }

// one();

// output : 10, 20, ReferenceError: c is not defined

// ----------------------------------------------------------------------------
function outer() {
    let name = "Soorya";

    function inner() {
        console.log(name);
    }

    return inner;
}

const fn = outer();
fn(); // Soorya

// ----------------------------------------------------------------------------
