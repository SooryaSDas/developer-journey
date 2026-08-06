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

// ---------------------------------------

function one() {

    function two() {
        let x = 10;
    }

    function three() {
        console.log(x);
    }

}
// output : no, Because three()'s Outer Lexical Environment points to one(), not to two().