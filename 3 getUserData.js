const userData = [
    { id: 1, name: 'Juan', lastName: 'Duran', age: 35 },
    { id: 2, name: 'Manuel', lastName: 'Perez', age: 31 },
    { id: 3, name: 'Jocelyn', lastName: 'Rodriguez', age: 30 },
    { id: 4, name: 'Maria', lastName: 'Garrido', age: 30 },
]

function getUserData(id, callback) {
    setTimeout(() => {
        const data = userData.find(user => user.id === id);
        callback(data)
    }, 1000);
}

getUserData(1, user => console.log(user));
getUserData(2, user => console.log(user));
