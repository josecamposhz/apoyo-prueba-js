function C() {
    console.log('C')
}

function B() {
    C()
}

function A() {
    B()
}

setTimeout(function () {
    console.log("Hola mundo")
}, 0);

A();