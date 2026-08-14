const obj = {
    name : "soorya",
    greet : function () {
        console.log(this.name);
    }
}

obj.greet(); // soorya