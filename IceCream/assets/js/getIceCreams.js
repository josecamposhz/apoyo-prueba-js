const url = "http://localhost:5500/IceCream/ice-cream.json";

const getIceCreams = async () => {
    const response = await fetch(url); // GET
    const data = await response.json(); //
    return data["ice-cream"];
};

export default getIceCreams;