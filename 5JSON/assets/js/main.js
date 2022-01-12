import getUsers from "./getUsers.js";

window.playSound = function (name) {
    console.log(`Hola ${name}`);

    const audio = document.getElementById("audio");
    audio.setAttribute("src", "assets/sounds/Aullido.mp3");
    // audio.play();
}

// Función global
window.imprimir = function() {
    console.log("imprimir")
}

async function loadData() {
    let users = await getUsers();
    drawUsers(users);
}

function drawUsers(users) {
    document.querySelector("ul").innerHTML = "";
    users.forEach(user => {
        // Creamos un li
        let li = document.createElement("li");
        // Agregamos la clase my-2 al li
        li.classList.add('my-2');
        li.innerHTML = `${user.name} ${user.lastName}, edad: ${user.age}`;
        li.innerHTML += `<button class="btn btn-primary ms-3" onclick="playSound('${user.name}')">Reproducir Audio</button>`;
        // Al botón generado en la línea anterior le agregamos el evento onclick, el cual llama a la función playSound.
        // Destacar que si necesitamos pasar un argumento y este debe ser un string debemos agregarle cremillas simple o dobles
        // (esto depende de como estemos trabajos los atributos, en nuestro caso estamos utilizando las cremillas dobles: class="btn btn-primary ms-3")
        // por lo tanto el string se debe pasar con cremillas simples: '${user.name}'
        // Con lo anterior cada vez que demos click en el botón llamaremos a la función playSoun pasando como argumento el nombre del usuario
        document.querySelector("ul").appendChild(li);
    });
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    /* Obtenemos los datos de los inputs */
    const name = document.getElementById("nombre").value;
    const lastName = document.querySelector("input[name='lastName']").value;
    const age = document.querySelector("input[name='age']").value;

    /* Agreamos el usuario al DOM */
    let li = document.createElement("li");
    li.textContent = `${name} ${lastName}, edad: ${age}`;
    li.innerHTML += `<button class="btn btn-primary ms-3" onclick="playSound('${name}')">Reproducir Audio</button>`;
    document.querySelector("ul").appendChild(li);
});

loadData();