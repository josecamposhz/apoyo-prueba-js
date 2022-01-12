const promise = new Promise((resolve, reject) => {
    const value = false;
    value ? resolve('Exito') : reject('Rechazado')
})
promise
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
