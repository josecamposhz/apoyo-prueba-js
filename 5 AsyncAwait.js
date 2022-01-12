const getExternalData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola mundo');
        }, 1500);
    })
};

async function getData() {
    const resp = await getExternalData();
    console.log(resp);
}

// const getData = async () => {
//     const resp = await getExternalData();
//     console.log(resp);
// }

getData();
