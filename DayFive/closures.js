function outer() {

    let name = "Soorya";

    function inner() {
        console.log(name);
    }

    return inner;
}

const fn = outer();

fn(); // Soorya