function foo(callback) {
    //hacer algo...
    callback();
}

function saludar() {
    console.log("Hola mundo");
}

foo(saludar);