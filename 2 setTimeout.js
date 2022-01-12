// https://developer.mozilla.org/es/docs/Web/API/setTimeout
setTimeout(() => {
    console.log('hola mundo!');
}, 1000);

function handler() {
    console.log("Hola mundo");
}

const milliseconds = 2000;

setTimeout(handler, milliseconds);