import fetchData from "./getIceCreams.js";

let iceCreams = [];

async function getIceCreams() {
    iceCreams = await fetchData();
    console.log(iceCreams);
}

getIceCreams();

const selectElement = document.querySelector('.ice-cream');
const result = document.querySelector('.result');

selectElement.addEventListener('change', async (event) => {
    // Para acceder al valor del select podemos utilizar selectElement.value o event.target.value
    // console.log(selectElement.value, event.target.value);

    // Buscamos el helado en el arreglo iceCream
    const heladoABuscar = selectElement.value.toLowerCase();
    let iceCream = iceCreams.find(ic => ic.nombre.toLowerCase() === heladoABuscar);
    console.log(iceCream)
    if (iceCream) {
        result.innerHTML = `Nombre: ${iceCream.nombre}, Precio: ${iceCream.precio}`;
    } else {
        result.innerHTML = "Helado no encontrado";
    }
});

