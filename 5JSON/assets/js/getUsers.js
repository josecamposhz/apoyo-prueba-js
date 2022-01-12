const url = "http://localhost:5500/5JSON/usuarios.json";

const getUsers = async () => {
    const response = await fetch(url); // GET
    const data = await response.json(); //
    return data;
};

export default getUsers;