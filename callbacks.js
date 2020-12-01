//setTimeout(() => {
//    console.log('Hello World')
//}, 3000)


let getusuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Pierre Chavez',
        id
    }

    if (id === 20) {
        callback(` El usuario con id ${id}, no existe.`);
    } else {
        callback(null, usuario);
    }
}

getusuarioById(1, (err, usuario) => {

    if (err) {

        return console.log(err)
    }

    console.log('Usuario de BD', usuario)
});